document.addEventListener("alpine:init", () => {
  Alpine.data("navbar", () => ({
    activeSection: window.location.hash.replace("#", "") || "about",

    init() {
      this.highlightActiveLink();

      window.addEventListener("scroll", () => {
        this.highlightActiveLink();
      }, { passive: true });

      window.addEventListener("hashchange", () => {
        const id = window.location.hash.replace("#", "");
        if (id) this.activeSection = id;
      });
    },

    highlightActiveLink() {
      const sections = document.querySelectorAll("main section");
      const scrollPosition = window.scrollY;
      const offset = 70;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - offset;
        const sectionHeight = section.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          this.activeSection = section.id;
        }
      });
    },
  }));
});