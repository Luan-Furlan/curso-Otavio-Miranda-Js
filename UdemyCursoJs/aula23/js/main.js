// ? : 
 //const pontuacaoUsuario = 500;
 //const nivelUsuario = pontuacaoUsuario >= 1000 ? 'UsuárioVip' :'Usuário normal';

 //console.log(nivelUsuario);
 /*
 if (pontuacaoUsuario >= 1000) {
    console.log('UsuárioVip');
 } else {
    console.log('Usuário normal');
 }
*/
 const pontuacaoUsuario = 1000;
 const nivelUsuario = pontuacaoUsuario >= 1000 ? 'UsuárioVip' :'Usuário normal';

 const corUsuario = null || 'Pink';
 const corPadrao = corUsuario || 'Preta';
 console.log(nivelUsuario, corPadrao);