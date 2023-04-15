/*
Depuração

1. Clicar no botão lateral ou atalho ctrl + shift + d

2. Clicar no botão executar e depurar e escolher depurador nodejs

3. Observar janela de Pilha de Chamadas e Inspeção
F5 continuar a execução
F10 avançar uma linha
F11 intervir - entra na função 
shift + F11 sair - deixa a função
ctrl + shift + F5 reiniciar
shift + F5 interromper - encerrar a depuração
*/


const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(8);

let soma = 0;

for(let i = 0; i < notas.length; i++) {
    soma += notas[i];
}

console.log(soma);
console.log(soma / notas.length);