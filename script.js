let btn = document.getElementById("start");
let temp = document.getElementById("fnode");
let canv = document.getElementById("canv");
btn.addEventListener('click',loadFoto);
function loadFoto(rangeFoto){
    fetch('https://api.slingacademy.com/v1/sample-data/').then(resusult => resusult.json())
    .then(res =>res.photos).then(a => {
        let arr = [];
        for(let i=0; i<10; i++){
            arr.push(a[i].url);
    }
    //console.log(arr);
    return arr;
    }    
    ).then(b => createElement(b));
}

function createElement(){
   for(let i = 0; i<l.lenght; i++){
   let foto = temp.content.cloneNode(true);
   foto.getElementById('ft').setAttribute('src',l);
   console.log(foto);
   canv.appendChild(foto);
} 
}