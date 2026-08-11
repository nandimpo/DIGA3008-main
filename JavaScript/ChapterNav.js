document.addEventListener('DOMContentLoaded', () => {
  const dots = document.querySelectorAll('.chapter-dot');
  if (!dots.length) return;

  const sections = Array.from(dots)
    .map((dot) => document.getElementById(dot.dataset.chapter))
    .filter(Boolean);

  if (!sections.length) return;

  const setActive = (id) => {
    dots.forEach((dot) => {
      dot.classList.toggle('active', dot.dataset.chapter === id);
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    },
    { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
});
