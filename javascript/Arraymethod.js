// forEach (give a each element of array)
// syntax : array.forEach(some function defination or name);
// let arr =[1,2,3,5,7,5,5,7,0];
// let p = function arrr(el){
//     console.log(el);
// }

// arr.forEach(p);

// arr.forEach(function(el){
//     console.log(el);
// })

// let arr = [
//     {name:"kishan",
//     mark:76
//     }
// ,
//    {name:"jaydip",
//     mark:78},
//     {
//     name:"vikash",
//     mark:86,
//     }
// ]

// arr.forEach(function(student){
//     console.log(student);
// })





// Map method(give a new array and this new array size is same with original array)
// syntax: arr.map(some function or name);

// let arr = [1,2,3,4,5,6];
// let newarr = arr.map(function(el){
// return el*2
// })
// console.log(newarr); 


// let arr = [
//     {name:"kishan",
//     mark:76
//     }
// ,
//    {name:"jaydip",
//     mark:78},
//     {
//     name:"vikash",
//     mark:86,
//     }
// ]

// let a =arr.map((elem) =>{
//     return elem.mark/10;
// })
// console.log(a);



// filter (filter give a new array but in callback function condition true element store in this array fause condition elem not store)

// let arr =[1,2,3,4,5,6,7,8,9,10,20,30];
// let a =arr.filter((elem)=>{
//     return (elem % 2 == 0);
// })
// console.log(a);




// every method(return true if every element of array gives a true for some function. Else return false)(according logical And);

// let arr =[1,2,3,4,5];
// let a = arr.every((elem)=>{
//     return (elem % 2 == 0);
// })
// console.log(a);

// let array = [2,4,8,6];
// let b = array.every((elem)=>{
//     return elem%2==0;
// })
// console.log(b);

// some method (return true if some element of array gives true for some function else give false)(According logical OR)
// let arr = [2,4,6];
// let a = arr.some((elem) =>{
// return elem % 2 == 0;
// })
// console.log(a);

// let array = [1,5,3];
// let b = array.some((elem)=>{
//     return elem % 2 ==0;
// })
// console.log(b);


// let arr = [1,2,3,4,8,6];
// let a = arr.some((elem)=>{
//     return elem %2 ==0;
// })
// console.log(a);




// Note: every and some method gives single boolean values as result but reduce function give single value not boolean

// syntax:Array.reduce(reduce function with 2 variable for (accumulator , Element))
// let arr = [1,2,3,4,5,6];
// let  a = arr.reduce((res,elem)=>{
//     console.log(elem);
//     return res+elem;
// })
// console.log(a);


// finding maximum in array
// let arr =[,1,2,35,6,8,4,5];

// max = -1;
// for(i=0;i<arr.length;i++){
//     if(max<arr[i]){
//         max = arr[i];
//     }
// }
// console.log(max);

// let max = arr.reduce((max,ele)=>{
//     if(max<ele){
// return ele;
//     }else{
//         return max;
//     }
// })
// console.log(max);


//The at() method  return the charecter at the given position in string

// Uppercase or not

// const isupper =(chr) =>{
//     if(chr.charCodeAt(0)>=65 && chr.charCodeAt(0)<=90){
//         return true;
//     }
//     return false;
// }
// console.log(isupper("S"));

//Lower 

// const islower = (chr) =>{
//     if(chr.charCodeAt(0)>=97 && chr.charCodeAt(0)<=122){
//         return true
//     }
//     return false
// }
// console.log(islower("l"));
// console.log(islower("L"));



// The startsWith() method returns true if a string starts with a specified string.
// Otherwise it returns false.
// The startsWith() method is case sensitive.

let name = "Vasukiya kishan  mansukhbhai"
console.log(name.toLowerCase().startsWit("vasukiya"));
console.log(name.startsWith("kishan",1));
console.log(name.startsWith("mansukhbhai"))