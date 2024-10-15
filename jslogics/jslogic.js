// foreach
// map
// filter
// destructuring
// spread and rest

// foreach
// arr=[2,5,6,3,9,6]
// arr.forEach(element => {
// console.log(element*2)
// })
// we can't use break and continue in foreach function


// map
// arr=["kishan","jaydip","hardik","assignt"];
// let newarr = arr.map(function(value){
//     return value;
// });
// console.log(newarr);

// 

// filter
// const names=["Alice","Bob","Charlie","David","Emma","Akash"];
// let newarr=names.filter(function(value){
//     return true;
// })
// let newarr=names.filter(function(value){
//     if(value === "Alice"){
//         return true; 
//     }
// })
// let newarr=names.filter(function(value){
//     if(value.startsWith("A")){
//         return true;
//     }
// })
// console.log(newarr);


// destructuring
// const user={
//     name:"kishan",
//     age:21,
//     skill:{
//         front:"html,css,javascript,react",
//         backend:"python",
//         mark:[60,70]
//     }
// }
// let {backend} = user.skill;
// console.log(backend);
// let [_,second]=user.skill.mark;
// console.log(second);



// Spread and rest ...
// const names=['john','jane','doe','smith'];
// const copynames=[...names];
// console.log(copynames);


// spread in object
// const smallobject={
//     name:"John",
//     age:21,
//     city:"dhandhuka",
// };
// const newobj ={...smallobject}
// console.log(newobj)


// rest oparator
// function abcd(a,b,c,...chacha){
//     console.log(a,b,c,chacha);
// }
// abcd(1,2,3,4,5,6);


// Questions
// Merging two arrays of data fetched from separate APIs into a single list.

// const names=["kishan","jaydip","dipak"];
// const ages=[21,20,25];
// let newarr=[...names,...ages];
// console.log(newarr);

// Filtering an array of objects to display items based on a search query
// const product=[
//     {name:"laptop",type:"Electronics"},
//     {name:"phone",type:"Electronics"},
//     {name:"table",type:"no"}
// ]
// let newarr=product.filter(function(value){
// return value.type==="Electronics";
// })
// console.log(newarr);



// Mapping over an array of user data to create a list of user cards.
// const users=[
//     {name:"John", age: 20},
//     {name:"Jane",age:21},
//     {name:"Doe", age:22}
// ];

// let newarr=users.map(function(user){
//     return `<div><h3>${user.name}</h3><h5>${user.age}</h5></div>`;
// });
// console.log(newarr);


// Grouping an array of objects by a specific property 