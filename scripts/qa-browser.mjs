import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const playwrightModule = process.env.PLAYWRIGHT_MODULE || "playwright";
const { chromium } = require(playwrightModule);
const browserExecutable = process.env.CHROME_EXECUTABLE || undefined;
const baseUrl = process.env.PORTFOLIO_QA_URL || "http://127.0.0.1:4173";
const outputRoot = path.resolve(process.cwd(), "..", "work", "site-qa");
const failures = [];
const checks = [];
const performanceResults = [];

fs.mkdirSync(outputRoot, { recursive: true });

function check(condition, message) {
  if (condition) checks.push(message);
  else failures.push(message);
}

const pages = [
  ["home", "/"],
  ["about", "/about.html"],
  ["revolver", "/work/revolver-rift/"],
  ["tpe", "/work/to-pierce-eternity/"],
  ["hh", "/work/hull-and-horizon/"],
  ["goodbabies", "/work/goodbabies/"],
  ["maharaja", "/work/maharajas-palace/"],
  ["promised-night", "/work/promised-night/"],
  ["tower-defence", "/work/babys-first-tower-defence/"],
  ["dam", "/work/tlou-dam-level/"]
];
const leadNames = new Set(["home", "about", "revolver", "tpe", "hh"]);
const viewports = [
  ["360", { width: 360, height: 800 }],
  ["768", { width: 768, height: 1024 }],
  ["1024", { width: 1024, height: 768 }],
  ["1440", { width: 1440, height: 1000 }]
];

const browser = await chromium.launch({ headless: true, ...(browserExecutable ? { executablePath: browserExecutable } : {}) });

async function makeContext(viewport, javaScriptEnabled = true) {
  const context = await browser.newContext({
    viewport,
    javaScriptEnabled,
    reducedMotion: "reduce",
    colorScheme: "dark"
  });
  await context.route("**/*", async (route) => {
    const url = new URL(route.request().url());
    if (url.origin === new URL(baseUrl).origin) await route.continue();
    else await route.abort("blockedbyclient");
  });
  return context;
}

async function prepareFullPage(page) {
  await page.evaluate(async () => {
    document.querySelectorAll('img[loading="lazy"]').forEach((image) => {
      image.loading = "eager";
    });
    const totalHeight = document.documentElement.scrollHeight;
    for (let y = 0; y < totalHeight; y += Math.max(300, window.innerHeight * 0.8)) {
      window.scrollTo(0, y);
      await new Promise((resolve) => setTimeout(resolve, 35));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForFunction(() => [...document.images].every((image) => !image.getAttribute("src") || image.complete), null, { timeout: 10000 });
  await page.waitForTimeout(850);
}

try {
  for (const [viewportName, viewport] of viewports) {
    const context = await makeContext(viewport);
    for (const [name, route] of pages) {
      const page = await context.newPage();
      const consoleErrors = [];
      const pageErrors = [];
      const internalRequestFailures = [];
      page.on("console", (message) => {
        if (message.type() === "error" && !/ERR_BLOCKED_BY_CLIENT/.test(message.text())) consoleErrors.push(message.text());
      });
      page.on("pageerror", (error) => pageErrors.push(error.message));
      page.on("requestfailed", (request) => {
        if (request.url().startsWith(baseUrl)) internalRequestFailures.push(request.url());
      });

      const response = await page.goto(`${baseUrl}${route}`, { waitUntil: "domcontentloaded" });
      await page.waitForTimeout(150);
      if (leadNames.has(name)) {
        performanceResults.push(await page.evaluate(({ name, viewportName, localOrigin }) => {
          const entries = performance.getEntriesByType("resource").filter((entry) => entry.name.startsWith(localOrigin));
          return {
            name,
            viewport: viewportName,
            localRequestsBeforeScroll: entries.length,
            transferBytesBeforeScroll: entries.reduce((total, entry) => total + (entry.transferSize || entry.encodedBodySize || 0), 0),
            domContentLoadedMs: Math.round(performance.getEntriesByType("navigation")[0].domContentLoadedEventEnd)
          };
        }, { name, viewportName, localOrigin: new URL(baseUrl).origin }));
      }
      await prepareFullPage(page);
      check(response && response.status() === 200, `${viewportName}px ${name}: HTTP 200`);
      check(await page.locator("main").count() === 1, `${viewportName}px ${name}: one main landmark`);
      check(await page.locator("h1").count() === 1, `${viewportName}px ${name}: one h1`);

      const domResult = await page.evaluate(() => {
        const ids = [...document.querySelectorAll("[id]")].map((element) => element.id);
        const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
        const brokenImages = [...document.images]
          .filter((image) => image.getAttribute("src") && image.complete && image.naturalWidth === 0)
          .map((image) => image.src);
        const imagesWithoutAlt = [...document.images].filter((image) => !image.hasAttribute("alt")).length;
        const distortedImages = [...document.images].filter((image) => {
          if (!image.getAttribute("src") || !image.naturalWidth || !image.naturalHeight) return false;
          const style = getComputedStyle(image);
          if (["cover", "contain"].includes(style.objectFit)) return false;
          const rect = image.getBoundingClientRect();
          if (!rect.width || !rect.height) return false;
          return Math.abs((rect.width / rect.height) / (image.naturalWidth / image.naturalHeight) - 1) > 0.02;
        }).map((image) => image.src);
        const blankVisibleLinks = [...document.querySelectorAll("a")].filter((link) => {
          const style = getComputedStyle(link);
          return style.display !== "none" && style.visibility !== "hidden" && !link.textContent.trim() && !link.getAttribute("aria-label");
        }).length;
        const unsafeBlankTargets = [...document.querySelectorAll('a[target="_blank"]')]
          .filter((link) => !/noopener|noreferrer/.test(link.rel)).length;
        return {
          overflow: document.documentElement.scrollWidth - window.innerWidth,
          duplicateIds: [...new Set(duplicateIds)],
          brokenImages,
          imagesWithoutAlt,
          distortedImages,
          blankVisibleLinks,
          unsafeBlankTargets,
          title: document.title,
          summaryCount: document.querySelectorAll(".summary-item").length,
          creditCount: document.querySelectorAll(".credit-item").length
        };
      });

      check(domResult.overflow <= 1, `${viewportName}px ${name}: no horizontal overflow`);
      check(domResult.duplicateIds.length === 0, `${viewportName}px ${name}: no duplicate IDs`);
      check(domResult.brokenImages.length === 0, `${viewportName}px ${name}: no broken images`);
      check(domResult.imagesWithoutAlt === 0, `${viewportName}px ${name}: all images have alt attributes`);
      check(domResult.distortedImages.length === 0, `${viewportName}px ${name}: no unintentionally distorted images`);
      check(domResult.blankVisibleLinks === 0, `${viewportName}px ${name}: no unnamed visible links`);
      check(domResult.unsafeBlankTargets === 0, `${viewportName}px ${name}: safe new-window links`);
      check(consoleErrors.length === 0, `${viewportName}px ${name}: no console errors`);
      check(pageErrors.length === 0, `${viewportName}px ${name}: no page errors`);
      check(internalRequestFailures.length === 0, `${viewportName}px ${name}: no failed local requests`);

      if (!(["home", "about"].includes(name))) {
        check(domResult.summaryCount >= 6, `${viewportName}px ${name}: scannable summary rendered`);
        check(domResult.creditCount === 4, `${viewportName}px ${name}: complete attribution rendered`);
      }

      const iconSizes = await page.evaluate(() => [...document.querySelectorAll(".menu-btn, .theme-btn")]
        .filter((element) => getComputedStyle(element).display !== "none")
        .map((element) => {
          const rect = element.getBoundingClientRect();
          return [rect.width, rect.height];
        }));
      check(iconSizes.every(([width, height]) => width >= 44 && height >= 44), `${viewportName}px ${name}: visible icon targets are at least 44px`);

      if (leadNames.has(name) && (viewportName === "360" || viewportName === "1440")) {
        const directory = path.join(outputRoot, viewportName);
        fs.mkdirSync(directory, { recursive: true });
        await page.screenshot({ path: path.join(directory, `${name}.png`), fullPage: true });
      }
      await page.close();
    }
    await context.close();
  }

  const mobileContext = await makeContext({ width: 360, height: 800 });
  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto(`${baseUrl}/`, { waitUntil: "domcontentloaded" });
  const menuButton = mobilePage.locator("#menuBtn");
  check(await menuButton.isVisible(), "mobile menu button is visible");
  await menuButton.click();
  check(await menuButton.getAttribute("aria-expanded") === "true", "mobile menu exposes expanded state");
  check(await mobilePage.locator("#menuPanel").isVisible(), "mobile menu panel opens");
  await mobilePage.keyboard.press("Escape");
  check(await menuButton.getAttribute("aria-expanded") === "false", "Escape closes mobile menu");
  check(await menuButton.evaluate((element) => element === document.activeElement), "focus returns to mobile menu button");

  const themeButton = mobilePage.locator("#themeBtn");
  await themeButton.click();
  check(await mobilePage.locator("body").evaluate((body) => body.classList.contains("light")), "theme button activates light theme");
  check(await themeButton.getAttribute("aria-pressed") === "true", "theme button exposes pressed state");
  await mobilePage.reload({ waitUntil: "domcontentloaded" });
  check(await mobilePage.locator("body").evaluate((body) => body.classList.contains("light")), "theme preference persists after reload");
  await prepareFullPage(mobilePage);
  await mobilePage.screenshot({ path: path.join(outputRoot, "360", "home-light.png"), fullPage: true });
  await mobileContext.close();

  const interactionContext = await makeContext({ width: 1440, height: 1000 });
  const interactionPage = await interactionContext.newPage();
  await interactionPage.goto(`${baseUrl}/work/to-pierce-eternity/`, { waitUntil: "domcontentloaded" });
  const firstZoom = interactionPage.locator("[data-lightbox-src]").first();
  await firstZoom.click();
  check(await interactionPage.locator("#lightbox").isVisible(), "lightbox opens as a visible dialog");
  check(await interactionPage.locator("#lightbox img").evaluate((image) => image.complete && image.naturalWidth > 0), "lightbox resolves nested-page image path");
  check(await interactionPage.locator(".lightbox-close").evaluate((element) => element === document.activeElement), "lightbox moves focus to close control");
  await interactionPage.keyboard.press("Escape");
  check(await interactionPage.locator("#lightbox").isHidden(), "Escape closes lightbox");
  check(await firstZoom.evaluate((element) => element === document.activeElement), "lightbox returns focus to trigger");

  const tabs = interactionPage.locator('[role="tablist"] [role="tab"]');
  check(await tabs.count() >= 2, "comparison tabs render");
  await tabs.first().focus();
  await interactionPage.keyboard.press("ArrowRight");
  check(await tabs.nth(1).getAttribute("aria-selected") === "true", "arrow keys select the next comparison tab");
  const selectedPanelId = await tabs.nth(1).getAttribute("aria-controls");
  check(await interactionPage.locator(`#${selectedPanelId}`).isVisible(), "selected tab exposes its panel");

  await interactionPage.locator(".pager a").last().click();
  await interactionPage.waitForLoadState("domcontentloaded");
  check((await interactionPage.locator("h1").textContent()).includes("Hull & Horizon"), "project pager navigates to the next case study");

  await interactionPage.goto(`${baseUrl}/project.html?p=to-pierce-eternity`, { waitUntil: "domcontentloaded" });
  check((await interactionPage.locator("h1").textContent()).includes("To Pierce Eternity"), "legacy project query URL still resolves");

  await interactionPage.goto(`${baseUrl}/`, { waitUntil: "domcontentloaded" });
  const firstCard = interactionPage.locator('a.proj[href="work/revolver-rift/"]').first();
  await firstCard.click();
  await interactionPage.waitForLoadState("domcontentloaded");
  check((await interactionPage.locator("h1").textContent()).includes("Revolver Rift"), "homepage project card navigation works");

  await interactionPage.goto(`${baseUrl}/`, { waitUntil: "domcontentloaded" });
  const pdfLinks = interactionPage.locator('.download-links a[href$=".pdf"]');
  check(await pdfLinks.count() === 2, "homepage exposes exactly two recruiter downloads");
  for (let index = 0; index < 2; index += 1) {
    const href = await pdfLinks.nth(index).getAttribute("href");
    const response = await interactionContext.request.get(`${baseUrl}/${href}`);
    check(response.status() === 200, `download ${path.basename(href)} returns HTTP 200`);
    check((await response.body()).length > 1000, `download ${path.basename(href)} contains a non-empty PDF`);
  }
  await interactionPage.locator("#themeBtn").click();
  await prepareFullPage(interactionPage);
  await interactionPage.screenshot({ path: path.join(outputRoot, "1440", "home-light.png"), fullPage: true });
  await interactionPage.locator("#themeBtn").click();

  const videoPages = pages.filter(([, route]) => route.startsWith("/work/"));
  for (const [name, route] of videoPages) {
    await interactionPage.goto(`${baseUrl}${route}`, { waitUntil: "domcontentloaded" });
    const posterCount = await interactionPage.locator(".video-poster").count();
    if (posterCount) {
      check(await interactionPage.locator(".video-frame iframe").count() === 0, `${name}: video does not contact YouTube before consent`);
      check(await interactionPage.locator(".video-poster img").evaluate((image) => image.complete && image.naturalWidth > 0), `${name}: local video poster loads`);
      await interactionPage.locator(".video-poster").click();
      const iframe = interactionPage.locator(".video-frame iframe");
      const source = await iframe.getAttribute("src");
      check(source.startsWith("https://www.youtube-nocookie.com/embed/"), `${name}: privacy-enhanced video embed`);
      check(Boolean(await iframe.getAttribute("title")), `${name}: video iframe has a title`);
      check(source.includes("autoplay=1"), `${name}: explicit play action starts the video`);
    }
  }
  await interactionContext.close();

  const noScriptContext = await makeContext({ width: 360, height: 800 }, false);
  const noScriptPage = await noScriptContext.newPage();
  await noScriptPage.goto(`${baseUrl}/work/to-pierce-eternity/`, { waitUntil: "domcontentloaded" });
  check(await noScriptPage.locator("noscript").textContent().then((text) => text.includes("To Pierce Eternity")), "generated project has a useful no-JavaScript fallback");
  check(await noScriptPage.locator('a[href="../../index.html#selected-work"]').count() > 0, "no-JavaScript project navigation remains available");
  await noScriptContext.close();
} finally {
  await browser.close();
}

const report = {
  baseUrl,
  passed: checks.length,
  failed: failures.length,
  failures,
  performance: performanceResults,
  screenshotDirectory: outputRoot
};
fs.writeFileSync(path.join(outputRoot, "browser-results.json"), `${JSON.stringify(report, null, 2)}\n`);

if (failures.length) {
  console.error(`BROWSER QA FAILED: ${failures.length} failure(s), ${checks.length} checks passed`);
  failures.forEach((message) => console.error(`- ${message}`));
  process.exit(1);
}

console.log(`BROWSER QA PASSED: ${checks.length} checks`);
console.log(`Screenshots: ${outputRoot}`);
