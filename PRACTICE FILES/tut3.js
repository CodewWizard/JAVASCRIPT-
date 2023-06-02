/* Variables in JS
two types of JS
1. Primitive data type(Stored in stack//static )//based
2. Reference data type(stored in heap//dynamic)//objects

Primitives:
  -String
  -Numbers
  -Boolean
  -Null
  -Undefined
  -Symbol

References:
  -Arrays
  -Objects
  -Functions
  -Dates

*/

// String
let name = `maddy`;
console.log("My String is: "+name);
console.log("Data type is: "+(typeof name));

// Number
let no = 25;
console.log("My No is: "+no);
console.log("Data Type is: "+(typeof no));

// Boolean
let isDriver = true;
// console.log("My No is: "+no);
console.log("Data Type is: "+(typeof isDriver));

// Null
let nullVar = null;
// console.log("My No is: "+no);
console.log("Data Type is: "+(typeof nullVar));

// Undefined
let undef = undefined;
// console.log("My No is: "+no);
console.log("Data Type is: "+(typeof undef));

// References

//Arrays 
let myArr = [1, 2, 3, 4, 5, `string`,true];
console.log("Data Type is: "+(typeof myArr));

// Objects
let marks = {
    demo:100,
    me:0
}
console.log(marks);
console.log(typeof marks);


// functions

function findName() {
    
}
console.log(typeof findName);

let date = new Date();
console.log(typeof date);
