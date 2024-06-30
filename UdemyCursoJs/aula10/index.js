 //               0123456789
let umaStrting = 'Um \"texto"';

console.log(umaStrting)
console.log(umaStrting.match(/[a-z]/g))

// \barras ivertidas \ tiram as " ".
// exprerssão regulares: console.log(umaStrting.match(a/[a-z]/g));
//impreso [ 'm', 't', 'e', 'x', 't', 'o' ]
// console.log(umaStrting.replace(Um, 'Outra')); substitui a palavra inicial
// split fatia a variavel