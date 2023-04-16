/*
Importação
Ajuda na organização do código para que não fique confuso muito código no mesmo arquivo
Para distribuição de responsabilidade isolamos e dividimos trchos de código para ficar mais fácil de ler e dar manutenção
A importação recupera um pedaço de código isolado.

Usar a forma mais simples de importação sem configurações adicionais no json

O require é uma função do nodejs quue importa arquivos

Quando importamos alguma coisa, importamos aquilo que está sendo exportado

Usamos o modules.exports função do nodejs que exporta as funções como objetos literais

O ciclo de vida da exportação/importação, o arquivo fonte exporta as funções, variáveis e retornos como um objeto e o arquivo destino recebe esses dados.
Em qualquer parte do programa onde haja uma nova importação as informações em cache poderão ser reutilizadas
*/

function gets() {
    return 10;
}

function print(texto) {
    console.log(texto);
}

//função do nodejs que exporta as funções como objetos literais
module.exports = { gets, print };