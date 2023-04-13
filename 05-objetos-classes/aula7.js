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

function compararPessoas(p1, p2) {
    if(p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if(p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const sergio = new Pessoa('Sérgio', 43);
const izabel = new Pessoa('Izabel', 40);

compararPessoas(sergio, izabel);