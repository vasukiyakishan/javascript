// in var case not create temporal dead  zone(TDZ)

// age = 100;
// console.log("your age is",age);
// var age = 20;
// console.log("your age is",age);

// in const and let temporal dead zone is create
// age =100;
// console.log("your age is",age);
// let age = 21;
// console.log("your age is ", age);


// myfun();
// var myfun = function(){
//     console.log("first");
// }
// myfun();
// function myfun(){
//     console.log("second");
// }
// myfun();

// var variable = 10;
// (()=>{
//     console.log(variable);

//     variable=20;

//     console.log(variable);
// })
// ();
// console.log(variable);
// var variable = 30;
// console.log(variable);

// foo = 30;
// console.log("Foo",foo);
// var foo =100;
// console.log("Foo",foo);


// for(i=0; i<=10; i++){
//     setTimeout(()=>console.log(i),0);
// }

// for(i=0; i<10; i++){
//     setTimeout(()=>console.log(i),0);
// }
 
// for(let i=0; i<=10; i++){
//     setTimeout(()=>console.log(i),0);
// }

// for(var i=0; i<=10; i++){
//     setTimeout(()=>console.log(i),10);
// }


// var animal = "hello";
// if(1){
//     animal ="kdk";
//     function animal(){};
//     animal ="sieo";
// }
// console.log(animal)


// how to convert object in array
// let obj = {
//     name:'kishan',
//     age:'21',
//     mark:50
// }
// let arr = Object.keys(obj);
// console.log(arr);

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
// let arr = [1, 2, 3, 4, 4, 3, 3, 5];
// let arr1 = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr1.indexOf(arr[i]) === -1) {
//         arr1.push(arr[i]);
//     }
// }
// console.log(arr1);
// let arr = [3, 2, 3, 4, 4, 1, 0, 5];

// // let uniqueArr = arr.filter((element, index, self) => {
// //     return self.indexOf(element) === index;
// // });

// // console.log(uniqueArr);
// function maxarr(arr){

//     function min(){
//     let max = 0;
// let min = arr[0];
// for ( let i = 0; i <arr.length; i++){
// if(arr[i]>max){
//     max = arr[i];
//     console.log(max);
//     }

// }}

// let index = arr.indexOf(max);
// arr.splice(index , 1);
// console.log(arr);

// }


// maxarr(arr);


// HCM/GCD
// function gretestcomon(a,b){
//  let smaller = Math.min(a,b);
//  let hcf =1;
//  for(i=1;i<=smaller;i++){
//     if(a%i==0 && b%i==0){
//         hcf = i;
//     }
//  }
//  return hcf;
// }
// console.log(gretestcomon(6,12));



// check string Anagram or not

// function anagram(str1,str2){
//     let Objstr1 ={};
//     if(str1.length!=str2.length){
//         return false;
//     }
//     for(let ch of str1){
//         Objstr1[ch] = (Objstr1[ch]||0)+1;
//     }
// for(let ch of str2){
// if(!Objstr1[ch]){
//     return false;
// }
// Objstr1[ch]--
// }
// return true;
// }
// console.log(anagram("hello","ehlol"));


