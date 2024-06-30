/*
&& -> false && true -> false "o valor mesmo"
|| -> true && false -> vai retornar o valor verdadeiro
FALSY
*false
0
'' "" ``
null / undefined
NaN
*/ 
//console.log('Luan Furlan' && 0 && 'Barbara');// retorna o valor (false).
//console.log('Luan Furlan' && true && 'Barbara'); // retorna Barbara, que é o valor real (true).

//console.log('Luan' && 'Barbara'); // retorna barbara

//console.log('Luan' && NaN && 'Barbara'); // na comparação ela faz a comparação e retorna NaN, ou outra comparação que esteja no meio

//function falaOi () {
//    return 'Oi!';
//};

//const vaiExecutar = true;

//console.log(vaiExecutar && falaOi());

//console.log(0 || false || null || 'Luan' || true);

const corUsuario = null;
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);
