(() => {
  const page = document.querySelector('.portfolio-scroll-page');
  if (!page) return;
  const wash = page.querySelector('.portfolio-scroll-wash');

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const brown = [95, 81, 67];
  const yellow = [225, 184, 8];
  let frameRequested = false;

  const mix = (start, end, amount) =>
    Math.round(start + (end - start) * amount);

  const updatePortfolioColour = () => {
    // Complete the transition within 1.5 viewports so the change is obvious.
    const transitionDistance = Math.max(window.innerHeight * 1.5, 1);
    const visibleProgress = Math.min(
      Math.max(window.scrollY / transitionDistance, 0),
      1
    );
    const easedProgress = 1 - Math.pow(1 - visibleProgress, 1.8);

    // Keep it a subtle wash rather than a full saturated colour shift.
    const warmth = easedProgress * 0.5;
    const colour = brown.map((channel, index) =>
      mix(channel, yellow[index], warmth)
    );

    page.style.setProperty(
      '--portfolio-scroll-color',
      `rgb(${colour.join(', ')})`
    );
    page.style.setProperty('--portfolio-warmth', easedProgress.toFixed(3));

    if (wash) {
      wash.style.opacity = easedProgress.toFixed(3);
      wash.style.transform = `translate3d(0, ${Math.round(
        visibleProgress * 110
      )}px, 0) scale(1.08)`;
    }

    if (!reducedMotion.matches) {
      // The glow travels at a fraction of the document's scroll speed.
      page.style.setProperty(
        '--portfolio-parallax-y',
        `${Math.round(visibleProgress * 220)}px`
      );
    }

    frameRequested = false;
  };

  const requestUpdate = () => {
    if (frameRequested) return;
    frameRequested = true;
    requestAnimationFrame(updatePortfolioColour);
  };

  updatePortfolioColour();
  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate);
  reducedMotion.addEventListener?.('change', requestUpdate);
})();
