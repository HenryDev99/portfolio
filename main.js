document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("[data-header]");
  const menuButton = document.querySelector("[data-menu-button]");
  const navigation = document.querySelector("[data-navigation]");
  const year = document.querySelector("[data-year]");
  const revealTargets = document.querySelectorAll(".reveal");
  const detailButtons = document.querySelectorAll("[data-detail-button]");

  if (year) year.textContent = new Date().getFullYear();

  const closeMenu = () => {
    if (!menuButton || !navigation) return;
    menuButton.setAttribute("aria-expanded", "false");
    navigation.classList.remove("is-open");
    document.body.classList.remove("menu-open");
    const label = menuButton.querySelector(".sr-only");
    if (label) label.textContent = "메뉴 열기";
  };

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      const isOpen = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!isOpen));
      navigation.classList.toggle("is-open", !isOpen);
      document.body.classList.toggle("menu-open", !isOpen);
      const label = menuButton.querySelector(".sr-only");
      if (label) label.textContent = isOpen ? "메뉴 열기" : "메뉴 닫기";
    });
    navigation.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  }

  detailButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const row = button.closest(".experience-row");
      const detail = row?.querySelector(".experience-detail");
      if (!detail) return;
      const isOpen = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!isOpen));
      detail.classList.toggle("is-open", !isOpen);
    });
  });

  const updateHeader = () => header?.classList.toggle("is-scrolled", window.scrollY > 18);
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
  window.addEventListener("resize", () => { if (window.innerWidth > 720) closeMenu(); });

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealTargets.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      currentObserver.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -7%", threshold: 0.08 });

  revealTargets.forEach((element) => observer.observe(element));
});
