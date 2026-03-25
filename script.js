const nav = document.querySelector("nav");
const toggle = document.querySelector(".mobile-nav-toggle");

if (nav && toggle) {
  nav.dataset.collapsed = "true";
  toggle.addEventListener("click", () => {
    nav.dataset.collapsed = nav.dataset.collapsed === "true" ? "false" : "true";
  });
}

const year = document.querySelector("[data-year]");
if (year) year.textContent = new Date().getFullYear();
