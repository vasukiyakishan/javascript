// console.log(typeof(NaN));

// q-2: find the first non-repeating character in String

// let instr ='aagcddeeefchcgg';
// const findfirstch = (str) =>{
//     let charmap = {};
//     for(let char of str){
//         charmap[char] = (charmap[char] || 0) + 1;
//     }

// for(let i=0; i<=str.length; i++){
// if(charmap[str[i]] === 1){
//     return str[i];
// }
// }
// }

// console.log(findfirstch(instr));



// q:3 find the last non-repeating character in String
let instr ="aagcddeeefchcgg";
const findlastch =(str) =>{
    let charmap ={};
    for(let char of str){
        charmap[char] = (charmap[char] || 0) + 1;

    }

    for(i=str.length-1; i>=0; i--){
        if(charmap[str[i]] === 1){
            return str[i];
        }
    }
    
}

console.log(findlastch(instr));