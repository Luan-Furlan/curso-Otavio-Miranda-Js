/*
 Primitivos (imutáveis) - string, number, boolean, undefined, null (biginit, symbol)
*/
//          0123
//let nome = 'Luan';
//nome[0] = 'R'; // não é possível mudar o primeiro caractér da string ou array
//console.log(nome[0]);

/*
let a = 'A';
let b = a; //cópia
console.log(a,b);

a = 'Outra Coisa';
console.log(a,b);
*/

// Referência (mutável) - array, object, function - Passados por referência
//let a = [1, 2,3];
//let b = a; // mesmo inicializando outra variável ela vai ter o mesmo valor
//console.log(a, b);

//a.push(4); // adiciona
//console.log(a,b);

//b.pop();
//console.log(a,b);
//const a = {
//    nome: 'Luiz',
//    sobrenome: 'Otavio'
//};
//const b = a;
//a.nome = 'João';
//console.log(b);

const a = {
    nome: 'Luiz',
    sobrenome: 'Otavio'
};
const b = {...a};

a.nome = 'João'; // tanto a quanto b são modificados
console.log(a);
console.log(b);