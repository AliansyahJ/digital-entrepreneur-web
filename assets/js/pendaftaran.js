document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('daftarForm');
  const cvInput = document.getElementById('cvInput');

  if (!form) return;

  // Preview nama file CV
  const fileNameSpan = cvInput.nextElementSibling;
  cvInput.addEventListener('change', () => {
    const file = cvInput.files[0];
    if (file) {
      fileNameSpan.textContent = file.name;
    } else {
      fileNameSpan.textContent = "Belum ada file dipilih";
    }
  });

  const telInput = document.querySelector('input[name="telepon"]');
  if (telInput) {
    telInput.addEventListener('input', () => {
      telInput.value = telInput.value.replace(/[^0-9]/g, '');
    });
  }


  // Submit form
  form.addEventListener('submit', e => {
    e.preventDefault();

    if (!cvInput.files[0]) {
      alert("Silakan lampirkan CV terlebih dahulu!");
      return;
    }
  
    // simulasi proses kirim
    setTimeout(() => {
      window.location.href = 'pages/daftar-berhasil.html';
    }, 500);
  });
  const errorBox = document.getElementById('formError');

  form.addEventListener('submit', e => {
    e.preventDefault();

    if (!form.checkValidity()) {
      errorBox.textContent = 'Mohon lengkapi semua data dengan benar.';
      return;
    }

    window.location.href = 'pages/daftar-berhasil.html';
  });

});
