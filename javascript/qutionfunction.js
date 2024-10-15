// quetion 1 reverse a number

// function revarse(number){
//     return Number(number.toString().split('').reverse().join(''));
// }

// console.log(revarse(1235));

// method two

// function revarsekaro(num) {
//    var y = 0;

//     while(num>0){
//         var rem = num%10;
//         y = y*10 +rem;
//      num = Math.floor(num/10);
//     }
//     return y;
// }
// console.log(revarsekaro(12000));
// console.log(revarsekaro(1546));

// quetion 2 check passed string is palindrome or not

// function reversestr(strs){
//     var rev = strs.split("").reverse().join("");
//     if(rev === strs){
//         console.log("given string is palidrome string");
//     }else{
//         console.log("given string is no polidrom");
//     }
// }

// console.log(reversestr("hoo"));



// quetion3 returns a paased strig with letters in alphabetical order

// function order(str){
// return str.split("").sort().join('');
// }

// console.log(order("slkieu ld")); 


// quetion4 function that accepts a string as a parameter and converts the first letter of each word of the string in upper case
// function firstlat(str){
//    var alword = str.split(' ').map(function (word){
// return    word.charAt(0).toUpperCase() + word.substring(1);
//     })
// console.log(alword);
// }

// console.log(firstlat("hello ldkj d"));

// function first(str){
//    var alword = str.split(' ').map(function (word){
//       return  word.charAt(0).toUpperCase() + word.substring(1);
//     })
//     console.log(alword);
// }

// console.log(first("helo gujarat"));




// quetion 5 function to get the number of occurrences of each letter in specified string


// function occ(str){
//     var occurrence = {};
//     str.split('').forEach(element => {
//         if(occurrence.hasOwnProperty(element)===false){
//             occurrence[element] = 1;
//         }
//         else{
//             occurrence[element]++;
//         }
//     });

//     console.log(occurrence);
// }

// console.log(occ("askjdaaaka ka"));