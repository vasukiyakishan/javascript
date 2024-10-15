// sharyis qution 1  
// let x = "jaydip kaise ho";
// var y = x.split(' ').map(
// (word) =>{
//     return word.split('').reverse().join('');
// }
// )

// console.log(y.join(''));
    

// quetion 2

//  function checkArray(element){
//     return Array.isArray(element);
// }

// console.log(checkArray(1));


// quetion 3
// var arr = [1,2,34,5,5];
// console.log(arr.length = 0);

// quetion 4 given number is integer or not not use isinteser method

// function checkinteger(a){
//     if(a%1 === 0){
//         console.log("given number is  integer");
//     }
//     else{
//         console.log("given number is not integer");
//     }
// }

// console.log(checkinteger(256.25));


// quetion 5  duplicate[1,2,3,4,5]  in [1,2,3,4,5,1,2,3,4,5]

// function duplicate(array){
//     return array.concat(array);
// }

// console.log(duplicate([1,2,3,4,5]));




// quetion 6 write a javascript function to clone an array

// method 1
// function clon(arr){
//     return[...arr]
// }

// console.log(clon([1,2,3,4]));

// method 2

// function clon(arr){
//     var newarr = [];
// arr.forEach(element => {
//     return newarr.push(element);
// });
// return newarr;
// }
// console.log(clon([1,2,3,4,5,6]));

// method 3 

// function clon(arr){
//  var newarr  =   arr.map(function(element){
//         return element;
//     })
//     return newarr;
// }
// console.log(clon([1,5,6,7,8]));



// quetion 7 function which accepts an argument and returns the type 

// function retn(elem){
//     return typeof (elem);
// }
// console.log(retn([]));
// console.log(retn(12));
// console.log(retn(12.5));
// console.log(retn(true));



// Quetion 8 function to get the first element of an Array. passing a parameter 'n' will return the first 'n' elemetnts of the array
// function retrive(arr,n=1){
//     if(n<arr.length){
//         for(i=0; i<n; i++){
//             console.log(arr[i]);
//         }
//     }
// }
// console.log(retrive([1,2,3,4,5,6],3));



// Quetion9 function to get the lat element of an Array. passing a parameter 'n' will return the first 'n' elementns of the array
//   function retrive(arr,n=1){
//     if(n<arr.length){
//         for(i=0; i<n; i++){
//             console.log(arr[arr.length-1-i]);
//         }
//     }
// }
// console.log(retrive([1,2,3,4,5,6],5));



// Quetion10 program to find the most frequent[shavthi vadhare var aavel item] item of an array
// function freq(arr){
//     var freqN ={};
//     arr.forEach(element => {
//         if(freqN.hasOwnProperty(element)) {
//             freqN[element]++;
//         } 
//         else{
//             freqN[element] = 1;
//         }
   
//     })
// var ans = Object.keys(freqN).reduce(function( acc ,num){
//     return freqN[acc] > freq(num) ? acc :num;
// })
// console.log(ans);
// }

// console.log(freq([1,1,2,2,4,5,4,5,7,4,4,5,4]));

