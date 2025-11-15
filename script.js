/* -------------------------------------------------
   1. Mobile‑Menu‑Toggle
   ------------------------------------------------- */
const navToggle = document.querySelector('.nav-toggle');
const navMenu   = document.querySelector('.nav ul');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-label',
      navMenu.classList.contains('open') ? 'Menü schließen' : 'Menü öffnen');
  });
}

/* -------------------------------------------------
   2. Aktiven Navigation‑Link markieren (U‑Linie)
   ------------------------------------------------- */
function setActiveNav() {
  const path = window.location.pathname.split('/').pop(); // z. B. index_fotografie.html
  const links = document.querySelectorAll('.nav a');

  links.forEach(link => {
    link.classList.remove('active');

    const href = link.getAttribute('href');
    if (!href) return;

    // exakte Datei‑Übereinstimmung
    if (href === path) {
      link.classList.add('active');
    }

    // für die beiden Haupt‑Themen: aktivieren, wenn die aktuelle Seite im selben Zweig liegt
    if (path.startsWith('index_fotografie') && link.dataset.theme === 'fotografie') {
      link.classList.add('active');
    }
    if (path.startsWith('index_webdesign') && link.dataset.theme === 'webdesign') {
      link.classList.add('active');
    }
  });
}

/* -------------------------------------------------
   3. Sparkle‑Background (wie vorher)
   ------------------------------------------------- */
function createSparkles() {
  const container = document.getElementById('sparkles');
  if (!container) return;

  const colors = [
    '#edabd2', '#ffae57', '#fcf577',
    '#bae67e', '#5ccfe6', '#9cc6f4',
    '#aa72c5', '#ffffff'
  ];

  for (let i = 0; i < 100; i++) {
    const s = document.createElement('div');
    s.classList.add('sparkle');

    const size  = Math.random() * 3 + 1;
    const color = colors[Math.floor(Math.random() * colors.length)];

    s.style.width            = `${size}px`;
    s.style.height           = `${size}px`;
    s.style.backgroundColor  = color;
    s.style.top              = `${Math.random() * 100}vh`;
    s.style.left             = `${Math.random() * 100}vw`;
    s.style.animationDelay  = `${Math.random() * 3}s`;
    s.style.boxShadow       = `0 0 ${size * 2}px ${color}`;

    container.appendChild(s);
  }
}

/* -------------------------------------------------
   4. Lightbox‑Initialisierung (optional)
   ------------------------------------------------- */
function initLightbox() {
  if (typeof GLightbox !== 'undefined') {
    GLightbox({ selector: '.lightbox' });
  }
}

/* -------------------------------------------------
   5. Initialisierung
   ------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  setActiveNav();      // U‑Linie korrekt setzen
  createSparkles();    // Hintergrund‑Sterne
  initLightbox();      // Galerie‑Lightbox
});
