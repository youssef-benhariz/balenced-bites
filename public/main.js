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
  if (buyTop) buyTop.addEventListener('click', notifyComingSoon);
  if (buyBottom) buyBottom.addEventListener('click', notifyComingSoon);
});


