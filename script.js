let lkg = document.getElementById('kg');
let lfnt = document.getElementById('fnt');
let lRes = document.getElementById('res');

function convertKgToFunt(){
    let kg = lkg.value;//получение результата из поля
    let fnt = lkg.value;//получение результата из поля
    const a = 0.454;
    let result = kg / a;//получился результат
    console.log('результат в фунтах ' + ' килограммов');
    lRes.innerText = result

}