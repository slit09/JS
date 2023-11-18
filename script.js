//let condition = false;
 
// console.log(userName)

// switch(userName){
//     case 'Отчим':
//         alert('ЭТО ТЫ ПАПА???');
//         break;
//     case  'ИванЗоло2004':
//         alert('а я умнее тебя у меня 16 мегабайт');
//         break;
//     case   'Барсик':
//         alert('Ух с*ка прекрати мяукать барсиииииииииииик МЯУУУУУУУУУУУУУУУУУУ')
//         break;
//     default :
//         alert('Ты какой та полу рак полу х** определись! а то барсика позову')

// }

// for(let i = 0; i < 10; i++){
//     //debugger
//     console.log(i * 5);
// }

// let userName = prompt('Введите свое имя!');
// while(userName != 'q'){
//     console.log(userName);
//     userName = prompt('Для того что бы выйти Введите q');
//     alert('Посмотри на меня!');
//     if(userName == 'dog'){
//         alert('Продолжаем!! Введено dog')
//         continue;
//     }
//     alert('Не отображается если dog')
//     if (userName == 'ket'){
//         alert('вываливаемся из цикла!')
//     }
// }


// let ar[] =  ['шарик','бобик','барсик','ИванЗоло2004'];
// console.log(ar.length);
// ar.push('ОтчимИванаЗоло');
// console.log(ar.length);
// console.table(ar);


let manySumm = document.getElementById('many').value;
let manySelect = document.getElementById('checkMany').value;
let outResult = document.getElementById('out');
let arr = [82,4.8,97,12]
function converter(){
    let res = manySumm * arr[manySelect -1];
    outResult.innerText = `Стоимость по курсу ${res}`;
}