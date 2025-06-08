// Defina a data que começaram a namorar
const dataInicio = new Date('2025-01-18T21:00:00'); 

function atualizaContador() {
  const agora = new Date();
  const diff = agora - dataInicio;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);
  const segundos = Math.floor((diff / 1000) % 60);

  document.getElementById('contador').textContent = 
    `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos.`;
}

setInterval(atualizaContador, 1000);