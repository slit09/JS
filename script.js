const btnleft = document.getElementById("left");
const btnUp = document.getElementById("up");
const btnDown = document.getElementById("down");
const btnRight = document.getElementById("right");
let monitor = document.getElementById('mon');
let changeCar = document.getElementsByTagName("select")[0];
let imgLeft = document.getElementById("curLeft");
let imgUp = document.getElementById("curup");
let imgDown = document.getElementById("curdown");
let imgRight = document.getElementById("curRight");
let group8tn = document.getElementById("group8tn");
group8tn.addEventListener('click',groupSelection);

let curTrans = 0;
if(localStorage.getItem('cur')){
   curTrans = localStorage.getItem('cur');
}

changeCar.addEventListener('change', function(e){
   curTrans = changeCar.options.selectedIndex - 1;
   console.log(curTrans);
   curFolder = `${folder}${arrTrans[curTrans].path}/`;
   let path = `${curFolder}left.jpg`
   monitor.setAttribute('src', path);
//------------------------------- 
   path = `${curFolder}left.jpg`
   imgLeft.setAttribute('src', path);
   path = `${curFolder}up.jpg`
   imgUp.setAttribute('src', path);
   path = `${curFolder}down.jpg`
   imgDown.setAttribute('src', path);
   path = `${curFolder}right.jpg`
   imgRight.setAttribute('src', path);

   localStorage.setItem('cur',curTrans);
});

function groupSelection(e){
   let btn = e.target.getAttribute('id');
   switch(btn){
      case "left":
         runLeft();
         break;
      case "up":
         runUp();
         break;
      case "down":
         runDown();
         break;
      case "right":
         runRight();
         break;     
}}

const folder = "img/";
const arrTrans = [{path:"logan",
                   carName:"Логан"},
                     {path:"samosval",
                     carName:"Самосвал"},
                     {path:"t34",
                     carName:"T 34"},
                     {path:"t90",
                     carName:"T 90"},
                     {path:"uaz",
                     carName:"Уаз"}];

let curFolder = `${folder}${arrTrans[curTrans].path}/`;

for(i =0; i < arrTrans.length ; i++){
   let elOption = document.createElement('option')
   elOption.setAttribute("value", i);
   elOption.textContent = arrTrans[i].carName;
   changeCar.append(elOption);
}

console.log(changeCar)
function runLeft(){
   console.log("Поехали влево");
   let path = `${curFolder}left.jpg`
   monitor.setAttribute('src', path);
}

function runUp(){
   console.log("Поехали вперед");
   let path = `${curFolder}up.jpg`
   monitor.setAttribute('src', path);
}
function runDown(){
   console.log("Поехали назад");
   let path = `${curFolder}down.jpg`
   monitor.setAttribute('src', path);
}
function runRight(){
   console.log("Поехали вправо");
   let path = `${curFolder}right.jpg`
   monitor.setAttribute('src', path);
}

// btnleft.addEventListener('click',runLeft);
// btnUp.addEventListener('click',runUp);
// btnDown.addEventListener('click',runDown);
// btnRight.addEventListener('click',runRight);

