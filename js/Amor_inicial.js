const videoPlayer = document.getElementById('video-player');

// Lista dos vídeos (adicione seus caminhos aqui)
const videos = [
  '/videos Amor/vid1.mp4',
  '/videos Amor/vid2.mp4',
  '/videos Amor/vid3.mp4',
  '/videos Amor/vid4.mp4',
  '/videos Amor/vid5.mp4'
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