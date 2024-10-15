// Converting Strings to Numbers
// Converting Numbers to Strings
// Converting Dates to Numbers
// Converting Numbers to Dates
// Converting Booleans to Numbers
// // Converting Numbers to Booleans

// 1 String to Numbers
// Converting Strings to Numbers
// The global method Number() converts a variable (or a value) into a number.
// A numeric string (like "3.14") converts to a number (like 3.14).
// An empty string (like "") converts to 0.
// A non numeric string (like "John") converts to NaN (Not a Number).

// console.log(Number("122.22"));
// console.log(Number(""));
// console.log(Number("kishan"));
// console.log(Number("152 5154"));


// Number Methods
// In the chapter Number Methods, you will find more methods that can be used to convert strings to numbers:

// Method	Description
// Number()	Returns a number, converted from its argument
// parseFloat()	Parses a string and returns a floating point number
// parseInt()	Parses a string and returns an integer

// console.log(parseFloat("dlkjd"));
// console.log(parseFloat("522.23"));
// console.log(parseInt("23232.656"));
// console.log(parseFloat("12"));

// The Unary + Operator
// The unary + operator can be used to convert a variable to a number:

// let a="5";
// let b =+a;
// console.log(b);

// let x ="kishan";
// let y =+x;
// console.log(y);




// 2
// Converting Numbers to Strings
// The global method String() can convert numbers to strings.

// It can be used on any type of numbers, literals, variables, or expressions:
// let x = 125;
// console.log(String(x));
// console.log(String(1233));

// The Number method toString() does the same.
// console.log(x.toString());
// console.log((123).toString());

// More Methods
// In the chapter Number Methods, you will find more methods that can be used to convert numbers to strings:

// Method	Description
// toExponential()	Returns a string, with a number rounded and written using exponential notation.
// toFixed()	Returns a string, with a number rounded and written with a specified number of decimals.
// toPrecision()	Returns a string, with a number written with a specified length

// console.log((5511).toExponential());
// console.log((1512).toFixed());
// console.log((66565).toPrecision());

// Converting Dates to Numbers
// The global method Number() can be used to convert dates to numbers

// d = new Date();
// console.log(Number(d));

// The date method getTime() does the same.
// d = new Date()

// console.log(d.getTime());

