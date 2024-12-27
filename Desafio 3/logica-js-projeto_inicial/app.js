

//
function olaMundo(frase)
{
    alert(frase);
}

olaMundo("Olá Mundo!");
//

let nome = prompt("Qual o seu nome?");

olaMundo(`Olá, ${nome}!`);
//

function dobro(numero)
{
    alert(`O dobro de ${numero} é: ${numero * 2}`);
}

dobro(parseInt(prompt("Digite um numero para dobra-lo!")));
//

function media(numMedia1, numMedia2, numMedia3)
{
    alert(`A média de ${numMedia1}, ${numMedia2} e ${numMedia3} é ${(numMedia1 + numMedia2 + numMedia3) / 3 }`);
}

media(parseInt(prompt("Digite o primeiro numero para calcularmos a média!")), 
parseInt(prompt("Digite o segundo numero para calcularmos a média!")), 
parseInt(prompt("Digite o primeiro numero para calcularmos a média!")));
//

function maiorNum(numUm, numDois)
{
    if (numUm > numDois)
    {
    alert(`O maior dos números é ${numUm}`)
    }

    if (numDois > numUm)
    {
        alert(`O maior dos números é ${numDois}`)
    }
}

maiorNum(parseInt(prompt("Digite dois números para descobrirmos qual é maior. Digite o primeiro número!")), parseInt(prompt("Digite o segundo número!")));
//

function quadradoNum(valor)
{
    alert(`O quadrado de ${valor} é ${valor * valor}`);
}

quadradoNum(parseInt(prompt("Digite um número para calcularmos o quadrado dele!")));
//