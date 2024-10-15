console.log(document.cookie)
document.cookie="name=hello1253"
document.cookie="name2=jajdsj123"
document.cookie="name=djkhd"
let key = prompt("enter key ")
let value = prompt("enter your value")
document.cookie=`${encodeURIComponent(key)}=${encodeURIComponent(value)}`
console.log(document.cookie)