
// Year
const y = document.getElementById("year"); if (y) y.textContent = new Date().getFullYear();

// Mobile nav
(() => {
  const btn = document.querySelector(".nav-toggle");
  const nav = document.getElementById("siteNav");
  if (!btn || !nav) return;
  btn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  });
})();

// One-time shimmer on brand title
window.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector(".brand h1");
  if (!title) return;
  title.classList.add("shimmer-once");
  title.addEventListener("animationend", () => {
    title.classList.remove("shimmer-once");
    triggerFaviconFadeOnce();
  }, { once: true });
});

// Favicon: swap to animated then back to static (pastel flower)
function triggerFaviconFadeOnce() {
  const link = document.querySelector('link[rel="icon"]') || document.createElement("link");
  link.rel = "icon";
  link.type = "image/gif";
  link.href = "assets/favicon-anim.gif";
  document.head.appendChild(link);
  setTimeout(() => {
    const link2 = document.createElement("link");
    link2.rel = "icon";
    link2.type = "image/png";
    link2.href = "assets/favicon-static.png";
    document.head.appendChild(link2);
  }, 700);
}
