// Responsive nav toggle
(function () {
  const menuBtn = document.getElementById("menu-toggle");
  const nav = document.getElementById("primary-navigation");
  const navLinks = document.getElementById("nav-links");

  if (!menuBtn || !nav) return;

  function toggle() {
    const isOpen = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(isOpen));

    // animate bars to X
    menuBtn.classList.toggle("open");
  }

  menuBtn.addEventListener("click", toggle);

  // Close when clicking outside
  document.addEventListener("click", (e) => {
    if (!nav.classList.contains("open")) return;
    if (menuBtn.contains(e.target) || nav.contains(e.target)) return;
    nav.classList.remove("open");
    menuBtn.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("open")) {
      nav.classList.remove("open");
      menuBtn.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.focus();
    }
  });
})();
