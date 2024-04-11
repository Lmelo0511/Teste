let mensagemGanhou = document.querySelector("[data-winning-massage-text]");
let celulas = document.querySelectorAll("[data-cell]");
let celulasBotoes = document.querySelectorAll("[button-cell]");
let reiniciarJogo = document.querySelector("[data-restart-button]")

let botaoSelecionado = null;

const combinacoesVencer = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
];

const movendoBotoes = () => { 

    celulasBotoes.forEach(botao => {
        botao.addEventListener('click', () => {
            botao.classList.add("oculto");
        })
    });
    console.log("clicou");
}

const recebendoBotoes = () => {

    celulas.forEach(celula => {
        celula.addEventListener('click', () => {
           botaoSelecionado = botao.cloneNode(true);
        })
    });
}

const embaralhandoBotoes = () => {
    celulasBotoes.forEach(botao => {
        let posicao = Math.floor(Math.random() * 9);
        botao.style.order = posicao;
    });
};;

const checandoSeGanhou = () => {
    return combinacoesVencer.some((combinacao) => {
        return combinacao.every((index) => {
            return celulas[index].querySelector('botao');
        });
    });
};

reiniciarJogo.addEventListener("click", embaralhandoBotoes);

recebendoBotoes();
