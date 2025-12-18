document.addEventListener('DOMContentLoaded', () => {

  async function loadPartial(id, file, callback) {
    try {
      const el = document.getElementById(id);
      if (!el) return;

      const res = await fetch(file);
      if (!res.ok) throw new Error(res.status);

      el.innerHTML = await res.text();
      if (callback) callback();
    } catch (err) {
      console.error('Gagal load:', file);
    }
  }

  function initNavbarBehavior() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
      navbar.style.boxShadow =
        window.scrollY > 50
          ? '0 4px 20px rgba(0,0,0,0.1)'
          : 'none';
    });
  }

  const isInPages = location.pathname.includes('/pages/');
  const basePath = isInPages ? '../' : '';

  loadPartial('header', `${basePath}partial/header.html`, initNavbarBehavior);
  loadPartial('footer', `${basePath}partial/footer.html`);

});
