//outra forma de acessar os valores do objeto sem ser diretamente

const pessoa = {
    nome: 'José Fernando da C. Merces',
    idade: 5,
    descrever: function () {
        // o this é usado para se referir a propriedades do próprio objeto
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

//acesso via string
console.log(pessoa['nome']);

//reatribuição equivalentes
/*
pessoa['nome'] = 'Novo nome';
pessoa.nome = 'Novo nome';
*/