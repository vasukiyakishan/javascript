// say();
// function say(){
//     console.log('say');
// }

// sayhello();
// let sayhello =function (){
//     console.log("hello");
// }



// //clouser
// let count = 0;
// function increment(){
  
//     console.log(count++);
// };
// increment()
// increment()



// function createuser(name){
    
//     let greeting = 'hi ';
//     function greet(){
//         return greeting + name + 'is created';
//     }
//     return greet
// }
//  let welcomekishan = createuser('hello');
//     let welcomekis = createuser("ksjd");

// console.log(welcomekis());


//lexical environment

// function init(){
//     let name = 'kishan';
//     function greet(){
//         console.log(name)
//     }
//     return greet;
// }
// let sayHi = init();
// sayHi();

// function initCounter(id){  
// let count =0;
// return function(){
//     count++;
//     document.getElementById(id).innerText = count;
// };
// }

// let counter1 = initCounter('btn1');
// let counter2 = initCounter('btn2');

// function initAddString(inputId, outputId){
//     let str = '';
//     return function () {
//         str += ' ' + document.getElementById(inputId).value;
//         document.getElementById(inputId).value = '';
//         document.getElementById(outputId).innerText = str;
//     };
// }
// let strAdder1 = initAddString('text1', 'text-output1');
// let strAdder2 = initAddString('text2','text-output2');

