
// const f = sum;
// f(5,6);
// const d = (c,u)=>{ //  ()=> a != b
//     let res = c * u;
//     console.log(`Результат умножения ${res}`);

// } 

// d(5,20);

// let c = "глобальная переменная"

// function sum(a,b){
//     let c = a + b;
//     console.log(`Область видимости функции ${c}`);
//     if(c > 12){

//         let c = "Область блока";
//     }

//     console.log(`Выход из блока значение ${c}`);
//     return c;
// }

// sum(5,7);
// console.log(c)


// let polkan = {
//     poroda : 'алабай',
//     speak : function() {
//         console.log(`Gav Gav  ${this.age}`)
//     },
//     age: 100,
// }

// console.log(polkan);

// polkan.speak();

// let ar = [2,7,4,9,12,33];
// const filter = (a) => a > 5;
// let f = ar.filter(flt);
// console.log(f);

	
let users = [
{ id:	1,
name:	"Leanne Graham",
username:	"Bret",
email:	"Sincere@april.biz",
age : "25",
address: {
street:	"Kulas Light",
suite:	"Apt. 556",
city:	"Gwenborough",
zipcode:	"92998-3874",}
},
{
    id:	2,
name:	"Ervin Howell",
username:	"Antonette",
email:	"Shanna@melissa.tv",
age : "25",
address: {
street:	"Victor Plains",
suite:	"Suite 879",
city:	"Wisokyburgh",
zipcode:	"90566-7771",}	
},
{
    id:	3,
name:	"Clementine Bauch",
username:	"Samantha",
email:	"Nathan@yesenia.net",
age : "12",
address:	{
street:	"Douglas Extension",
suite:	"Suite 847",
city:	"McKenziehaven",
zipcode:	"59590-4157"
}}	
]

// найти пользователей с возростом 25 и выше 
let res1 = users.filter(a => a.age == 25);
console.table(res1);

// из массива пользователя создать массив email
let res2 = users.map(a => a.email);
console.table(res2);

//найти из массива пользователя у которых нету в username буквы a
let res3 = users.filter(n=> {
    if (n.username.indexOf('a') == -1 || n && n.username.indexOf('A') == -1){
             return true;
    }
    return false;
}
  );
console.table(res3);