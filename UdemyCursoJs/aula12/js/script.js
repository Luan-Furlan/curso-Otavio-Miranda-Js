//let num1 = 0.7;//number
//let num2 = 0.1;//number

//console.log( num1.toString(2) +  num2);
//num1 = num1.tostring();
//console.log(typeof num1);
//tostring converte number para string
//console.log(num1.toFixed(2));
//tofixed altera a quantidade de casas decimais
//console.log(Number.isInteger(num1));// retorna se é verdadeiro ou falso, ou inteiro.
//let temp = num1 * 'Olá';

//console.log(temp);// retorna NAN

//console.log(Number.isNaN(temp)); //retorna NaN informando que é verdadeiro
//IEEE 754-2008
/*
let num1 = 0.7;//number
let num2 = 0.1;//number

num1 += num2; // 0.8
num1 += num2; // 0.9
num1 += num2; // 1.0
num1 += num2; // 1.1
num1 += num2; // 1.2
num1 += num2; // 1.3
num1 += num2; // 1.4
num1 += num2; // 1.5
num1 += num2; // 1.6
num1 += num2; // 1.7
num1 += num2; // 1.8
num1 += num2; // 1.9
num1 += num2; // 2.0


num1 = parseFloat(num1.toFixed(2)); // ou number funciona da mesma forma

console.log(num1);
console.log(Number.isInteger(num1));
*/

let num1 = 0.7;
let num2 = 0.1;
// melhor forma de fazer a conta com números pequenos
num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.8
num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.9
num1 = ((num1 * 100) + (num2 * 100)) / 100; // 1.0

console.log(num1);
console.log(Number.isInteger(num1));