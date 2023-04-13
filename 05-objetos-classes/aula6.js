//Para que seja obrigaório passar valores ao instanciar um objeto usamos o constructor

class Pessoa {
    nome;
    idade;
    anoDenascimento;

    //o constructor é o que acontece quando uma pessoa é instanciada
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        //o construtor permite criar deduções como propriedades da instância
        this.anoDenascimento = 2022 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}


const pietra = new Pessoa('Pietra', 15);
const izabel = new Pessoa('Izabel', 40);


pietra.descrever();
izabel.descrever();

console.log(pietra);