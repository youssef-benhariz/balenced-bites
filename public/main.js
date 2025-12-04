document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  function notifyComingSoon() {
    alert(
      'Payments are coming soon. Please check back shortly or contact us for manual orders.'
    );
  }

  const buyTop = document.getElementById('buy-button');
  const buyBottom = document.getElementById('buy-button-bottom');
  const navToggle = document.querySelector('.nav-toggle');
  if (buyTop) buyTop.addEventListener('click', notifyComingSoon);
  if (buyBottom) buyBottom.addEventListener('click', notifyComingSoon);

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      const links = document.querySelector('.nav-links');
      if (!links) return;
      const isOpen = links.classList.toggle('nav-links-open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }
});


