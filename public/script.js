 // Custom cursor
  const cursor = document.getElementById('cursor');
  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });
  document.querySelectorAll('a, button, .skill-card, .project-item').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('big'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('big'));
  });

  // Animate skill bars on scroll
  const bars = document.querySelectorAll('.skill-level-fill');
  const widths = [];
  bars.forEach((b, i) => { widths[i] = b.style.width; b.style.width = '0'; });

  const skillSection = document.getElementById('skills');
  const obs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      bars.forEach((b, i) => {
        setTimeout(() => { b.style.width = widths[i]; }, i * 80);
      });
      obs.disconnect();
    }
  }, { threshold: 0.3 });
  obs.observe(skillSection);

  // Smooth nav highlight
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  const scrollObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(l => {
          l.style.color = l.getAttribute('href') === '#' + e.target.id ? 'var(--accent)' : '';
        });
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px' });
  sections.forEach(s => scrollObs.observe(s));