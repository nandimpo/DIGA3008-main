document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.innerHTML = '<button type="button" class="lightbox-close" aria-label="Close image">&times;</button><img class="lightbox-image" alt="" />';
  document.body.appendChild(overlay);

  const lightboxImage = overlay.querySelector('.lightbox-image');
  const closeButton = overlay.querySelector('.lightbox-close');

  function openLightbox(img) {
    lightboxImage.src = img.currentSrc || img.src;
    lightboxImage.alt = img.alt || '';
    overlay.classList.add('is-open');
    document.body.classList.add('lightbox-open');
  }

  function closeLightbox() {
    overlay.classList.remove('is-open');
    document.body.classList.remove('lightbox-open');
    lightboxImage.src = '';
  }

  document.addEventListener('click', (event) => {
    if (overlay.contains(event.target)) return;
    const img = event.target.closest('img');
    if (!img) return;
    event.preventDefault();
    event.stopPropagation();
    openLightbox(img);
  }, true);

  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) closeLightbox();
  });

  closeButton.addEventListener('click', closeLightbox);

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && overlay.classList.contains('is-open')) closeLightbox();
  });
});
