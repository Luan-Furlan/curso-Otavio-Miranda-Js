
/*
const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toLocaleDateString('pt-BR',{dataStyle: 'full', timeStyle: 'short'});
*?


/*
const  h1 = document.querySelector('.container h1');
const data = new Date(); 

function getWeekDayText(weekDay) {
    const weekday = ['Sunday', 'Monday','Tuesday','Wednesday','thurday', 'Friday'];
    return [weekDay];
    
}

function getNameMonth(numberMonth) {
   const meses = [ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
   return meses[numberMonth];
}

function zeroALeft(num) {
    return num >= 10 ? num : `0${num}`
}

function createDate(data) {
    const weekDay = data.getDay();
    const numberMonth = data.getMonth();

    const DayName = getWeekDayText(weekDay);
    const nameMonth = getNameMonth(numberMonth);
}
*/

/*
const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = datatoString();

function getdiaSemanaTexto(diaSemana) {
    const diaSemana = data.getDay();
    const diaSemanaTexto = data.getMonth();

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;

        case 1:
            diaSemanaTexto = 'Segunda-feira';
            return diaSemanaTexto;

        case 2:
            diaSemanaTexto = 'Terça-feira';
            return diaSemanaTexto;

        case 3:
            diaSemanaTexto = 'Quarta-feira';
            return diaSemanaTexto;

        case 4:
            diaSemanaTexto = 'Quinta-feira';
            return diaSemanaTexto;

        case 5:
            diaSemanaTexto = 'Sexta-feira';
            return diaSemanaTexto;

        case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
    }
}

function getNomeMes(numeroMes) {
    let nomeMes = data.getMonth();

    switch (numeroMes) {
        case 0:
            nomeMes = 'Janeiro';
            return nomeMes;

        case 1:
            nomeMes = 'Fevereiro';
            return nomeMes;

        case 2:
            nomeMes = 'Março';
            return nomeMes;

        case 3:
            nomeMes = 'Abril';
            return nomeMes;

        case 4:
            nomeMes = 'Maio';
            return nomeMes;

        case 5:
            nomeMes = 'Junho';
            return nomeMes;

        case 6:
            nomeMes = 'Julho';
            return nomeMes;

        case 7:
            nomeMes = 'Agosto';
            return nomeMes;

        case 8:
            nomeMes = 'Stembroo';
            return nomeMes;

        case 9:
            nomeMes = 'Outubro';
            return nomeMes;

        case 10:
            nomeMes = 'Novembro';
            return nomeMes;

        case 11:
            nomeMes = 'Dezembro';
            return nomeMes;
    }
}

function criadata(data) {
    const diaSemana = data.getdia();
    const numeroMes = data.getMonth();

    const nomeDia = getdiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numeroMes);
    console.log(nomeDia, nomeMes);
}



h1.innerHTML = getdiaSemanaTexto(data.getDay());
*/

const h1 = document.querySelector('.container h1');
const data = new Date();
//const opcoes = {
//    datestyle: 'full',
//    timestyle: 'short'
//};

h1.innerHTML = data.toLocaleDateString('pt-BR', {datestyle: 'full', timestyle: 'short'});

