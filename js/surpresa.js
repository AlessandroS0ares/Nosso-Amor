const btnSim = document.getElementById("btn-sim");
const btnNao = document.getElementById("btn-nao");
const respostaSim = document.getElementById("resposta-sim");
const respostaNao = document.getElementById("resposta-nao");

const frasesEngracadas = [
  "Erro 404: ‘Não’ não encontrado. Redirecionando para o ‘Sim’…",
  "Você clicou no botão errado, minha linda. Tenta de novo com o coração! 💖",
  "HAHA! Que engraçada você! Agora aperta no botão certo, vai 😘",
  "Ops… seu dedo escorregou, né? Eu entendo… ‘Sim’ está logo ali! 😏",
  "O botão ‘Não’ está com defeito. Só o ‘Sim’ está funcionando hoje! 😉",
  "Essa foi boa! Mas agora clica no ‘Sim’ porque você me ama 🥺💙",
  "Sistema detectou gracinha. Ativando modo beijo de convencimento 💋",
  "Você não tem permissão para essa ação. Favor amar seu boneco de neve. 😜",
  "Sabia que se clicar ‘Sim’ você ganha um presente? E se clicar ‘Não’… também. Mas só o ‘Sim’ vem com beijinho! 💌",
  "Tente quantas vezes quiser, mas você já é minha namorada no meu coração 💜"
];

// Mostra uma resposta aleatória ao clicar em "Não"
btnNao.addEventListener("click", () => {
  const fraseAleatoria = frasesEngracadas[Math.floor(Math.random() * frasesEngracadas.length)];
  respostaSim.style.display = "none";
  respostaNao.style.display = "block";
  respostaNao.innerHTML = `
    <h2>Erro no sistema!</h2>
    <p>${fraseAleatoria}</p>
  `;
});

// Quando clicar no "Sim"
btnSim.addEventListener("click", () => {
  respostaSim.style.display = "block";
  respostaNao.style.display = "none";
});