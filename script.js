const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav');
const bookingForm = document.querySelector('.booking-form');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

if (bookingForm) {
  bookingForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.querySelector('#guest-name').value.trim();
    const email = document.querySelector('#guest-email').value.trim();
    const checkIn = document.querySelector('#check-in').value;
    const checkOut = document.querySelector('#check-out').value;
    const roomType = document.querySelector('input[name="room-type"]:checked')?.value;

    if (!name || !email || !checkIn || !checkOut || !roomType) {
      alert('Completa todos los campos para enviar tu solicitud de reserva.');
      return;
    }

    alert(`Gracias ${name}! Hemos recibido tu solicitud de reserva. Te contactaremos pronto para confirmar tu estadía.`);
    bookingForm.reset();
  });
}

const navLinks = document.querySelectorAll('.nav a');
const sections = document.querySelectorAll('main section[id]');

if (navLinks.length && navMenu) {
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            const targetId = link.getAttribute('href');
            link.classList.toggle('active', targetId === `#${entry.target.id}`);
          });
        }
      });
    },
    { threshold: 0.45 }
  );

  sections.forEach((section) => observer.observe(section));
}
