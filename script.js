/* -------------------------------------------------
   main.js – zentrale Interaktionen
   ------------------------------------------------- */

/* 1. Mobile‑Navigation öffnen / schließen */
const navToggle = document.querySelector('.nav-toggle');
const navMenu   = document.querySelector('.nav ul');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-label',
      navMenu.classList.contains('open') ? 'Menü schließen' : 'Menü öffnen');
  });
}

/* 2. Hero‑Slider (einfacher Vanilla‑Slider) */
const slides = document.querySelectorAll('.hero-slider .slide');
let current = 0;
const slideInterval = 5000; // 5 s

function showSlide(index) {
  slides.forEach((s, i) => s.classList.toggle('active', i === index));
}
function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}
if (slides.length > 0) {
  showSlide(current);
  setInterval(nextSlide, slideInterval);
}

/* 3. Lightbox‑Initialisierung (GLightbox) */
if (typeof GLightbox !== 'undefined') {
  const lightbox = GLightbox({
    selector: '.lightbox',
    loop: true,
    closeEffect: 'fade',
    openEffect: 'fade',
    plyr: {
      css: 'https://cdn.jsdelivr.net/npm/plyr@3/dist/plyr.css',
      js:  'https://cdn.jsdelivr.net/npm/plyr@3/dist/plyr.js'
    }
  });
}

/* 4. Kontakt‑Formular‑Validierung (einfach) */
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    const required = contactForm.querySelectorAll('[required]');
    let valid = true;

    required.forEach(inp => {
      if (!inp.value.trim()) {
        valid = false;
        inp.classList.add('error');
      } else {
        inp.classList.remove('error');
      }
    });

    if (!valid) {
      e.preventDefault();
      alert('Bitte fülle alle Pflichtfelder aus.');
    }
  });
}
