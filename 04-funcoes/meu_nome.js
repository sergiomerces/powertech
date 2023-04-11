function escreverNome(nome) {
    return `Meu nome é ${nome}`;
}

escreverNome('Sérgio da Costa Mercês');
escreverNome('José Fernando da Costa Mercês');

function verificarIdade(idade) {
    if(idade < 18) {
        console.log(escreverNome('José') + ' é menor');
    } else {
        console.log(escreverNome('Sérgio') + ' é maior');
    };
}

verificarIdade(43);