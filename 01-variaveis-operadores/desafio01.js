const precoCombustivel = 5.39;
const rendimentoCarro = 12;
let distaciaPercorrida = 100;

let custoViagem = (distaciaPercorrida / rendimentoCarro) * precoCombustivel;

console.log('Ocusto da viagem é de ' + custoViagem.toFixed(2));