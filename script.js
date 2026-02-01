// Basic interactivity: mobile nav toggle, footer year, and demo form handling.
// Save this file as script.js in the same folder as index.html and styles.css.

document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('site-nav');
  const toggle = document.getElementById('nav-toggle');
  const yearEl = document.getElementById('year');
  const form = document.getElementById('contact-form');
  const clearBtn = document.getElementById('clear-btn');
  const formNote = document.getElementById('form-note');

  // Put current year in the footer
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle (simple show/hide)
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isVisible = getComputedStyle(nav).display !== 'none';
      nav.style.display = isVisible ? 'none' : 'flex';
      toggle.setAttribute('aria-expanded', String(!isVisible));
    });

    // Close nav when a link is clicked (mobile)
    nav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        if (window.innerWidth <= 900) nav.style.display = 'none';
      });
    });
  }

  // Demo contact form handler — replace with a real POST to a backend or service
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Collect form data (for demo only)
      const data = {
        name: form.name?.value || '',
        email: form.email?.value || '',
        message: form.message?.value || ''
      };

      // Simple validation example
      if (!data.name || !data.email || !data.message) {
        alert('Please fill in all fields.');
        return;
      }

      // Demo feedback — replace this section with fetch(...) to send data to your server or Formspree/Netlify
      alert('Thanks! Your message was received (demo). Replace this handler with an API call.');
      form.reset();
      if (formNote) formNote.textContent = 'Message sent (demo). Hook to backend to actually receive messages.';
    });
  }

  // Clear button for the form
  if (clearBtn && form) {
    clearBtn.addEventListener('click', () => form.reset());
  }
});
