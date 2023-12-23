// let dogs = ['Шарик','Бобик','Инкакентий','ВАня']

//  let {sharik, bob} = dogs;

// console.log(sharik, bob);

// [bob,sharik] = [sharik,bob];
// console.log(sharik, bob);

// let car = {
//     weel: "19d",
//     acselerator: "100",
//     color: "red"
// }

//  let {color:r,weel} = car;
//  console.log(r,weel)

let limonad = {
    sirop: "Груша",
    value: "0.5",
    conservant: "Фенил"
}

let svetLimonad = {
    sirop: "Груша",
    value: "0.5",
    conservant: "Пол"
}

let a = 5;
let b ;
b = a;
console.log(`a = ${a} b = ${b}`);
b = 1;
console.log(`a = ${a} b = ${b}`);

// limonad = svetLimonad;
// console.table(limonad);
// limonad.conservant = "фенил";
// console.log("new limonad");
// console.table(limonad)
// console.log("сетский лимонад");
// console.table(svetLimonad);

// Object.assign(svetLimonad,limonad);
// console.log("new limonad");
// console.table(limonad)
// console.log("сетский лимонад");
// console.table(svetLimonad);
// console.table(limonad);

// limonad.conservant = "фенил";

// console.log("new limonad");
// console.table(limonad)
// console.log("сетский лимонад");
// console.table(svetLimonad);

// const Dog = function(age, Dname,weight,poroda){
//     this.age = age;
//     this.Dname = Dname;
//     this.weight = weight;
//     this.poroda = poroda;

    //  this.speek = function(){
    //     console.log("ГАВ ГАВ")
    //      }
    //     }

class Dog{
         age;
         Dname;
         weight;
         poroda;

    constructor(age,Dname,weight,poroda){
        this.age = age;
        this.Dname = Dname;
        this.weight = weight;
        this.poroda = poroda;
}
 speek(){
    console.log("GAV GAV")
 }
}

let sharik = new Dog(2,"Шарик",5,"Двортерьер");
let bob = new Dog(3,"Бобик",1,"Чихуахуа");


console.table(sharik,bob)
console.table(bob);
sharik.speek();
bob.speek();