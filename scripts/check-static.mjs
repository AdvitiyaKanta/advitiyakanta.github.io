import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const root = process.cwd();
const failures = [];
const notes = [];

function fail(message) {
  failures.push(message);
}

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(directory, entry.name);
    if (entry.name === ".git") return [];
    return entry.isDirectory() ? walk(fullPath) : [fullPath];
  });
}

function attr(html, expression) {
  const match = html.match(expression);
  return match ? match[1].trim() : "";
}

function localTarget(htmlFile, reference) {
  const clean = reference.split("#")[0].split("?")[0];
  if (!clean) return null;
  const decoded = decodeURIComponent(clean);
  const resolved = decoded.startsWith("/")
    ? path.join(root, decoded)
    : path.resolve(path.dirname(htmlFile), decoded);
  if (fs.existsSync(resolved) && fs.statSync(resolved).isDirectory()) {
    return path.join(resolved, "index.html");
  }
  return resolved;
}

const allFiles = walk(root);
const htmlFiles = allFiles.filter((file) => file.endsWith(".html"));
const publicFiles = allFiles.filter((file) => !file.includes(`${path.sep}scripts${path.sep}`));

for (const file of publicFiles) {
  const relative = path.relative(root, file);
  if (/\.(docx?|pages|key|pptx?|xlsx?)$/i.test(file)) fail(`Source document exposed: ${relative}`);
  if (path.basename(file) === ".DS_Store") fail(`Finder metadata exposed: ${relative}`);
  if (relative === "assets/cv/Advitiya_Kanta_CV.pdf") fail("Legacy public CV remains in the site");
}

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, "utf8");
  const relative = path.relative(root, file);
  const title = attr(html, /<title>([^<]+)<\/title>/i);
  const description = attr(html, /<meta\s+name="description"\s+content="([^"]+)"/i);
  const canonical = attr(html, /<link\s+rel="canonical"\s+href="([^"]+)"/i);

  if (!title) fail(`${relative}: missing title`);
  if (!description) fail(`${relative}: missing meta description`);
  if (!canonical || !canonical.startsWith("https://advitiyakanta.github.io")) {
    fail(`${relative}: missing or invalid canonical URL`);
  }
  if (!/<html\s+lang="en"/i.test(html)) fail(`${relative}: missing html lang`);
  if (!/<main\b/i.test(html)) fail(`${relative}: missing main landmark`);
  if (!/class="skip-link"/i.test(html)) fail(`${relative}: missing skip link`);

  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
  const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
  if (duplicateIds.length) fail(`${relative}: duplicate IDs ${[...new Set(duplicateIds)].join(", ")}`);

  for (const match of html.matchAll(/<(?:a|link)\b[^>]*\bhref="([^"]+)"[^>]*>/gi)) {
    const reference = match[1];
    if (/^(?:https?:|mailto:|tel:|javascript:)/i.test(reference)) continue;
    const target = localTarget(file, reference);
    if (target && !fs.existsSync(target)) fail(`${relative}: missing href target ${reference}`);
    const fragment = reference.includes("#") ? reference.split("#")[1] : "";
    if (target && fragment && fs.existsSync(target) && target.endsWith(".html")) {
      const targetHtml = fs.readFileSync(target, "utf8");
      if (!new RegExp(`\\sid=["']${fragment.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}["']`).test(targetHtml)) {
        fail(`${relative}: fragment #${fragment} not found in ${path.relative(root, target)}`);
      }
    }
  }

  for (const match of html.matchAll(/<(?:img|script)\b[^>]*\bsrc="([^"]+)"[^>]*>/gi)) {
    const reference = match[1];
    if (/^(?:https?:|data:)/i.test(reference)) continue;
    const target = localTarget(file, reference);
    if (target && !fs.existsSync(target)) fail(`${relative}: missing src target ${reference}`);
  }

  for (const match of html.matchAll(/<img\b([^>]*)>/gi)) {
    if (!/\balt="[^"]*"/i.test(match[1])) fail(`${relative}: image without alt attribute`);
  }

  for (const match of html.matchAll(/<a\b([^>]*)>/gi)) {
    const attributes = match[1];
    if (/target="_blank"/i.test(attributes) && !/rel="[^"]*(?:noopener|noreferrer)/i.test(attributes)) {
      fail(`${relative}: target=_blank link without noopener/noreferrer`);
    }
  }
}

const dataSource = fs.readFileSync(path.join(root, "js", "data.js"), "utf8");
const imageMetaSource = fs.readFileSync(path.join(root, "js", "image-meta.js"), "utf8");
const SITE = vm.runInNewContext(`${dataSource}\nSITE;`);
const IMAGE_META = vm.runInNewContext(`${imageMetaSource}\nIMAGE_META;`);
const dataAssetReferences = new Set();

function collectAssets(value) {
  if (typeof value === "string" && value.startsWith("assets/")) dataAssetReferences.add(value);
  else if (Array.isArray(value)) value.forEach(collectAssets);
  else if (value && typeof value === "object") Object.values(value).forEach(collectAssets);
}

collectAssets(SITE);
for (const reference of dataAssetReferences) {
  const target = path.join(root, reference);
  if (!fs.existsSync(target)) fail(`Data references missing asset: ${reference}`);
  if (/\.(?:jpe?g|png|webp)$/i.test(reference) && !IMAGE_META[reference]) {
    fail(`Referenced image lacks intrinsic dimensions: ${reference}`);
  }
}

for (const project of SITE.projects) {
  const generated = path.join(root, "work", project.slug, "index.html");
  if (!fs.existsSync(generated)) fail(`Missing generated page for ${project.slug}`);
  if (!project.credits || !project.credits["My work"] || !project.credits["Team work"] ||
      !project.credits["Third-party / marketplace assets"] || !project.credits["Client or brief context"]) {
    fail(`${project.slug}: incomplete credits/attribution block`);
  }
}

const generatedPages = SITE.projects.map((project) => path.join(root, "work", project.slug, "index.html"));
const generatedMetadata = generatedPages.map((file) => {
  const html = fs.readFileSync(file, "utf8");
  return {
    file,
    title: attr(html, /<title>([^<]+)<\/title>/i),
    description: attr(html, /<meta\s+name="description"\s+content="([^"]+)"/i),
    canonical: attr(html, /<link\s+rel="canonical"\s+href="([^"]+)"/i),
    ogTitle: attr(html, /<meta\s+property="og:title"\s+content="([^"]+)"/i),
    ogDescription: attr(html, /<meta\s+property="og:description"\s+content="([^"]+)"/i),
    ogImage: attr(html, /<meta\s+property="og:image"\s+content="([^"]+)"/i),
    ogUrl: attr(html, /<meta\s+property="og:url"\s+content="([^"]+)"/i),
    twitterImage: attr(html, /<meta\s+name="twitter:image"\s+content="([^"]+)"/i),
    robots: attr(html, /<meta\s+name="robots"\s+content="([^"]+)"/i)
  };
});

for (const key of ["title", "description", "canonical", "ogTitle", "ogDescription", "ogImage", "ogUrl", "twitterImage"]) {
  for (const metadata of generatedMetadata) {
    if (!metadata[key]) fail(`${path.relative(root, metadata.file)}: missing ${key}`);
  }
}
for (const metadata of generatedMetadata) {
  if (metadata.robots !== "index,follow") fail(`${path.relative(root, metadata.file)}: canonical project page must be indexable`);
}
const compatibilityRobots = attr(fs.readFileSync(path.join(root, "project.html"), "utf8"), /<meta\s+name="robots"\s+content="([^"]+)"/i);
if (compatibilityRobots !== "noindex,follow") fail("project.html compatibility route must be noindex,follow");
for (const key of ["title", "description", "canonical", "ogUrl"]) {
  const values = generatedMetadata.map((metadata) => metadata[key]);
  if (new Set(values).size !== values.length) fail(`Generated project ${key} values are not unique`);
}

const publicTextFiles = publicFiles.filter((file) => /\.(?:html|js|css|xml|txt)$/i.test(file));
const forbiddenPatterns = [
  [/\+44\s?\d{4}/i, "UK phone number"],
  [/rated\s+5\.0/i, "unqualified rating"],
  [/shipped\s+(?:AA|AAA|client)/i, "unsupported shipped-title claim"],
  [/advanced\s+Blueprint/i, "advanced Blueprint claim"],
  [/performance\s+budget/i, "performance-budget claim"]
];
for (const file of publicTextFiles) {
  const text = fs.readFileSync(file, "utf8");
  for (const [pattern, label] of forbiddenPatterns) {
    if (pattern.test(text)) fail(`${path.relative(root, file)}: ${label}`);
  }
}

const imageFiles = publicFiles.filter((file) => /\.(?:jpe?g|png|webp)$/i.test(file));
const oversized = imageFiles.filter((file) => fs.statSync(file).size > 1024 * 1024);
notes.push(`${htmlFiles.length} HTML files checked`);
notes.push(`${dataAssetReferences.size} data-driven asset references checked`);
notes.push(`${imageFiles.length} raster images checked; ${oversized.length} above 1 MiB`);
notes.push(`${SITE.projects.length} generated project metadata sets checked`);

if (failures.length) {
  console.error("STATIC QA FAILED");
  failures.forEach((message) => console.error(`- ${message}`));
  process.exit(1);
}

console.log("STATIC QA PASSED");
notes.forEach((message) => console.log(`- ${message}`));
