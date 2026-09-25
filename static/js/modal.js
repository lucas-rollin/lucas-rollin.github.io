document.addEventListener("alpine:init", () => {
  Alpine.data("portfolioModal", () => ({
    open: false,
    items: [],
    index: 0,
    title: '',

    get current() {
      return this.items[this.index] ?? null;
    },

    get hasMany() {
      return this.items.length > 1;
    },

    openAt(i, items, title) {
      this.items = items;
      this.index = i;
      this.title = title;
      this.open = true;
      this.$nextTick(() => {
        document.getElementById('portfolio-modal')?.showModal();
      });
    },

    close() {
      this.open = false;
      document.getElementById('portfolio-modal')?.close();
      // Pause any playing video when modal closes
      const video = document.querySelector('#portfolio-modal video');
      if (video) video.pause();
    },

    goTo(i) {
      // Pause current video before switching
      const video = document.querySelector('#portfolio-modal video');
      if (video) video.pause();
      this.index = i;
    },

    prev() {
      this.goTo((this.index - 1 + this.items.length) % this.items.length);
    },

    next() {
      this.goTo((this.index + 1) % this.items.length);
    },

    handleKeydown(e) {
      if (!this.open) return;
      if (e.key === 'ArrowLeft') this.prev();
      if (e.key === 'ArrowRight') this.next();
      if (e.key === 'Escape') this.close();
    },
	}));
});