document.addEventListener('DOMContentLoaded', () => {
  // 1. Versionierung in Console loggen (zur Kontrolle)
  console.log('App loaded v1.1');

  // 2. Mobile Menu Logic
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  const body = document.body;

  if (toggle) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      nav.classList.toggle('mobile-open');
      
      // Scrollen verhindern wenn Menü offen
      if (nav.classList.contains('mobile-open')) {
        body.style.overflow = 'hidden';
      } else {
        body.style.overflow = '';
      }
    });
  }

  // 3. Active Link Marking
  const path = window.location.pathname.split('/').pop();
  document.querySelectorAll('.nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === path || 
       (path.includes('fotografie') && link.dataset.theme === 'fotografie') ||
       (path.includes('webdesign') && link.dataset.theme === 'webdesign')) {
      link.classList.add('active');
    }
  });

  // 4. Sparkles (Optional, stark reduziert für Performance)
  /* Hier könnte der alte Sparkle Code stehen, falls gewünscht */
});