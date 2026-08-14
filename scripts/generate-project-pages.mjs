import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const root = process.cwd();
const templatePath = path.join(root, "project.html");
const dataPath = path.join(root, "js", "data.js");
const template = fs.readFileSync(templatePath, "utf8");
const source = fs.readFileSync(dataPath, "utf8");
const SITE = vm.runInNewContext(`${source}\nSITE;`);
const baseUrl = "https://advitiyakanta.github.io";

function escapeHTML(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function replaceMeta(html, selector, value) {
  const escaped = escapeHTML(value);
  const pattern = new RegExp(`(<meta ${selector} content=")[^"]*(">)`);
  return html.replace(pattern, `$1${escaped}$2`);
}

for (const project of SITE.projects) {
  const canonical = `${baseUrl}/work/${project.slug}/`;
  const socialImage = `${baseUrl}/${project.hero}`;
  const title = `${project.title} · Level Design Case Study`;
  const description = project.description;
  let html = template;

  html = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeHTML(title)}</title>`);
  html = replaceMeta(html, 'name="description"', description);
  html = replaceMeta(html, 'name="robots"', "index,follow");
  html = html.replace(
    '<link rel="canonical" href="https://advitiyakanta.github.io/project.html">',
    `<link rel="canonical" href="${canonical}">`
  );
  html = replaceMeta(html, 'property="og:title"', title);
  html = replaceMeta(html, 'property="og:description"', description);
  html = replaceMeta(html, 'property="og:url"', canonical);
  html = replaceMeta(html, 'name="twitter:title"', title);
  html = replaceMeta(html, 'name="twitter:description"', description);
  html = html.replace(
    '<meta property="og:url" content="' + canonical + '">',
    '<meta property="og:url" content="' + canonical + '">\n' +
      `  <meta property="og:image" content="${socialImage}">`
  );
  html = html.replace(
    '<meta name="twitter:description" content="' + escapeHTML(description) + '">',
    '<meta name="twitter:description" content="' + escapeHTML(description) + '">\n' +
      `  <meta name="twitter:image" content="${socialImage}">`
  );
  html = html.replace(
    '<body class="inner project-page">',
    `<body class="inner project-page" data-project="${escapeHTML(project.slug)}" data-root="../../">`
  );
  html = html.replaceAll('href="index.html', 'href="../../index.html');
  html = html.replaceAll('href="about.html', 'href="../../about.html');
  html = html.replaceAll('href="assets/', 'href="../../assets/');
  html = html.replace('href="css/style.css"', 'href="../../css/style.css"');
  html = html.replace('src="js/data.js"', 'src="../../js/data.js"');
  html = html.replace('src="js/image-meta.js"', 'src="../../js/image-meta.js"');
  html = html.replace('src="js/project.js"', 'src="../../js/project.js"');
  html = html.replace('src="js/site.js"', 'src="../../js/site.js"');
  html = html.replace(
    '<div class="wrap">\n      <a class="back"',
    `<noscript><div class="wrap noscript-note"><p><strong>${escapeHTML(project.title)}:</strong> ${escapeHTML(description)}</p><p>JavaScript is required for the illustrated case study. Navigation and downloads remain available.</p></div></noscript>\n    <div class="wrap">\n      <a class="back"`
  );

  const outputDirectory = path.join(root, "work", project.slug);
  fs.mkdirSync(outputDirectory, { recursive: true });
  fs.writeFileSync(path.join(outputDirectory, "index.html"), html);
}

const urls = ["/", "/about.html", ...SITE.projects.map((project) => `/work/${project.slug}/`)];
const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...urls.map((url) => `  <url><loc>${baseUrl}${url}</loc></url>`),
  '</urlset>',
  ''
].join("\n");
fs.writeFileSync(path.join(root, "sitemap.xml"), sitemap);

console.log(`Generated ${SITE.projects.length} project pages and sitemap.xml.`);
