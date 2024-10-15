//1
// let a=[];
// let b=[];
// console.log(a==b);//false
// console.log(a===b);//false

//2
// let a =[];
// let b =a;
// console.log(a==b);true
// console.log(a===b);//true 

//3
// let a =[20];
// let b =[20];
// console.log(a[0]==b[0]);
// console.log(a[0]===b[0]);

//4
// let a =[10];
// let b =['10'];
// console.log(a[0]==b[0]);//true
// console.log(a[0]===b[0]);//false

//5
// let z=[1,2,3,4];
// console.log(...z);

// 6
// console.log(typeof(NaN));//number

//7
// console.log('JDHKS DL'/2);//NaN

//8
// let data = 10 - - 10; 
// console.log(data);//out 20

//9
//set remove the duplicate element
// const set = new Set([1,2,2,3,4,5,6,5]);
// console.log(set);

//10
// let a ={name:10, num:30};
// console.log(delete a.num);//true
// console.log(a);//{naem:10}

//11
// let a ={name:10,num:30};
// console.log(delete a);// direct data ko delete nahi karsakte but property ko delete kar sakte he return false

//12
// const data =['peter','anil','sam'];
// const [y] = data;
// console.log(y);//peter

//13
// const data = ['peter','anil','sam'];
// const [,y] = data;
// console.log(y);//out anil

// 14 how to get property in object without . operator
// const data = {name:'kishan',age:21,skill:25};
// const {name} = data;
// console.log(name);//kishan

//15
// merge two array
// let data ={name:'kishan',age:29,skill:'js'};
// let info ={city:'noida',mail:"vasukiya_16"};
// newdata ={...data,...info};
// console.log(newdata); 


// 16
// let data ={name:'kishan',age:29,skill:'js'};
// let info ={city:'noida',mail:"vasukiya_16"};
// newdata ={data,...info};
// console.log(newdata); 

// 17
// let data ={name:'kishan',age:29,skill:'js'};
// let info ={city:'noida',mail:"vasukiya_16", skill:'html'};
// newdata ={...data,...info};
// console.log(newdata); 

// 18
// console.log(5>'15'<5);
// console.log(1>2>3>4);
// console.log(1>2>4>-1);
// console.log(5>'25');
// console.log('25'>5);

//19
// sum of array Element
// function sum(arr){
//     let su = 0;
    
//     for(let i=1; i<= arr.length; i++){
//       su += [i];
//     }
//    return su
// }
// console.log(sum([120,15,0,8,5,6]));

//20 year is leap or not
// function isleapyear(year){
    
//     if(year % 4==0){

//         if(year%100==0){

//             if(year % 400==0){

//                 return true;
//             }else{
//                 return false;
//             }
      
//         }else{
//             return true;
//         }


//     }else{
//         return false;
//     }
// }
// console.log(isleapyear(2025));


//18 count the number of vowels in string

// let str = "hellogujarat";
// let vowelscount = 0;
// let vowels = 'aeiouAEIOU';
// for(i=0; i<str.length; i++){
//     for(j=0;j<=vowels.length;j++){
//         if(str[i]==vowels[j]){
//             vowelscount++;
//         }
//     }
// }
// console.log(vowelscount);


// 19
// chek num is even or odd
// let num = 5;
// if(num %2 == 0){
// console.log("even");
// }else {
//     console.log("odd");
// }

//21 find the length of string and count space
// function lengthof(str){
//     let count = 0;
//    for(i=0; i<str.length; i++){
//     if(i != " "){
//         count++;
//     }

//    }
//    return count;
// }
// console.log(lengthof("helllo dkj"));

//22 concate two string;
// let str ="kishan";
// let st="vasukiya";
// let con = str + st;
// console.log(con);

// // //23 bubble shorte on an array;//time complexity is O(n^2)
// function bubblesort(arr){
    
//     for(let i=0; i<arr.length; i++){
//         for(let j=0; j<arr.length-1; j++){
//             if(arr[j]>arr[j+1]){
//                const  temp=arr[j];
//                   arr[j]=arr[j+1];
//                   arr[j+1] =temp;

//             }
//         }
//     }
//     return arr;
// }

// console.log(bubblesort([1,2,40,5,8,6]));
// console.log('hello');


//24
// selection sort // Time complexity = O(n^2)
// function selection(arr){
//     for(i=0; i<arr.length-1; i++){
//         let min = i;
//      for(j=i+1;j<arr.length;j++){
//         if(arr[i]>arr[j]){
//             const temp =arr[j];
//             arr[j]=arr[i];
//             arr[i]=temp;
//         }
//      }
//     }
//     return arr;
// }
// console.log(selection([1,2,3,8,555,2,4,6958]));


//25
//queck sort // Time complexity in avrage or best case O(n*log(n)) and in worst case O(n^2)

// function queck(arr){
//     let v = arr[0];
//     let p = arr[1];
//     let q = arr[arr.length];
//     for(i=0; i<arr.length;i++){

//     }
// }

//26
// let x =5;
// let y = x++;
// console.log(x,y);

//27
// console.log(Number(''));
// console.log(parseInt(''));
// console.log(Number('7*3'));
// console.log(parseInt('7*3'));


//28
// const obj = {a:"apple"};
// ({x:obj['a']} = {x:'orange'});//jyare aapne javascript ma koy line nu starting koy karli bracket dvara karvama aave tyare javascript ek scop banave se je paramane  = valid nathi

// console.log(obj);


// //29
// var name = 2024;
// console.log(name + 1);

// 30
// var x = 10;
// function one(){
//     console.log(x);
//     function two(){
//         console.log(x);
//     }
//     two();
//     var x=20;
// }
// one();//out undefined undefined

//31
// given string is palindrome or not

// const palindrome=(str)=>{
// str = str.toLowerCase().replace(/\W/g,"");
// let new_str = str.split("").reverse().join('');
// console.log(new_str);
// return str === new_str ? true :false;

// }
// console.log(palindrome("A man, A plan, a canal,Panama"));



//32
// find the maximum numer in aray
// function maxarr(arr){
//     let max = [];
//     for(i=0;i<=arr.length;i++){
//         if(max<arr[i]){
//            max = arr[i];
//         }
//     }
//      console.log(max);
// }
// console.log(maxarr([100,200,5,800,6,090550]));

// another method throw
// function maxarr(arr){
// return Math.max(...arr);
// }
// console.log(maxarr([2,5,8,60,9,10,25]));

//33 find factorial of given number
// function factorial(n){
//     let fac = 1;
//     for(let i=1;i<=n;i++){
//         fac= fac*i;
//     }
//     return fac;
// }
// console.log(factorial(6));

//34 average of given number
// function average(arr){
//     let total = arr.reduce((acum,elem)=>acum+elem,0);
// console.log(total);
// return total / arr.length;
// }
// console.log(average([1,2,3]));

//35 
// function arrequal(arr1,arr2){
//     if(arr1.length !== arr2.length){
//         return false;
//     }
//     return arr1.every((curvale,index)=>curvale === arr2[index]);
        
    
// }
// console.log(arrequal([1,2,5,6,8],[9,5,26,8]));
// console.log(arrequal([1,2,3],[1,2,3]));

//36 sum given number
// function sum(num){
//     let arr = Array.from(String(num),Number);
// console.log(arr);
//   let total =  arr.reduce((acume,ele)=>
//     acume+ele); 
//   console.log(total);
   
// }

// console.log(sum(123568));


//another method
// 


// 37
// write a function that takes an array of integers as input and removes any duplicate elements,returning a new array with only the unique element

// const removeduplicat = (arr) =>{
//     let newarr = [...new Set(arr)]
    
//     return newarr;

// }
// console.log(removeduplicat([1,2,5,6,6,6,,8,5,55,]));


// 38
// count vowels in given string

// const countvowel = (str) =>{
//     let vowels =['a','e','i','o','u'];
//     let arr = str.split('');
//     console.log(arr);

//     let count =0;
//     for(let chr of arr){
//         if(vowels.includes(chr.toLowerCase())){
//             count++;
//         }
//     }
// return count;
// }

// console.log(countvowel("hello gujarat"));


//38
// const qureoftwo = (num) =>{
//     let qu= false
//     for(let i=1; i<=num; i++){
//         if(2**i===num){
//             qu= true
//         }
//     }
//    return qu
// }

// console.log(qureoftwo(8));


//39
// const sumofqure = (arr) =>{
//     return arr.reduce((accume,curele)=>(accume=accume+curele*curele),0)
// };
// console.log(sumofqure([1,2,5,6,8,7,5,9]));
// console.log(sumofqure([1,2,4]));

// onother method
// const sumofqure = (arr) =>{
//     let sum =0;
//     for(let lem of arr){
//         sum = sum +(lem*lem);
//     }
// return sum
// }

// console.log(sumofqure([1,2,3,5,9,8,7]));
// console.log(sumofqure([1,2,4]));


//40
// mimum value in array
// const minarr = (arr) =>{
//     let min = arr[0]
//     for(let i =0; i<=arr.length;i++){
//         if(min>arr[i]){
//             min = arr[i];
//         }
//     }
//     return min
// }
// console.log(minarr([5,8,3,5,8]));
// console.log(minarr([4,8,-9,-6,2]));
// console.log(minarr([]))

// onother method
// const findmin = (arr) =>{
//     arr= arr.sort((a,b)=>{
// if(b>a) return -1;
//     } )
//     return arr[0];
// }
// console.log(findmin([5,2,8,3,5,5,47]));
// console.log(findmin([4,8,9,6,4,1,25,57,12,1,0]))



//41
// const findmin =(arr) =>{
// if(arr.length === 0) return " undefinde"
// return Math.min(...arr);
// }
// console.log(findmin([12,4,5,68,23,41,7]));
// console.log(findmin([0,4,5,2,6,7,8,44,]));
// console.log(findmin([]));


// write a function to convert string to camelcase

// const camlecase = (str) =>{
//     str = str.trim().split(" ");
    
//     str = str.map((elem,index) =>{
//         if(index === 0){
//             return elem.toLowerCase();
//         }else{
//             return elem.charAt(0).toUpperCase()+elem.slice(1).toLowerCase();
//         }
//     })
//     console.log(str);
//     return str.join("");
   
// }

// console.log(camlecase("  hello gujarat ahemdabad  "));

// trim method removes whitespace from both side of string


// write function convert string in to the camle case to snake case

// let camelcase = "vasukiyaKishanMansukhbhai";
// let snakecase = camelcase.replace(/([a-z])([A-Z])/g,'$s1_$s2').toLowerCase();
// console.log(snakecase);

// / Uppercase or not

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

//44 given string start with specific substring 

// const startwith = (str,substr) => {
// return str.toLowerCase().startsWith(substr.toLowerCase());
// };
// console.log(startwith("Hello world","hello"));
// console.log(startwith("Hello world","world"));


// other method
// const startwith = (str,substr) =>{
//     str = str.toLowerCase().slice(0,substr.length);
//     substr = substr.toLowerCase()
//     if(str === substr){
//         return true;
//     }
//     return false
// }

// console.log(startwith("Hello worlsd","hello"));
// console.log(startwith("Hello world","world"));


//45 reverse string without using built-in method and librarise

// const reversestr = (str) =>{
//     let stri ="";
//     for(i=str.length; i>=0; i--){
//         stri =stri+ str[i];
            
//         }
//         return stri
//     }
// console.log(reversestr("hellow gujarat"));


// 46  find the mean
// const meanarr =(arr) =>{
// let sum = arr.reduce((accume,elem) =>
// (accume + elem),0
// );
// sum =sum/arr.length;
// console.log(sum);
// }

// console.log(meanarr([1,2,3,4]));
// console.log(meanarr([1,2,3,-4,5,-2]));


// 47 median 
// => sort the array in asending order 
// =>if the arr has odd number of element ,then median is midele element
// => if the arr has even number of element, the median is avarage of two middle element

// const median = (arr) =>{
//     let larr=arr.sort((a,b)=>{a-b});// most imp
  
 

//     let langeth = arr.length;
//     let mid = Math.floor(langeth/2);
//     if(langeth%2===0){
//         return arr[mid] +arr[mid-1]/2;
//     }
//     else{
//         return arr[mid];
//     }
    
// }

// console.log(median([1,5,2,6,8,9,11]));
// console.log(median([2,5,6,8,9,6,2,5,4,4,8]));



//48 count number of element in array
// const countnum = (arr) =>{
//     let count ={};
//     for(let ele of arr){
//         count[ele] = (count[ele]||0) + 1;
//     }
//     console.log(count);
// }
// console.log(countnum([1,1,2,2,3,5,5,6,9,9,5,5,4]));


//49 find the mode of given arr

// function find(arr){
//     let count ={};
//     let maxele =0;
//     for(let ele of arr){
//         count[ele] = (count[ele] || 0) + 1;
//         if(count[ele]>maxele){
//             maxele = count[ele];
//             mode = ele;  
//         }    
//     }
//     return mode;
// }
// console.log(find([1,2,1,2,3,5,5,5,6]));
// console.log(find([1,2,2,3,1,4,2]));


// const facto = (num) =>{
//     if(num===1){
//         return 1
//     }else{
//     return num*facto(num-1);
//     }
// }
// console.log(facto(5));

// const facto = (num) =>{
//     if(num===1){
//         return 1
//     }else{

//     }
// }



//51 baki 
// const reapet =(str,num)=>{
//     for(let i=1; i<=num; i++){
//    console.log( str.split('').reverse().join(''));
// }
// }
// console.log(reapet("kishan",2));

//other method
// function rea(str,num){
//     return num>0?str.repeat(num) : str;
// }
// console.log(rea("kishan",5));
// console.log(rea("kishan",0));
// console.log(rea());

//52 write function called truncating the string and take two argument 
// function trunca(str,num){
// return str.slice(0,num).concat("...");
// }
// console.log(trunca("hello gujarat how are you",5))



//53
// var d = new Date();
// var time = d.getHours();

// if (time < 12) {
//   console.log("<b>Good morning!</b>");
// }
// if (time > 12) {
//   console.log("<b>Good afternoon!</b>");
// }
// if (time == 12) {
//   console.log("<b>Go eat lunch!</b>");
// }


// 54 
// function  numberrange(num1,num2){
//     let arr = [];
   
//     if(num2>num1){
//     for(let i=num1;i<=num2;i++){
    
//       arr.push(i);
      
//     }
// console.log(arr);
// }
//     else{
     
//         for(let j=num2;j<=num1;j++){
          
//            arr.push(j);
//     }
//     console.log(arr);
// }


// }
// numberrange(0,5);
// numberrange(5,10);
// numberrange(7,2);



//other
// function  numrange(a,b){
//      arr =[];
//     while(a<=b){
//         arr.push(a);
//         a++;
//     }
  
//     return arr;
// }
// console.log(numrange(2,5));
// console.log(numrange(5,1));
// console.log(numrange(-3,5));

//other method using recursion 
// const numberrange =(a,b,arr=[]) =>{
//     if(a<=b){
//       arr.push(a);
//         return numberrange(a+1,b,arr);
//     }
//     return arr
// }
// console.log(numberrange(0,5));
// console.log(numberrange(6,8));


//56
// password is valid or not
// function passworvalid(password){
//     let haslower =false;
//     let hasuper = false;
//     let hasnumber = false;
//     for(let ele of password){
//         if(ele.charCodeAt(0)>=65 && ele.charCodeAt(0)<=90){
//             hasuper =true;
//         }else if(ele.charCodeAt>=97 && ele.charCodeAt(0)<=122){
//             haslower = true;
//         }else if(!isNaN(Number(ele))){
//          hasnumber =true;   
//         }
//     }

//     if(!haslower||!hasuper||!hasnumber||password.length<8){
//         return false;
//     }
    
//         return ture;

// };

// console.log(passworvalid("afkdsfadsf1A"));



// 57 get randum hexadecimal number
// const ranhexa = () =>{
//     return `#${Math.random().toString().slice(2,0).padEnd(6,0)}`;
// }
// console.log(ranhexa());

//58 remove duplicat ele

// function ramdup(arr){
//    return [...new Set(arr)];
// }
// console.log(ramdup([12,1,2,55,6,2,2,4,,7,5,8,5,2]));

//59 count element in array
// const countele = (arr)=>{
// let count ={};
// for(let ele of arr){
//     count[ele] = (count[ele]||0)+1;
// }
// return count;
// }
// console.log(countele([1,1,2,2,3,5,2,2,1,5,,55,5,2,2,2,5,]));