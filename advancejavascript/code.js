
// currying
// function sum(a){
//     return function(b){
//       return function(c){
// console.log(a+b+c);   
// }
// 

// sum(1)(2)(6);

// let sum= a => b => c => console.log(a+b+c);
// sum(3)(2)(9);

// let log = time=> type=>msg=>console.log(`At ${time}: servirity ${type} =>${msg}`);
// log(new Date())('error')('power not sufficient');
// let lognow = log(new Date());

// lognow ('error')('lskj ldkj');
// let logerrornow = lognow('erroee');
// logerrornow('ksjlkdj ');



// Copying of objects
// shallowcopy
// Object.assign();
// let addressObject ={city:'dhandhuka',state:'gujarat'};
// let person ={
//     name:'kishan',
//     address:addressObject
// }
// console.log(person);

// let copy = Object.assign({},addressObject);
// copy.city ="lkd";

// console.log(copy);

// spread operator[...]

// let obj = {
//     name:"kishan",
//     id :"1212131"
// }
// let person = {...obj};
// console.log(person);

// Deep copy

// let person = {name:'kishan',city:'ahemdabad'};
// let copy = JSON.stringify(person);
// console.log(copy);
// let newcopy = JSON.parse(copy);
// console.log(newcopy);

//structure clone
// let person ={name:'kishan',city:'ahemdabad'};
// person.me =person;
// let copy = structuredClone(person);
// console.log(copy);