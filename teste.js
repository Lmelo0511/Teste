let mensagemGanhou = document.querySelector("[data-winning-massage-text]");
let celulas = document.querySelectorAll("[data-cell]");
let celulasBotoes = document.querySelectorAll("[data-button-cell]");
let reiniciarJogo = document.querySelector("[data-restart-button]");
let botaoSelecionado = null;

const combinacoesVencer = [
   [1, 2, 3],
   [4, 5, 6],
   [7, 8, 9],
   [1, 4, 7],
   [2, 5, 8],
   [3, 6, 9],
];

const apagandoBotoes = () => {
    celulasBotoes.forEach(botao => {
        botao.addEventListener('click', () => {
            botao.classList.add("oculto");
        })
    })
}

const movendoBotoes = () => {

    celulasBotoes.forEach(botao => {
        botao.addEventListener('click', () => {
            apagandoBotoes();
            botaoSelecionado = botao.cloneNode(true);
        });
    });
    
    celulas.forEach(celula => {
        celula.addEventListener('click', () => {
            if (botaoSelecionado) {
                if (!celula.querySelector('[data-button-cell]')) {
                    celula.appendChild(botaoSelecionado);
                }
            }
        });
    });
};

const embaralhandoBotoes = () => {
    celulasBotoes.forEach(botao => {
        let posicao = Math.floor(Math.random() * 9);
        botao.style.order = posicao;
    });
};

const checandoSeGanhou = () => {
    return combinacoesVencer.some((combinacao) => {
        return combinacao.every((index) => {
            return celulas[index]
        });
    });
};

reiniciarJogo.addEventListener("click", embaralhandoBotoes);

movendoBotoes();
