/*alert ("Bem vindo ao nosso site!");

let nome = prompt("Qual o seu nome?");
let idade = prompt("Qual a sua idade?");

if (idade >= 18)
{
    alert ("Pode tirar habilitations!")
}

else
{
    alert ("Num pode namora ainda")
}

let numeroDeVendas = 50;
let saldoDispnivel = 1000;
let mensagemDeErro = "Erro! Preencha todos os campos"

alert (mensagemDeErro);



let diaSemana = prompt("Qual o dia da semana? (digite sem acentos e apenas com letras minúsculas!)");

if (diaSemana == "sabado")
{
    alert("Bom fim de semana!")
}

else
{
    if (diaSemana == "domingo")
    {
        alert("Bom fim de semana!")
    }
    else
    {
        alert("Boa semana!")
    }
}
*/


let numero = prompt("Digite um número entre 10 e 0: ");
let contador = numero;

while (contador < 10)
{
    alert(contador)

    contador++

    if (numero < 0)
    {
        alert("Erro, número menor que zero! Reinicie o jogo")
        break
    }
}