const videoPlayer = document.getElementById('video-player');

// Lista dos vídeos (adicione seus caminhos aqui)
const videos = [
  '/videos Amor/vid1.mp4',
  '/videos Amor/vid2.mp4',
  '/videos Amor/vid3.mp4',
  '/videos Amor/vid4.mp4',
  '/videos Amor/vid5.mp4',
  '/videos Amor/vid6.mp4',
  '/videos Amor/vid7.mp4',
  '/videos Amor/vid8.mp4',
  '/videos Amor/vid9.mp4',
  '/videos Amor/vid10.mp4',
  '/videos Amor/vid11.mp4',
  '/videos Amor/vid12.mp4',
  '/videos Amor/vid13.mp4',
  '/videos Amor/vid14.mp4',
  '/videos Amor/vid15.mp4',
  '/videos Amor/vid16.mp4',
  '/videos Amor/vid17.mp4',
];


let ultimoIndex = -1;

function escolherProximoVideo() {
  let novoIndex;
  do {
    novoIndex = Math.floor(Math.random() * videos.length);
  } while (novoIndex === ultimoIndex);
  ultimoIndex = novoIndex;
  return videos[novoIndex];
}

function trocarVideo() {
  videoPlayer.style.opacity = 0;

  setTimeout(() => {
    videoPlayer.src = escolherProximoVideo();
    videoPlayer.load();
    videoPlayer.play();
    videoPlayer.style.opacity = 1;
  }, 1000); // tempo da transição
}

// Quando o vídeo termina, troca para outro diferente
videoPlayer.addEventListener('ended', trocarVideo);

// Carrega o primeiro vídeo ao iniciar
document.addEventListener('DOMContentLoaded', () => {
  videoPlayer.src = escolherProximoVideo();
  videoPlayer.play();
});

function criarCoracao() {
  const coracao = document.createElement('div');
  coracao.classList.add('coração');
  coracao.style.left = `${Math.random() * 100}vw`;
  coracao.style.animationDuration = `${Math.random() * 3 + 3}s`; // 3 a 6 segundos
  document.querySelector('.corações').appendChild(coracao);

  setTimeout(() => {
    coracao.remove();
  }, 6000);
}

// Geração contínua dos corações
setInterval(criarCoracao, 300)

document.addEventListener("DOMContentLoaded", () => {
  const card = document.querySelector(".aniversario-card");
  if (card) {
    card.style.opacity = 0;
    card.style.transform = "translateY(20px)";

    setTimeout(() => {
      card.style.transition = "all 1.5s ease";
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }, 300);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const card = document.querySelector(".aniversario-card");
  const coracoesContainer = document.querySelector(".corações-mini");

  // Entrada suave
  card.style.opacity = 0;
  card.style.transform = "translateY(30px) scale(0.98)";

  setTimeout(() => {
    card.style.transition = "all 1.6s ease";
    card.style.opacity = 1;
    card.style.transform = "translateY(0) scale(1)";
  }, 300);

  // Criar corações flutuantes
  function criarCoracao() {
    const coracao = document.createElement("div");
    coracao.textContent = "💖";
    coracao.style.position = "absolute";
    coracao.style.left = Math.random() * 100 + "%";
    coracao.style.bottom = "-10px";
    coracao.style.fontSize = Math.random() * 10 + 12 + "px";
    coracao.style.opacity = 0.8;
    coracao.style.animation = "subirCoracao 6s linear forwards";

    coracoesContainer.appendChild(coracao);

    setTimeout(() => coracao.remove(), 6000);
  }

  setInterval(criarCoracao, 1200);

  // Efeito toque (mobile)
  card.addEventListener("touchstart", () => {
    card.style.transform = "scale(1.03)";
  });

  card.addEventListener("touchend", () => {
    card.style.transform = "scale(1)";
  });
});

// Animação dos corações
const style = document.createElement("style");
style.innerHTML = `
@keyframes subirCoracao {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-120%);
    opacity: 0;
  }
}
`;
document.head.appendChild(style);
