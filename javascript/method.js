// trim method / this method remove witespace between end of the String; we can't change old string so we can say trim is immutable in js
let x = " hello ";
 c = x.trim();
 console.log(c);


//  let h = " jdkj lskl  ";
//  v = h.trim();
//  console.log(v);

//  let password = prompt("set your password");
//  password.trim();
//  console.log(password);

// toUppercase  and toLowercase
// let str = "vasukiya kishan";
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());


// indexOf method
// let str = "hell0 gujarat";
// console.log(str.indexOf("g"));



// // method chaining 
// let str =" hello gujarat " ;
// x=str.trim().toUpperCase();
// console.log(x);

// slicing 
// let str = " hellogk";

// x = str.slice(1,7);
// console.log(x);

// y = str.slice(-1);
// console.log(y);

// replace method
// let str ="hello gujarat"
// x=str.replace("gujarat","bhalgamda");
// console.log(x);.

// repeat method

// let str = "hello";
// let i = str.repeat(3);
// console.log(i);


// array is mutable and string is not mutable

// str = "kishan";
// str[0] = 's';
// console.log(str);

// array = ["kishan","jaydip","mehul"];
// array[0] = 'pako';
// console.log(array);

// array[10] = "vasukiya";
// console.log(array);


// push=add element at last of index , pop=delet element at last of index , Unshift=add element at start of index ,shift = delete element at start of index

// arr = [4,8,85,78];
// arr.push(5);
// console.log(arr);

// arr.pop();
// console.log(arr);

// array = [25,2,6,24,28,74,45];
// array.unshift("g");
// console.log(array);
// array.shift();
// console.log(array);

// let start = ['january','july', 'march', 'august'];
// start.shift();
// start.shift();
// start.unshift("june");
// // start.unshift("july");

// console.log(start);

// concat, reverse method

// let primary = ["apple","banana","orange"];
// let secondary =["hello","gujarat" ];

// x = primary.concat(secondary);
// // console.log(x);

// console.log(primary.reverse());

// slice method in array

// let arr = [1,2,3,4,5,6,7,8,9];
// console.log(arr.slice(2,4)

// );

// console.log(arr.slice(arr.length-1));

// console.log(arr.slice(10));
// console.log(arr.slice(arr.length));
// console.log(arr.slice(-5));

// splice method in array

// let arr = ["red","blue","pink","black"];
// arr.splice(0,1);
// console.log(arr);
// arr.splice(0,1,"hello","gujarat");
// console.log(arr);
// arr.splice(1,0,"bhalgamda");
// console.log(arr);


// sort method

// arr = [1,5,2,6,9,8,4,7];
// arr.sort();
// console.log(arr);


// practice

// arr = ["january",'july','march','august'];
// arr.splice(0 ,1 );
// console.log(arr);
// // arr.splice(1,0,"june");
// // console.log(arr);

// arr.splice(0,2,'july','june');
// console.log(arr);


// var arr = function(array,n){

//   return array.slice(array.length - 3);
// }
// console.log(arr([1,5,6,8,9]));

// let str = prompt('enter any string');

// if(str.length == 0){
//   console.log('string is empty');
// }
// else{
//   console.log('string is not empty');
// }



// let str = " HeLLo GujarAT";
// let idx = 3
// if(str[idx] === str[idx].toLocaleUpperCase()){
//   console.log('cha is lower');
// }
// else{
//   console.log('cha is not lower');
// }


// let arr = [1,2,3,4];
// let item = 65;

// if(arr.indexOf(65) != -1){
//   console.log('item is exist');

// }else{
//   console.log('item is not exist');
// }


// split method in javascript

// let text = "what are you doing today";
// const str = text.split("");
// console.log(str);

// let stra = "hello gujarat";
// const arr = stra.split(" ");
// console.log(arr[1]);

// let x = "my name is vasukiya kishan";
// const y = x.split("",3);
// console.log(y);
// console.log(x.split("is"));

// substr method 

// let y = "hello gujarat";
// const x = y.substr(2);

// console.log(x);

// const n = y.substr(1,2);
// console.log(n);

// isarray 

// var x = [1,5,6,7];
// console.log(Array.isArray(x));


// foreach(this method calls a function for each element in an javascript and this method not return any thing and not used for null arry)  
// let counts =[4,3,7,2,8];
// counts.forEach((item,index) => {
// console.log(item); 
// })

//  entries method(return an array containing arrays of an object's key-value pairs)

// let counts =[4,5,6,7,8,9];
// let entries = counts.entries();


// for(let [index,item] of entries){
//     console.log(index,item);
// }

// const object = {
//     a:'kishan',
//     b:42,
//     c:false
// }
// console.log("object 1",Object.entries(object));

// const obj2 ={
//     0: "a",
//     1:"b",
//     2:"c"
// }

// console.log("object 2", Object.entries(obj2));


// importnt
// const obj3 ={
//     100: 'b',
//     2:'s',
//     3:'c'
// }

// console.log("object 3", Object.entries(obj3));



// fromEntires method(this is static method transforms a list of key-value pairs into an objec)

// const arr = [[1,"kishan"],[2,"jaydip"],[3,"hldk"]];
// console.log(Object.fromEntries(arr));

// findIndex method in javascript(this mathod always use callback function) 
// let arr = [12,3,4,5,6,7,8,65];
// let res = arr.findIndex((elem)=>{
// return elem>50;
// })

// console.log(res);