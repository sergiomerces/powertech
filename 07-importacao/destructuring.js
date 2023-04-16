/*
Destructuring

A gente pode destruir o objeto

//construindo um objeto
{ gets, print }

//ou um objeto tradicional
const pessoa = {
    nome: 'Sérgio'
};

//com destructuring eu abro chaves informo um atributo e atribuo o objeto
const { nome } = pessoa;

//essa outra forma é equivalente a anterior
const nome = pessoa.nome;

*/


//a linha de importação pode ser reescrita com destructuring e imediatamente usarmos as funções
//const funcoes = require('./funcoes-auxiliares');
const { gets, print } = require('./funcoes-auxiliares');

print(gets());