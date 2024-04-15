let mensagemGanhou = document.querySelector("[data-winning-massage-text]");
let celulas = document.querySelectorAll("[data-cell]");
let celulasBotoes = document.querySelectorAll("[data-button-cell]");
let reiniciarJogo = document.getElementById("button");

let botaoSelecionado = null;

const combinacoesVencer = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8,  ],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6,  ],
];

const movendoBotoes = () => { 

    celulasBotoes.forEach(botao => {
        botao.addEventListener('click', () => {
            botao.classList.add("oculto");
        })
    });
    console.log("clicou");

    recebendoBotoes();
}

const recebendoBotoes = () => {

    celulas.forEach(celula => {
        celula.addEventListener('click', () => {
            if (botaoSelecionado) {
                if (!celula.querySelector('button')) {
                    celula.appendChild(botaoSelecionado);
                    botaoSelecionado = null;
                }
            }
        });
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

reiniciarJogo.addEventListener("click", function(){
    embaralhandoBotoes();
});

movendoBotoes();
