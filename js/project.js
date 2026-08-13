/* Renders a single project page from SITE data via ?p=<slug>. */

function figHTML(img) {
  return `<figure class="shot"><img src="${img.src}" alt="${img.caption || ""}" loading="lazy" onclick="openLightbox('${img.src}')"><figcaption>${img.caption || ""}</figcaption></figure>`;
}

function renderProject() {
  const slug = new URLSearchParams(location.search).get("p");
  const p = SITE.projects.find(x => x.slug === slug) || SITE.projects[0];

  document.title = `${p.title} · ${SITE.name}`;

  // Blurred backdrop drawn from this project's own imagery.
  const bd = document.createElement("div");
  bd.className = "backdrop";
  bd.style.backgroundImage = `url("assets/projects/${p.slug}/bg.jpg")`;
  document.body.prepend(bd);

  document.getElementById("project-hero").innerHTML = `
    <p class="label">${p.badge}</p>
    <h1>${p.title}</h1>
    <p class="subtitle">${p.subtitle}</p>`;

  document.getElementById("meta-box").innerHTML = Object.entries(p.meta)
    .map(([k, v]) => `<div class="item"><strong>${k}</strong><span>${v}</span></div>`)
    .join("");

  document.getElementById("project-links").innerHTML = (p.links || [])
    .map(l => `<a href="${l.url}" target="_blank" rel="noopener">${l.label} ↗</a>`)
    .join("");

  const media = document.getElementById("project-media");
  if (p.video) {
    media.innerHTML = `<div class="video-frame"><iframe src="https://www.youtube-nocookie.com/embed/${p.video}" title="${p.title} video" allow="accelerometer; encrypted-media; picture-in-picture" allowfullscreen loading="lazy"></iframe></div>`;
  } else if (p.hero) {
    media.innerHTML = `<figure class="shot"><img src="${p.hero}" alt="${p.title}"></figure>`;
  }

  let tI = 0;
  document.getElementById("case").innerHTML = p.sections.map(s => {
    const body = (s.body || []).map(par => `<p>${par}</p>`).join("");
    const figs = (s.images || []).map(figHTML).join("");
    const gal = s.gallery
      ? `<div class="gallery">${s.gallery.map(src => `<img src="${src}" loading="lazy" alt="" onclick="openLightbox('${src}')">`).join("")}</div>`
      : "";
    let tog = "";
    if (s.toggle) {
      const id = "tg" + (tI++);
      const pane = (k, on) =>
        `<div class="tg-pane${on ? " on" : ""}" data-pane="${id}-${k}">${s.toggle[k].items.map(figHTML).join("")}</div>`;
      tog = `
        <div class="tg" data-tg="${id}">
          <div class="tg-bar" role="tablist">
            <button type="button" class="tg-btn on" data-go="${id}-a" role="tab">${s.toggle.a.name}</button>
            <button type="button" class="tg-btn" data-go="${id}-b" role="tab">${s.toggle.b.name}</button>
          </div>
          ${pane("a", true)}${pane("b", false)}
        </div>`;
    }
    return `<h2>${s.heading}</h2>${body}${figs}${tog}${gal}`;
  }).join("");

  document.querySelectorAll(".tg-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const box = btn.closest(".tg");
      box.querySelectorAll(".tg-btn").forEach(b => b.classList.toggle("on", b === btn));
      box.querySelectorAll(".tg-pane").forEach(pn =>
        pn.classList.toggle("on", pn.dataset.pane === btn.dataset.go));
    });
  });

  const idx = SITE.projects.indexOf(p);
  const prev = SITE.projects[(idx - 1 + SITE.projects.length) % SITE.projects.length];
  const next = SITE.projects[(idx + 1) % SITE.projects.length];
  document.getElementById("pager").innerHTML = `
    <a href="project.html?p=${prev.slug}">← ${prev.title}</a>
    <a href="project.html?p=${next.slug}">${next.title} →</a>`;
}

function openLightbox(src) {
  const lb = document.getElementById("lightbox");
  lb.querySelector("img").src = src;
  lb.classList.add("open");
}
document.addEventListener("DOMContentLoaded", () => {
  const lb = document.getElementById("lightbox");
  if (lb) lb.addEventListener("click", () => lb.classList.remove("open"));
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") document.getElementById("lightbox").classList.remove("open");
  });
});

renderProject();
