(() => {
  const wash = document.querySelector('.home-ombre-wash');
  const section = document.querySelector('.about-section');
  if (!wash || !section) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let frameRequested = false;

  const updateOmbre = () => {
    const rect = section.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    // 0 while the section's top is still below the viewport, climbing to 1
    // once its bottom edge has scrolled up past the top of the viewport.
    const span = rect.height + viewportHeight;
    const progress = Math.min(
      Math.max((viewportHeight - rect.top) / span, 0),
      1
    );

    // Only visible while the (transparent) about-section is actually on
    // screen, so the fixed wash never bleeds into the sections above/below.
    const inView = rect.bottom > 0 && rect.top < viewportHeight;
    wash.style.opacity = inView ? '1' : '0';

    // The wash is fixed to the viewport, so nudging it drifts the gradient
    // at a different rate than the page itself scrolls, the classic
    // parallax effect, sliding the beige-to-brown ombre into view.
    const driftRange = reducedMotion.matches ? 60 : 220;
    wash.style.transform = `translate3d(0, ${Math.round(
      (0.5 - progress) * driftRange
    )}px, 0)`;

    frameRequested = false;
  };

  const requestUpdate = () => {
    if (frameRequested) return;
    frameRequested = true;
    requestAnimationFrame(updateOmbre);
  };

  updateOmbre();
  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate);
  reducedMotion.addEventListener?.('change', requestUpdate);
})();
