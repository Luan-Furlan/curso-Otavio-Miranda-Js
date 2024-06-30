/* 
Operadores lógicos
&& -> AND -> E todas as expressões precisam ser verdadeiras para retornar true
|| -> OR -> OU
! -> NOT -> NÂO
*/

//console.log(true && true); 

// const expressaoAnd = true && true && true && true;
//const expressaoOr = false || false || false || false;

const usuario = 'Luan';
const senha = '12345';
//                       true                   false
//const vailogar = usuario === 'Luan' &&  senha === '1234';
//console.log(vailogar);

//                        true                vira true mesmo estando errado
const vailogar = usuario === 'Luan' ||  senha === '1234';
console.log(vailogar);
console.log(!!true); // retorna para o valor original
console.log(!!!false); // retorna para o valor original. É o mesmo procedimento