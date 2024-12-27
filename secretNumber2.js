let numSecreto = gerarNumAle();
let tentativas = 1;

function exibirNaTela(tag, frase)
{
    let titulo = document.querySelector(tag);
    titulo.innerHTML = frase;
}

exibirNaTela("h1", "Jogo do número secreto.");
exibirNaTela("p", "Escolha um número entre 1 e 100.");

function verificarChute()
{
    let chute = document.querySelector("input").value
    console.log(numSecreto);

    if (chute == numSecreto)
        {
            exibirNaTela("h1", "PARABÉNS VOCÊ ACERTOU!");
            let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
            let mensagemTentativas = `Você acertou com ${tentativas} ${palavraTentativa}!`;
            exibirNaTela("p", mensagemTentativas)
        }
        else{

            if (chute > numSecreto)
                {
                    exibirNaTela("p", "Quase! O número secreto é menor que isso!");
                    tentativas++
                }
            else
                {
                    exibirNaTela("p", "Chutou baixo amigo, mais alto!");
                    tentativas++
                }
           limparCampo()
            
        }
    
}

function gerarNumAle()
{
    return parseInt(Math.random() * 100 + 1)
}

function limparCampo()
{
    chute = document.querySelector("input");
    chute.value = "";
}

