/* -------------------------------------------------
   Sparkle background
   ------------------------------------------------- */
function createSparkles() {
  const container = document.getElementById('sparkles');
  const colors = [
    '#edabd2', '#ffae57', '#fcf577',
    '#bae67e', '#5ccfe6', '#9cc6f4',
    '#aa72c5', '#ffffff'
  ];

  for (let i = 0; i < 100; i 1;
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
   Mobile‑Menu‑Toggle (only for the top header)
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
   Lightbox (GLightbox) – optional
   ------------------------------------------------- */
function initLightbox() {
  if (typeof GLightbox !== 'undefined') {
    GLightbox({ selector: '.lightbox' });
  }
}

/* -------------------------------------------------
   Init
   ------------------------------------------------- */
createSparkles();
initLightbox();
