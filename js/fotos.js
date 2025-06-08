<script>
  const imagens = document.querySelectorAll('.foto-moldura img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  let indexAtual = 0;

  imagens.forEach((img, index) => {
    img.addEventListener('click', () => {
      indexAtual = index;
      abrirLightbox(img.src);
    });
  });

  function abrirLightbox(src) {
    lightboxImg.src = src;
    lightbox.classList.add('show');
    lightbox.classList.remove('hidden');
  }

  function fecharLightbox() {
    lightbox.classList.remove('show');
    setTimeout(() => lightbox.classList.add('hidden'), 300);
  }

  function avancarFoto() {
    indexAtual = (indexAtual + 1) % imagens.length;
    lightboxImg.src = imagens[indexAtual].src;
  }

  function voltarFoto() {
    indexAtual = (indexAtual - 1 + imagens.length) % imagens.length;
    lightboxImg.src = imagens[indexAtual].src;
  }

  // Fecha com ESC ou clique fora da imagem
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') fecharLightbox();
    if (e.key === 'ArrowRight') avancarFoto();
    if (e.key === 'ArrowLeft') voltarFoto();
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) fecharLightbox();
  });
</script>