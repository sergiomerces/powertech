/*
2. Crie um programa que seja capaz de percorrer uma lista de números e imprimir cada número par encontrado
*/

const numeros = [1, 3, 6, 8, 11, 16, 22, 23, 25, 27, 30];

for(let i = 0; i < numeros.length; i++) {
    if(numeros[i] % 2 === 0) {
        console.log(numeros[i])
    };
}