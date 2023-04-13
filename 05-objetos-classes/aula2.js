const pessoa = {
    nome: 'José Fernando da C. Merces',
    idade: 5,
    descrever: function () {
        // o this é usado para se referir a propriedades do próprio objeto
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

//ao inserir outro nome e outra idade, os valores do objeto são sobrescritos
pessoa.nome = 'Sérgio';
pessoa.idade = 43;


pessoa.descrever();