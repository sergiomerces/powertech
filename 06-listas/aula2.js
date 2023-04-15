//Posso criar um array vazio e adicionar elementos
const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);

//obter a soma das notas
const soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4];

//como a  lista é dinâmica posso obter seu tamanho com o método length
console.log(notas.length);

console.log(soma / notas.length);