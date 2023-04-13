//Objeto
const jose = {
    nome: 'José Fernando da C. Merces',
    idade: 5,
    descrever: function () {
        // o this é usado para se referir a propriedades do próprio objeto
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};


//posso adicionar uma chave e valor a um objeto existente
jose.altura = 1.05;

//o método delete remove uma chave e valor do objeto
delete jose.nome;

console.log(jose.nome);
console.log(jose.idade);
console.log(jose);