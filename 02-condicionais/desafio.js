const combustivelGasolina = true;
const precoGasolina = 5.79;
const precoEtanol = 4.89;
const rendimento = 12;
let distancia = 100;

if(combustivelGasolina == true){
    custoViagem = (distancia / rendimento) * precoGasolina;
} else {
    custoViagem = (distancia / rendimento) * precoEtanol;
}

console.log("O custo da viagem foi " + custoViagem.toFixed(2));
if(combustivelGasolina == true) : console.log('Carro a Gasolina') ? console.log('Carro a Alcool');