// let and const ,variables constants
// arrow function -function 
// template literals - ``
// default parameters - jab aap value na de function parameter ko to wo default value le sake
// rest and spread - ... jo ki alag work karte hai different context mein
// destructuring - arrays and objects se  data bahar nikaalna in variables
// classes - to make objects from a particular blueprint
// 
// promises - to take care of async part
// async await - to take care of the async part but more elegantly
// *try catch - to take care of the code when it gets error







// 1. let(we can change the value of variable) and const(we can't change the value of variable)
// let a =2;
// a = 12
// console.log(a);//out put is 12

// const x =15;
// x = 12;
// console.log(x);//error (assignment to constant variable)
 

// let and const dono se aap value store kar sakte ho, but dono differently behave karte hai 1. let change ho sakta hai and const nahi ho skta, 2.let ko first time value dena aniwaarya nahi hai and const ko hai
// let  a;//can 
// const b;// can't

// let and const are similar in few things
// let and const dono Es6 se hai
// let and const dono khudko window object mein add krte hai
// .................. braces scoped hote hai

// braces scoped
// {
//     let a =12;
// }
// console.log(a);// error a is not defined

// {
//     const a = 12;
// }
// console.log(a)// error  a is not defined

// But var is not braces scoped
// {
//     var a = 12;
// }
// console.log(a);//output is 12




// 2. arrow function
// puraani js mein teen parakar ke function they(hindi),
// were:
// function statement
// function  expression 
// anonymous function

// nayi js mein ek parakr ka function hai jiske teen roop hai:
// arrow function

// basic fat arrow function

// var a =( ) => {  }
// a();

// fat arrow function with one parameter
// var b  = (parm) =>{}


// fat arrow function with implicit return(hamne khud se return na likha ho fir bhi return karde)
// var c = () => 12;
// console.log(c());




// 3.template literals - backtick ``

// hey 2+2 is 4 and 2-2 is 0 
// juni javascript ma uper nu print karavva ("hey" +2+2+ "is" +4+"and"+2-2+"is"+0+) avu lakhvu padtu
// Es6 ma (`hello ${2+2} is ${4} and ${2-2} is ${0} `)

// console.log("hey" + 2 + 2 + "is 4 and" + 2 - 2 + "is 0")
// console.log(`hello ${2+2} is ${4} and ${2-2} is ${0} `);




// 4.default parameter
// function abcd(prm = 0){
//     console.log(prm);
// }
// console.log(abcd(12));
// console.log(abcd());

// 5. ... spread/rest
// spread use hota hai copy ya fir us location par kisi aur ki values bikherne ke liye
// var a = [1,2,3,4,5,6,7,8,9,8,7,4];
// var b = [...a];
// console.log(a);


// rest use hota hai jab aapko bache huye values ek variable mei daalne ho
// function abcd(a,b,c,...d){
//     console.log(a,b,c,d);
// }
// abcd(1,2,3,4,5,6,7,8);




// 6.destructuring array

// var a =[1,2,3];
// var [b,c,] =a;
// console.log(b);
// console.log(c);

// destructuring object
// var obj = {name:"kishan", age:20};
// var {age} = obj;5
//  console.log(age);





// Promises (promise hamesa function magta hai)

// var ans = new Promise((res, rej)=>{
//     if(true){
//         return res();
//     }
//     else{
//         return rej();
//     }
// })

// ans
// .then(function(){
//     console.log("resolve hogaya tha");
// })

// .catch(function(){
//     console.log("resolve nahi hua tha");
// })

// user will ask for a number between 0 se 9 and if the number is below 5 resolve if not reject

// var ans = new Promise((res,rej)=>{
//     var n = Math.floor(Math.random()*10);
//     console.log(n);
//     if(n<5){
//         return res();
//     }
//     else{
//         return rej();
//     }
// })

// ans
//    .then(function(){
//     console.log("number is less than 5");
//    })
//    .catch(function(){
//     console.log("number is greterthan 5");
//    })


// sabse pahle ghar par aao 
// gate kholo
// khan khao
// incongito mode Chalao
// sajao kyuki turm thak gaye ho


// let ans = new Promise((res,rej)=>{
//     return res("sabse pahle ghar par aao");
// })
// var p = ans.then(function(data){
//     console.log(data);
//       return new Promise((res,rej)=>{

//         return res("gate kholo");
//     })
// })
// var p1 = p.then(function(data){
//     console.log("gate kholo");
//     return new Promise((res, rej) => {
//         return res("khana khao");
//     })
// })
// var p2 = p1.then(function(data){
//     console.log(data);
//     return new Promise((res, rej) => {
//         return res("incognito mode chalao");
        
//     })
// })
// var p3 =p2.then(function(data){
//     console.log(data);
//     return new Promise((res,rej) =>
//         {
//         return res("sojao");
//     })
// })
// p3.then(function(data){
//     console.log(data);
// })




// async and await

// koi bhi esa function jisme aap code likhege , kyoki async code hai to aap promises ka istemal kar sakte hai, jab uska answer aayega aapko then lagana padega, us then ko lagaane se bachne ke liye aap async await ka istemaal kar sakte hai
//  function abcd(){
//     fetch('https://randomuser.me/api/')
//     .then(function(raw){
//         return raw.json();
//     })
//     .then(function(data){
// console.log(data);
//     })
// }
// abcd();

//jab bhi koi code async hai to aapko uske liye wait karna padta hai kyoki humein jahi pata uska answer kab aayega

// async function abcd(){
//     let raw = await fetch('https://randomuser.me/api/');
//     let ans = await raw.json();
//     console.log(ans);


// }
// abcd();





// try and catch

// console.log("hey"); 
// try{
//     console.log(jh);
// }
// catch(err){
//     console.log(err);
// }
// console.log("heud");


