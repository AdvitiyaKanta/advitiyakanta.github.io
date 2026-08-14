/* Shared, dependency-free site behaviour. Content and navigation remain usable
   when JavaScript is unavailable. */
(function () {
  "use strict";

  var body = document.body;
  var themeButton = document.getElementById("themeBtn");
  var menuButton = document.getElementById("menuBtn");
  var menuPanel = document.getElementById("menuPanel");

  function setTheme(isLight) {
    body.classList.toggle("light", isLight);
    if (themeButton) {
      themeButton.setAttribute(
        "aria-label",
        isLight ? "Switch to dark colour theme" : "Switch to light colour theme"
      );
      themeButton.setAttribute("aria-pressed", isLight ? "true" : "false");
    }
  }

  var savedTheme = null;
  try {
    savedTheme = localStorage.getItem("theme");
  } catch (error) {
    savedTheme = null;
  }
  setTheme(savedTheme === "light");

  if (themeButton) {
    themeButton.addEventListener("click", function () {
      var isLight = !body.classList.contains("light");
      setTheme(isLight);
      try {
        localStorage.setItem("theme", isLight ? "light" : "dark");
      } catch (error) {
        // Theme preference is optional when storage is unavailable.
      }
    });
  }

  function setMenu(open) {
    body.classList.toggle("menu-open", open);
    if (!menuButton) return;
    menuButton.setAttribute("aria-expanded", open ? "true" : "false");
    menuButton.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }

  if (menuButton && menuPanel) {
    menuButton.addEventListener("click", function (event) {
      event.stopPropagation();
      setMenu(!body.classList.contains("menu-open"));
    });
    menuPanel.addEventListener("click", function () {
      setMenu(false);
    });
    document.addEventListener("click", function (event) {
      if (!event.target.closest("header.site")) setMenu(false);
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && body.classList.contains("menu-open")) {
        setMenu(false);
        menuButton.focus();
      }
    });
  }

  if ("IntersectionObserver" in window) {
    document.documentElement.classList.add("js");
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach(function (element) {
      revealObserver.observe(element);
    });

    var hero = document.querySelector(".hero");
    if (hero) {
      new IntersectionObserver(
        function (entries) {
          body.classList.toggle("scrolled", !entries[0].isIntersecting);
        },
        { threshold: 0, rootMargin: "-72px 0px 0px 0px" }
      ).observe(hero);
    }
  }
})();
