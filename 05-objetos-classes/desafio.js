/*
1. Crie uma classe para representar carros
Os carros possuem uma marca, cor e uma gasto médio de combustível por km rodado.
Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor gasto em reais para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    rendimento;

    constructor(marca, cor, rendimento) {
        this.marca = marca;
        this.cor = cor;
        this.rendimento = rendimento;
    }

    descrever() {
        console.log(`Veículo ${this.marca} na cor ${this.cor} com rendimento de ${this.rendimento} km/l`);
    }

    gastoPercurso(distancia, precoCombustivel) {
        let gasto = (distancia / this.rendimento) * precoCombustivel;
        console.log(`${this.marca} gasto de combustível R$ ${gasto.toFixed(2)}`);
    }
}

const chevrolet = new Carro('Chevrolet - Corsa', 'Branco', 15.5);
const peugeot = new Carro('Peugeot - 206', 'Branco', 12);

chevrolet.descrever();
peugeot.descrever();

chevrolet.gastoPercurso(100, 5.39);
peugeot.gastoPercurso(100, 5.39);