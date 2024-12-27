let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora do Desafio";

let nomeCidade;
let somaNum_1;
let somaNum_2;
let somaNum;

function verificarConsole()
{
    console.log("GAAYYYY!!!");
}

function checarAlerta()
{
    alert("OIA O CAMIÃO DO LEEEITE");
}

function lembreiCidade()
{

    nomeCidade = prompt("Diga o nome de uma cidade do brasil");
    {
        alert(`Estive em ${nomeCidade} e lembrei de você!`);
        nomeCidade = null
    }
       

}

function soma()
{
    somaNum_1 = parseInt(prompt("Digite o primeiro número da soma!"));
    somaNum_2 = parseInt(prompt("Digite o segundo número da soma!"));
    somaNum = somaNum_1 + somaNum_2
    alert(`A soma de ${somaNum_1} + ${somaNum_2} é igual á ${somaNum}`)
}