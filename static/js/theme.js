document.addEventListener('alpine:init', () => {
  Alpine.data('themeToggle', () => ({
    get isDark() {
      return document.documentElement.getAttribute('data-theme') === 'night';
    },
    toggle() {
      const next = this.isDark ? 'corporate' : 'night';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    }
  }));
});