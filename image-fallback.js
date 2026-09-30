document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', () => {
      const file = (img.getAttribute('src') || '').split('/').pop();
      if (file && !img.dataset.fallback) {
        img.dataset.fallback = '1';
        img.src = 'images/' + file;
      }
    }, { once: false });
  });
});
