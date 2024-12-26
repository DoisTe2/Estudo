alert("Boas vindas ao jogo do número secreto");

let qtdNumSecreto = 1000
let numeroSecreto = parseInt(Math.random() * (qtdNumSecreto));
let chute;
let tentativas = 1;



    while (chute != numeroSecreto)
    {
        chute = prompt(`Escolha um número entre 1 e ${qtdNumSecreto}:`);

        if (chute == numeroSecreto)
            {
               break
            }
        else
            {
                if (chute < numeroSecreto)
                {
                    alert(`O número secreto é maior que ${chute}!`);
                }
                else
                {
                    alert(`O número secreto é menor que ${chute}!`);
                }

                tentativas++;
                
            }

        
    }

    let palavraTentativas = tentativas > 1 ? "tentativas" : "tentativa"
     
        alert(`Ce acerto fiadaputa, em ${tentativas} ${palavraTentativas}, o número era: "${numeroSecreto}"`);
