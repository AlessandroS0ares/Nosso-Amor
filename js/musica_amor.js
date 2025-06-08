const musicas = [
  { src: '/musicas Amor/Bruno Mars - Talking To The Moon (Official Lyric Video).mp3', capa: '/musicas Amor/capa Musicas/Bruno Mars.jpg' },
  { src: '/musicas Amor/Jorge & Mateus - A Hora é Agora - [DVD Ao Vivo em Jurerê] - (Clipe Oficial) (1).mp3', capa: '/musicas Amor/capa Musicas/Jorge e Matheus.jpg' },
  { src: '/musicas Amor/Luan Santana - Tanto Faz - (DVD O Nosso Tempo é hoje).mp3', capa: '/musicas Amor/capa Musicas/Luan Santana.jpg' },
  { src: '/musicas Amor/Velha Infância - Tribalistas Ao Vivo.mp3', capa: '/musicas Amor/capa Musicas/Tribalista.jpg' },
  { src: '/musicas Amor/Orochi ＂AMOR DE FIM DE NOITE＂ 🌹 (Prod. Papatinho).mp3', capa: '/musicas Amor/capa Musicas/Orochi.jpg' },
  { src: '/musicas Amor/CASA — COLO DE DEUS.mp3', capa: '/musicas Amor/capa Musicas/Casa.jpg' },
  { src: '/musicas Amor/Luan Santana - ALUGA-SE.mp3', capa: '/musicas Amor/capa Musicas/Aluga-se.jpg' },
  { src: '/musicas Amor/Ed Sheeran - Perfect (Tradução).mp3', capa: '/musicas Amor/capa Musicas/Perfect.jpg' },
  { src: '/musicas Amor/Melim - Meu Abrigo (Letra⧸Lyrics).mp3', capa: '/musicas Amor/capa Musicas/Melim.jpg' },
  { src: '/musicas Amor/Aliança - Tribalistas ( lyrics⧸ letra ) @eodudzinska.mp3', capa: '/musicas Amor/capa Musicas/Aliança.jpg' },
  { src: '/musicas Amor/Rihanna - Umbrella ft. Jay-Z (Legendado ｜ Lyrics + Tradução) (1).mp3', capa: '/musicas Amor/capa Musicas/Rihanna.jpg' },
  { src: '/musicas Amor/Só Você (Só Preciso de Você) - Dennis DJ e Mc G15.mp3', capa: '/musicas Amor/capa Musicas/Só-você.jpg' },
  { src: '/musicas Amor/Bruno Mars - Just The Way You Are (Tradução⧸Legendado).mp3', capa: '/musicas Amor/capa Musicas/Just the way you are.jpg' },
  { src: '/musicas Amor/Grupo Menos é Mais- Deixa tudo como tá (Letra) (1).mp3', capa: '/musicas Amor/capa Musicas/Deixa como tudo tá.jpg' },
  { src: '/musicas Amor/Arctic monkeys - I wanna be yours (tradução⧸legendado).mp3', capa: '/musicas Amor/capa Musicas/Artic Monkeys.jpg' },
  { src: '/musicas Amor/Luan Santana - Te Vivo (Clipe Oficial).mp3', capa: '/musicas Amor/capa Musicas/Te Vivo.jpg' },
  { src: '/musicas Amor/Gabriel Elias  - Pequena Flor ｜ Acústico (Casa de Praia).mp3', capa: '/musicas Amor/capa Musicas/Pequena Flor.jpg' },
  { src: '/musicas Amor/Vem Cá - Pelé MilFlows (Prod. Volp & Rafa Valle) (1).mp3', capa: '/musicas Amor/capa Musicas/Vem Cá.jpg' },
  { src: '/musicas Amor/Shawn Mendes - Never Be Alone (Tradução).mp3', capa: '/musicas Amor/capa Musicas/Shawn Mendes.jpg' },
  { src: '/musicas Amor/Jade Baraldo - nós 2 - Clipe Oficial.mp3', capa: '/musicas Amor/capa Musicas/Nós 2.jpg' },
  { src: '/musicas Amor/Pollo - Vagalumes (Lyrics⧸Letras) part. Ivo Mozart.mp3', capa: '/musicas Amor/capa Musicas/Pollo.jpg' },
  { src: '/musicas Amor/Vejo Enfim a Luz Brilhar - Sylvia Salustti e Raphael Rossato - Enrolados (Letra).mp3', capa: '/musicas Amor/capa Musicas/Enrolados.jpg' },
  { src: '/musicas Amor/jaymes young - infinity [tradução⧸legendado] teotfw.mp3', capa: '/musicas Amor/capa Musicas/Infinity.jpg' },
  { src: '/musicas Amor/De love (part. Pelé milflows) - gaab 1kilo.mp3', capa: '/musicas Amor/capa Musicas/De Love.jpg' },
  { src: '/musicas Amor/afrodite - Delacruz e IZA (Prod. JOK3R).mp3', capa: '/musicas Amor/capa Musicas/Afrodite.jpg' },
  { src: '/musicas Amor/The Neighbourhood - Sweater Weather (Tradução).mp3', capa: '/musicas Amor/capa Musicas/Sweater Wheater.jpg' },
  { src: '/musicas Amor/(LETRA) De Janeiro A Janeiro - Roberta Campos, Nando Reis.mp3', capa: '/musicas Amor/capa Musicas/Janeiro.jpg' },
  { src: '/musicas Amor/John Legend - All of Me (Tradução).mp3', capa: '/musicas Amor/capa Musicas/All of me.jpg' },
  { src: '/musicas Amor/Kweller & Enzo Cello - 202 (g3me pra eu ouvir).mp3', capa: '/musicas Amor/capa Musicas/202.jpg' },
  { src: '/musicas Amor/Lady Gaga & Bruno Mars - Die with a Smile (Tradução) (Legendado) (Clipe Oficial).mp3', capa: '/musicas Amor/capa Musicas/Die With a Smile.jpg' },
  { src: '/musicas Amor/Tarzan — No Meu Coração Você Vai Sempre Estar ｜ Ed Motta.mp3', capa: '/musicas Amor/capa Musicas/Tarzan.jpg' },
  { src: '/musicas Amor/Pedrosa - Terça de Tarde.mp3', capa: '/musicas Amor/capa Musicas/Pedrosa.jpg' },
  // Adicione mais {src, capa}
];

let indexAtual = 0;
let tocando = false;

const audio = document.getElementById('audio-player');
const capa = document.getElementById('capa');
const barraProgresso = document.getElementById('barra-progresso');
const tempoAtual = document.getElementById('tempo-atual');
const tempoTotal = document.getElementById('tempo-total');
const btnPlayPause = document.getElementById('btn-playpause');

function selecionarMusica(index) {
  indexAtual = index;
  audio.src = musicas[index].src;
  capa.src = musicas[index].capa;
  audio.play();
  tocando = true;
  atualizarIcone();
}

function togglePlayPause() {
  if (tocando) {
    audio.pause();
    tocando = false;
  } else {
    if (!audio.src) {
      selecionarMusica(0);
    } else {
      audio.play();
    }
    tocando = true;
  }
  atualizarIcone();
}

function atualizarIcone() {
  btnPlayPause.textContent = tocando ? '⏸️' : '▶️';
}

function proximaMusica() {
  indexAtual = (indexAtual + 1) % musicas.length;
  selecionarMusica(indexAtual);
}

function musicaAnterior() {
  indexAtual = (indexAtual - 1 + musicas.length) % musicas.length;
  selecionarMusica(indexAtual);
}

audio.addEventListener('timeupdate', () => {
  if (audio.duration) {
    barraProgresso.value = (audio.currentTime / audio.duration) * 100;
    tempoAtual.textContent = formatarTempo(audio.currentTime);
    tempoTotal.textContent = formatarTempo(audio.duration);
  }
});

barraProgresso.addEventListener('input', () => {
  if (audio.duration) {
    audio.currentTime = (barraProgresso.value / 100) * audio.duration;
  }
});

function formatarTempo(segundos) {
  const min = Math.floor(segundos / 60);
  const seg = Math.floor(segundos % 60);
  return `${min}:${seg < 10 ? '0' : ''}${seg}`;
}