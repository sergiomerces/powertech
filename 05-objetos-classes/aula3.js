const pessoa = {
    nome: 'José Fernando da C. Merces',
    idade: 5,
    descrever: function () {
        // o this é usado para se referir a propriedades do próprio objeto
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

//funcções tambem podem ser redefinidas
pessoa.descrever = function () {
    console.log(`Meu nome é ${this.nome}`);
} 

pessoa.descrever();