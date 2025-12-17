async function loadPartial(id, file, callback) {
  const res = await fetch(file);
  document.getElementById(id).innerHTML = await res.text();
  if (callback) callback();
}

function initNavbarBehavior() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    navbar.style.boxShadow =
      window.scrollY > 50 ? '0 4px 20px rgba(0,0,0,0.1)' : 'none';
  });
}

loadPartial('header', '/partial/header.html', initNavbarBehavior);
loadPartial('footer', '/partial/footer.html');