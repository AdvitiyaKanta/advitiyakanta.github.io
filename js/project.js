/* Renders project content from the shared evidence-reviewed data source.
   Checked-in /work/<slug>/ pages provide unique static metadata for sharing. */
(function () {
  "use strict";

  var lastLightboxTrigger = null;

  function escapeHTML(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function imagePath(src) {
    var rootPath = document.body.dataset.root || "";
    return rootPath + src;
  }

  function pagePath(relativePath) {
    var rootPath = document.body.dataset.root || "";
    return rootPath + relativePath;
  }

  function imageSize(src) {
    if (typeof IMAGE_META === "undefined" || !IMAGE_META[src]) return "";
    return " width=\"" + IMAGE_META[src][0] + "\" height=\"" + IMAGE_META[src][1] + "\"";
  }

  function imageHTML(src, alt, loading) {
    return (
      "<img src=\"" + escapeHTML(imagePath(src)) + "\" alt=\"" + escapeHTML(alt) + "\"" +
      imageSize(src) + " loading=\"" + (loading || "lazy") + "\" decoding=\"async\">"
    );
  }

  function isTall(src) {
    if (typeof IMAGE_META === "undefined" || !IMAGE_META[src]) return false;
    return IMAGE_META[src][1] / IMAGE_META[src][0] > 0.8;
  }

  function figureHTML(image, fallbackAlt) {
    var caption = image.caption || "";
    var alt = image.alt || caption || fallbackAlt;
    return (
      "<figure class=\"shot" + (isTall(image.src) ? " tall" : "") + "\">" +
        "<button class=\"zoom-button\" type=\"button\" data-lightbox-src=\"" + escapeHTML(image.src) +
          "\" data-lightbox-alt=\"" + escapeHTML(alt) + "\" aria-label=\"Open larger image: " + escapeHTML(alt) + "\">" +
          imageHTML(image.src, alt, "lazy") +
        "</button>" +
        (caption ? "<figcaption>" + escapeHTML(caption) + "</figcaption>" : "") +
      "</figure>"
    );
  }

  function projectFromLocation() {
    var slug = document.body.dataset.project;
    if (!slug) slug = new URLSearchParams(window.location.search).get("p");
    if (!slug) {
      var match = window.location.pathname.match(/\/work\/([^/]+)\/?$/);
      if (match) slug = match[1];
    }
    return SITE.projects.find(function (project) { return project.slug === slug; }) || null;
  }

  function renderSummary(project) {
    var summary = project.summary || project.meta || {};
    var summaryHTML = Object.keys(summary).map(function (label) {
      return (
        "<div class=\"summary-item\"><strong>" + escapeHTML(label) + "</strong>" +
        "<span>" + escapeHTML(summary[label]) + "</span></div>"
      );
    }).join("");
    var skills = (project.skills || []).map(function (skill) {
      return "<li>" + escapeHTML(skill) + "</li>";
    }).join("");
    return (
      "<div class=\"summary-grid\">" + summaryHTML + "</div>" +
      (skills ? "<div class=\"demonstrates\"><strong>Demonstrates</strong><ul>" + skills + "</ul></div>" : "")
    );
  }

  function renderTable(table, heading) {
    if (!table || !table.headers || !table.rows) return "";
    var head = table.headers.map(function (value) {
      return "<th scope=\"col\">" + escapeHTML(value) + "</th>";
    }).join("");
    var rows = table.rows.map(function (row) {
      return "<tr>" + row.map(function (value, column) {
        return "<td data-label=\"" + escapeHTML(table.headers[column] || "") + "\">" +
          escapeHTML(value) + "</td>";
      }).join("") + "</tr>";
    }).join("");
    return (
      "<div class=\"table-wrap\" tabindex=\"0\" role=\"group\" aria-label=\"Table: " + escapeHTML(heading) + "\">" +
      "<table><thead><tr>" + head + "</tr></thead><tbody>" + rows + "</tbody></table></div>"
    );
  }

  function renderSteps(steps) {
    if (!steps || !steps.length) return "";
    var items = steps.map(function (step) {
      return "<li>" + escapeHTML(step) + "</li>";
    }).join("");
    return "<ol class=\"process\" aria-label=\"Process sequence\">" + items + "</ol>";
  }

  function renderGrid(grid, project) {
    if (!grid || !grid.length) return "";
    var figures = grid.map(function (image) {
      return figureHTML(image, project.title + " level-design evidence");
    }).join("");
    return "<div class=\"figure-grid\">" + figures + "</div>";
  }

  function renderSection(section, index, project) {
    var body = (section.body || []).map(function (paragraph) {
      return "<p>" + escapeHTML(paragraph) + "</p>";
    }).join("");
    var bullets = (section.bullets || []).map(function (item) {
      return "<li>" + escapeHTML(item) + "</li>";
    }).join("");
    var figures = (section.images || []).map(function (image) {
      return figureHTML(image, project.title + " level-design evidence");
    }).join("");
    var variant = section.variant ? " " + escapeHTML(section.variant) : "";
    return (
      "<section class=\"case-section" + variant + "\" aria-labelledby=\"section-" + index + "\">" +
        "<h2 id=\"section-" + index + "\">" + escapeHTML(section.heading) + "</h2>" +
        renderSteps(section.steps) + body +
        (bullets ? "<ul class=\"case-list\">" + bullets + "</ul>" : "") +
        renderTable(section.table, section.heading) + figures + renderGrid(section.grid, project) +
      "</section>"
    );
  }

  function renderCredits(project) {
    if (!project.credits) return "";
    return Object.keys(project.credits).map(function (label) {
      return (
        "<div class=\"credit-item\"><strong>" + escapeHTML(label) + "</strong>" +
        "<p>" + escapeHTML(project.credits[label]) + "</p></div>"
      );
    }).join("");
  }

  function closeLightbox() {
    var lightbox = document.getElementById("lightbox");
    if (!lightbox || lightbox.hidden) return;
    lightbox.hidden = true;
    document.body.classList.remove("lightbox-open");
    if (lastLightboxTrigger) lastLightboxTrigger.focus();
  }

  function openLightbox(trigger) {
    var lightbox = document.getElementById("lightbox");
    if (!lightbox) return;
    var image = lightbox.querySelector("img");
    lastLightboxTrigger = trigger;
    image.src = imagePath(trigger.dataset.lightboxSrc);
    image.alt = trigger.dataset.lightboxAlt || "Expanded project image";
    lightbox.hidden = false;
    document.body.classList.add("lightbox-open");
    lightbox.querySelector(".lightbox-close").focus();
  }

  function initialiseLightbox() {
    var lightbox = document.getElementById("lightbox");
    if (!lightbox) return;
    document.querySelectorAll("[data-lightbox-src]").forEach(function (trigger) {
      trigger.addEventListener("click", function () { openLightbox(trigger); });
    });
    lightbox.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", function (event) {
      if (event.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", function (event) {
      if (lightbox.hidden) return;
      if (event.key === "Escape") {
        event.preventDefault();
        closeLightbox();
      }
      if (event.key === "Tab") {
        event.preventDefault();
        lightbox.querySelector(".lightbox-close").focus();
      }
    });
  }

  function initialiseVideo(project) {
    var trigger = document.querySelector("[data-video-id]");
    if (!trigger) return;
    trigger.addEventListener("click", function () {
      var frame = document.createElement("div");
      frame.className = "video-frame";
      frame.innerHTML =
        "<iframe src=\"https://www.youtube-nocookie.com/embed/" + escapeHTML(trigger.dataset.videoId) +
        "?autoplay=1\" title=\"" + escapeHTML(project.title) + " project video\"" +
        " allow=\"accelerometer; autoplay; encrypted-media; picture-in-picture\" allowfullscreen></iframe>";
      trigger.replaceWith(frame);
      frame.querySelector("iframe").focus();
    });
  }

  function renderProject() {
    var project = projectFromLocation();
    if (!project) {
      document.title = "Project not found · " + SITE.name;
      document.getElementById("project-hero").innerHTML =
        "<p class=\"label\">Project index</p><h1>Choose a case study</h1>" +
        "<p class=\"subtitle\">This URL needs a valid project name.</p>";
      document.getElementById("case").innerHTML =
        "<section class=\"case-section\"><h2>Selected work</h2><p>Use the work page to open a stable, shareable project URL.</p>" +
        "<p><a class=\"button primary\" href=\"" + escapeHTML(pagePath("index.html#work")) + "\">View selected work</a></p></section>";
      document.getElementById("project-summary").hidden = true;
      document.getElementById("project-links").hidden = true;
      document.getElementById("credits").hidden = true;
      document.getElementById("pager").hidden = true;
      return;
    }
    document.title = project.title + " · " + SITE.name;

    document.getElementById("project-hero").innerHTML =
      "<p class=\"label\">" + escapeHTML(project.badge) + "</p>" +
      "<h1>" + escapeHTML(project.title) + "</h1>" +
      "<p class=\"subtitle\">" + escapeHTML(project.subtitle) + "</p>";

    var media = document.getElementById("project-media");
    if (project.video) {
      media.innerHTML =
        "<button class=\"video-poster\" type=\"button\" data-video-id=\"" + escapeHTML(project.video) +
        "\" aria-label=\"Load and play " + escapeHTML(project.title) + " project video from YouTube\">" +
        imageHTML(project.hero, project.heroAlt || project.title, "eager") +
        "<span class=\"video-play\" aria-hidden=\"true\">Play project video</span></button>";
    } else if (project.hero) {
      media.innerHTML = "<figure class=\"shot hero-shot\">" + imageHTML(project.hero, project.heroAlt || project.title, "eager") + "</figure>";
    }

    document.getElementById("project-summary").innerHTML = renderSummary(project);
    document.getElementById("project-links").innerHTML = (project.links || []).map(function (link) {
      var external = /^https?:/.test(link.url);
      var href = external ? link.url : pagePath(link.url);
      return "<a href=\"" + escapeHTML(href) + "\"" +
        (external ? " target=\"_blank\" rel=\"noopener noreferrer\"" : "") + ">" +
        escapeHTML(link.label) + (external ? " <span aria-hidden=\"true\">↗</span>" : "") + "</a>";
    }).join("");

    document.getElementById("case").innerHTML = project.sections.map(function (section, index) {
      return renderSection(section, index + 1, project);
    }).join("");

    var credits = document.getElementById("credits");
    var creditHTML = renderCredits(project);
    if (creditHTML) {
      credits.innerHTML = "<h2>Credits &amp; attribution</h2><div class=\"credits-grid\">" + creditHTML + "</div>";
    } else {
      credits.hidden = true;
    }

    var index = SITE.projects.indexOf(project);
    var previous = SITE.projects[(index - 1 + SITE.projects.length) % SITE.projects.length];
    var next = SITE.projects[(index + 1) % SITE.projects.length];
    document.getElementById("pager").innerHTML =
      "<a href=\"" + escapeHTML(pagePath("work/" + previous.slug + "/")) + "\"><span aria-hidden=\"true\">←</span> " + escapeHTML(previous.title) + "</a>" +
      "<a href=\"" + escapeHTML(pagePath("work/" + next.slug + "/")) + "\">" + escapeHTML(next.title) + " <span aria-hidden=\"true\">→</span></a>";

    initialiseLightbox();
    initialiseVideo(project);
  }

  renderProject();
})();
