//remove specific element in array
// const removeelement = (arr,n) =>{
// const index = arr.indexOf(n);
// if(index>-1){
//  arr.splice(index,1)   
// }
// return arr
// }
// console.log(removeelement([1,2,3,4,5,6,8,7,9],9));
// console.log(removeelement([4,58,56,4],58));

// using loop

// function removeelemet(arr,n){
//     let newarr = [];
//     for(i=0;i<=arr.length;i++){
//         if(arr[i]!=n){
//         newarr.push(arr[i]);
//         }
//     }
//     return newarr;
// }
// console.log(removeelemet([1,2,5,8,6,9,8,5,4],5))


// reverse string
// const reverststr = (str) =>{
//     return str.split('').reverse().join('');
// }
// console.log(reverststr("kishan "))

// removes the duplicate arr
// function dupli(arr){
// return [...new Set(arr)];
// }
// console.log(dupli([1,2,5,2,2,5,8,5,5,8,8,8]));

// console.log(isNaN(new Date()));
// console.log(isNaN(Date()));

// var y =20;
// function favfunc(){
//     var x =10;
//     function fun1(){
//         console.log(x);
//     }
//     function fun2(){
//         console.log(x);
//     }
//     fun1();
// fun2();
// }
// favfunc();


// let arr = [1,2,3,4,4,3,3,5];
// let arr1 = [];
// for(let i=0; i<arr.length; i++){
//     if(arr1.indexOf((arr[i])=== -1)){
//         arr1.push(arr[i]);
//     }
// }
// console.log(arr1);
let arr = [1, 2, 3, 4, 4, 3, 3, 5];
let arr1 = [];
for (let i = 0; i < arr.length; i++) {
    if (arr1.indexOf(arr[i]) === -1) {