alert("Que bom ter você aqui novamente! Esse é o último desafio #7DaysOfCode da #Alura.");
alert("Hoje vamos brincar de operações matemáticas.")

function soma (valor1, valor2) {
    return Number(valor1) + Number(valor2);
}

function subtracao (valor1, valor2) {
    return Number(valor1) - Number(valor2);
}

function divisao (valor1, valor2) {
    return Number(valor1) / Number(valor2);
}

function multiplicacao (valor1, valor2) {
    return Number(valor1) * Number(valor2);
}

let valor1;
let valor2;
let operacao = "";

do {
    operacao = prompt("Qual operação você deseja realizar? Digite 'soma', 'subtração', 'multiplicação', 'divisão' ou 'sair.'")
    while (operacao != 'soma' && operacao != 'subtração' && operacao != 'multiplicação' && operacao != 'divisão' && operacao != 'sair') {
        alert('Operação não reconhecida!');
        operacao = prompt("Qual operação você deseja realizar? Digite 'soma', 'subtração', 'multiplicação', 'divisão' ou 'sair.'")
    }

    if(operacao === 'sair') {
        break;
    }

    valor1 = prompt(`Insira o primeiro valor.`);
    valor2 = prompt(`Insira o segundo valor.`);

    switch(operacao) {
        case 'soma':
            alert(`O resultado da ${operacao} é ${soma(valor1,valor2)}!`);
            break;
        case 'subtração':
            alert(`O resultado da ${operacao} é ${subtracao(valor1,valor2)}!`);
            break;
        case 'multiplicação':
            alert(`O resultado da ${operacao} é ${multiplicacao(valor1,valor2)}!`);
            break;
        case 'divisão':
            alert(`O resultado da ${operacao} é ${divisao(valor1,valor2)}!`);
            break;
    }
} while(operacao === "soma" || operacao === "subtração" || operacao === "multiplicação" || operacao === "divisão")
alert(`Obrigada e até a próxima!`);