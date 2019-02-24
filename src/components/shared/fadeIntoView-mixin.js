// define a mixin object
export const fadeIntoView = {
  created: function() {
    window.addEventListener('scroll', () => {
      var rect = this.$el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        this.$el.classList.add('fade-in-bottom');
        this.$el.classList.remove('hidden');
      }
    });
  }
};
