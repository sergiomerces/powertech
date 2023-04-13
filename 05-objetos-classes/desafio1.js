/*
Crie uma classe para representar pessoas
Para cada pessoa teremos os atributos nome, peso e altura
As pessoas devem ter a capacidade de dizer o valor do seu IMC
Instacie uma pessoa que se chama José que tenha 70 kg e 1.75 de altura e peça para que diga o seu IMC
*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    descrever() {
        console.log(`${this.nome} tem ${this.peso} kg e ${this.altura} m seu IMC:`);
    }

    calcularImc() {
      return this.peso / (this.altura * this.altura);
    }
}

const jose = new Pessoa('José', 70, 1.75);

jose.descrever();

console.log(jose.calcularImc().toFixed(3));