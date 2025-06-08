const btnBoneco = document.getElementById('btnBoneco');
const btnGarotinha = document.getElementById('btnGarotinha');
const conteudoBoneco = document.getElementById('conteudoBoneco');
const conteudoGarotinha = document.getElementById('conteudoGarotinha');

btnBoneco.addEventListener('click', () => {
    conteudoBoneco.style.display = 'block';
    conteudoGarotinha.style.display = 'none';
    btnBoneco.classList.add('active');
    btnGarotinha.classList.remove('active');
});

btnGarotinha.addEventListener('click', () => {
    conteudoBoneco.style.display = 'none';
    conteudoGarotinha.style.display = 'block';
    btnGarotinha.classList.add('active');
    btnBoneco.classList.remove('active');
});