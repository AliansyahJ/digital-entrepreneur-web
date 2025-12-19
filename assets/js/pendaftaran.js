form.addEventListener('submit', e => {
  e.preventDefault();

  const errorBox = document.getElementById('formError');

  if (!form.checkValidity()) {
    if (errorBox) {
      errorBox.textContent = 'Mohon lengkapi semua data dengan benar.';
    }
    return;
  }

  if (!cvInput.files[0]) {
    alert("Silakan lampirkan CV terlebih dahulu!");
    return;
  }

  // redirect ke halaman berhasil
  window.location.href = '../pages/daftar-berhasil.html';
});
