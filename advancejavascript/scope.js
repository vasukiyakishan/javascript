
// let a = 100;
// {//TDZ (temparary dead zone)
//     const say =() =>{
//         console.log(msg);
//     }
//     let msg = "hello";
//     say();
// }
// {
 
// //     console.log(a);
// // let a =10;
// }

// {
//    let a=20;

//     console.log(a);

// }

// console.log(a);
// Deleting array element
// let arr =["jkd","kskd","dkkd"];
// delete arr[1];
// console.log(arr);
// console.log(arr.length);


// Variable Shadowing
// let x =10;// shadowed variable
// {
//     let x =12;
//     console.log(x);
// }


// var
//  let c =10;
//  {
//     let a = 20;
//     console.log(a);
//  }
//  {
//     var a = 2000;
//     console.log(a);
//  }

//  console.log(a);

// var are hoisted so they can used before the declaration
// l = 20;
// console.log(l);
// var l;


// most imp diffrence between let and var

// for( let i=0; i<5; i++){
// setTimeout(
//     () =>console.log(i),1000
// )
// }

// for(var i=0; i<5; i++){
//     setTimeout(
//         () =>console.log(i),1000
//     )
// }



// module scope
let a =20;
console.log(a);
var b =20;

function say(){
    console.log('say');
}