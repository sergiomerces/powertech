/*
Classes - posso ter várias pessoas com as mesmas propriedades, a classe cria um modelo(template) para outros itens do objeto.
*/

//A classe pessoa tem o papel de definir como são as pessoas para que possam ser instaciandas
class Pessoa {
    nome;
    idade;

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

//Instância vai ser a ocorrência de uma pessoa
const pietra = new Pessoa();
pietra.nome = 'Pietra Luiza';
pietra.idade = 15;

const izabel = new Pessoa();
izabel.nome = 'Izabel Cristina';
izabel.idade = 40;

/*
console.log(pietra);
console.log(izabel);
*/

pietra.descrever();
izabel.descrever();