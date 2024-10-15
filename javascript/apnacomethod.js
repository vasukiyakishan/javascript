//arr method 
//forEach(some function defination or  name)
// let arr =[1,2,5,6,8,9,40];
// arr.forEach((ele)=>{
// console.log(ele);
// });

// let arr = [{
//     name:"kishan",
//     age:20
// },
// {
//     name:"jaydip",
//     age:21
// }];
// arr.forEach((elem)=>{
//     console.log(elem);
// })

//map method give  a newarr
// syntax: newarr = arr.map(some function defination and some code);

// let arr =[1,5,6,8,9,4];
// newarr = arr.map((ele)=>{
//    return  ele*2;
// })
// console.log(newarr);

// let arr = [1,5,6,8,9];
// newarr = arr.map((ele)=>{

// });
// console.log(newarr);


//filter when output false the not add this element in newarr and when output is true the add the element in the new arr
// syntax: Array.filter(some function defination and some code)

// let arr =[1,4,8,9,5,6];
// let newarr = arr.filter((ele)=>{
//     return ele%2==0;
// })
// console.log(newarr);

//ever method return true or fase; used for every element presented in the array;
//syntax:arr.ever(some function defination or name);

// let arr=[1,4,8,9,4,60];
// let newarr= arr.every((ele)=>(  ele % 2==0));
//   console.log(newarr);


//some method give true or fase; but some element in arry ;
// syntax:arr.some(some function defination or name);
// let arr =[1,54,8,6];
// let newarr = arr.some((ele)=>(ele%2==0));
// console.log(newarr);

// reduce method gives a single output
// syntax:arr.reduce(reduce function with 2 variable(accumlator,element))
// let arr =[1,5,6,8,40];
// let total = arr.reduce((acume,ele)=>(
//     acume+ele
// ));
// console.log(total);

//Rest method 
// function sum(...args){
//     for(i=0;i<args.length;i++){
//         console.log("you gave us:",args[i]);
//     }

// }
// console.log(sum(1,2,3,4,5));

// function min(){
//     console.log(arguments);
//     console.log(arguments.length);
//     arguments.push(1);
// }
// console.log(min(1,2,3,4,5,6,8,9));

// new set method
// A new set method in javascript create new set object. A JavaScript Set is a collection of unique values.The values can be of any type, primitive values or objects

// How to Create a Set
// You can create a JavaScript Set by:

// Passing an array to new Set()
// Create an empty set and use add() to add values

// const letters = new Set([1,2,3,4,5,6])
// console.log(letters)

// const letter = new Set();
// letter.add(1);
// letter.add(2);
// letter.add(3)
// console.log(letter);



