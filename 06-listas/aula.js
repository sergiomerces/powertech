//declara uuma lista (array)
const alunos = ['João', 'Vitor', 'Marina'];

//para acessar uma lista
console.log(alunos);

//para acessar um elemento da lista usamos o seu índice
console.log(alunos[0]);

//para adicionar um novo elemento numa posição específica
alunos[3] = 'Vinicius';
console.log(alunos);

//para adicionar um elemento ao fim da lista   
alunos.push('Renan');
console.log(alunos);

//para remover um elemento do fim da lista
alunos.pop();
console.log(alunos);

//para remover um elemento ao início da lista
alunos.shift('André');
console.log(alunos);

//para adicionar um elemento ao início da lista
alunos.unshift('José');
console.log(alunos);