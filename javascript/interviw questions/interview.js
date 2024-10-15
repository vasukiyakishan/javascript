let a =3;
let b = new Number(3)
let c= 3;

console.log(a==b);
console.log(a===b);
console.log(a===c);


const obj ={
    name:'Alice',
    getName:function(){
        return this.name;
    }
}
const getName = obj.getName;
console.log(getName);