// 1
// let num = 5 +'5' - 5;
// console.log(num);
// console.log(typeof(num));// 5 is convert to string "5" and "5" +"5"  =  "55"  and "55" - 5 = 50(because of we can't  substract string - number)


// 2
// let a = 5-"5";
// console.log(a);
// console.log(typeof(a));

// 3
// let a =5 +"5";
// console.log(a);
// console.log(typeof(a));


4
// let a = 5 + 5 -'5';
// console.log(a);
// console.log(typeof(a));

5
// let a = 5 + "5"
// console.log(a);
// console.log(typeof(a));

 //Rmove  null and undifind value form the object
// let obj ={
//     a:1,
//     b:null,
//     c:undefined,
//     d:'hello'
// };
// const newobj =Object.fromEntries(Object.entries(obj).filter(([_,val])=> val !=null));
// console.log(newobj);


// string is immutable in javascript so we can't change the string after the the declaration
// let str = "Hello";
// str[0] ='h';
// console.log(str);//out: Hello

// let str = "hello";
// str = "hkldj";
// console.log(str);// out hkldj

// Number is immutable in javascript
// let n = 4568;
// n[0] =54;
// console.log(n);// out 4568

// let a = 10;
// a=20;
// console.log(a);//out 20


// == operator performs type coercion if required and compare(imp example)
// let a =[1,2,3,4];
// let b =[1,2,3,4];
// let c = "1,2,3,4"
// console.log(a === b);
// console.log(a === c);

// let a={a:12,b:15};
// let b ={a:12,b:15};
// console.log(a==b)

// let a = "abc";
// let b = "abc";
// console.log(a===b);

// let a =15;
// let b = 15;
// console.log(a==b);

// === not perform type coercion and requires the operands to have the same type .

// let a = 12;
// let b = 12;
// let c ="12";
// console.log(a===b);
// console.log(a===c);



























