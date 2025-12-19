document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('daftarForm');
  const cvInput = document.getElementById('cvInput');
  const errorBox = document.getElementById('formError');

  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();

    if (!form.checkValidity()) {
      if (errorBox) {
        errorBox.textContent = 'Mohon lengkapi semua data dengan benar.';
      }
      return;
    }

    if (!cvInput || !cvInput.files[0]) {
      alert('Silakan lampirkan CV terlebih dahulu!');
      return;
    }

    window.location.href = '/digital-entrepreneur-web/pages/daftar-berhasil.html';
  });
});
