// FUNCAO PARA QUE A BARRA DE ROLAGEM VOLTE PARA A POSICAO 0 NO EIXO Y.

function scrollBar() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}

// FUNCAO QUE PARA FAZER COM QUE O BOTAO SUMA QUANDO A POSICAO Y DO SCROLL ESTIVER EM 0

function controlarBotao() {
    if (window.scrollY === 0) {
        document.querySelector("#back-to-top").style.display = 'none';
    } else {
        document.querySelector("#back-to-top").style.display = 'block';
    }
}
window.addEventListener("scroll", controlarBotao);