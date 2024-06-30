let varA = 'A';// B
let varB = 'B';// C
let varC = 'C';// A
//criando array para cada variavel receber o valor da outra
[varA, varB, varC]  = [varB, varC, varA ];

console.log(varA, varB, varC);