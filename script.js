const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
}

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    if (navLinks?.classList.contains('open')) {
      navLinks.classList.remove('open');
      menuButton?.setAttribute('aria-expanded', 'false');
    }
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const waitlistForm = document.querySelector('.waitlist-form');
const formNote = document.querySelector('.form-note');

if (waitlistForm && formNote) {
  waitlistForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = waitlistForm.querySelector('input[type="email"]');

    if (!email || !email.value.trim()) {
      formNote.textContent = 'Please enter a valid college email address.';
      return;
    }

    formNote.textContent = 'You are on the waitlist. We will reach out soon with early access.';
    waitlistForm.reset();
  });
}
