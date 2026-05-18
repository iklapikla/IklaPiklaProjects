const navItems = [
  { name: "Home", url: "index.html" },
  { name: "Text", url: "text-animation.html" },
  { name: "Button", url: "button-animation.html" },
  { name: "Hover", url: "hover-effects.html" },
  { name: "Card", url: "card-effects.html" },
  { name: "UI Motion", url: "ui-motion.html" },
  { name: "Badge", url: "badge-label-effects.html" },
  { name: "Loader", url: "loader-effects.html" },
  { name: "Input", url: "input-focus-effects.html" },
  { name: "Icon", url: "icon-effects.html" },
  { name: "Cursor", url: "cursor-effects.html" },
  { name: "Background", url: "background-effects.html" },
  { name: "Scroll", url: "scroll-effects.html" },
  { name: "Page Transition", url: "page-transition-effects.html" },
  { name: "Special UI", url: "special-ui-effects.html" },
  { name: "AI Modern", url: "ai-modern-effects.html" },
  { name: "Video Live", url: "video-live-effects.html" },
  { name: "Micro Interactions", url: "micro-interactions.html" },
  { name: "Premium Components", url: "premium-components.html" }
];

const menu = document.getElementById("mainMenu");

if (menu) {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  menu.innerHTML = navItems.map(item => {
    const activeClass = currentPage === item.url ? "active" : "";
    return `<a class="${activeClass}" href="${item.url}">${item.name}</a>`;
  }).join("");
}
