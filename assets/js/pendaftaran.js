document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('daftarForm');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();

    // simulasi proses kirim
    setTimeout(() => {
      window.location.href = '/pages/daftar-berhasil.html';
    }, 500);
  });
});
