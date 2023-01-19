// Type conversion and type coercion

// convert number into String
let myVar = 25;
console.log(myVar);
myVar = String(25);
console.log(typeof myVar)

// convert Boolean into String
let BoolVar = true;
console.log(BoolVar);
BoolVar = String(true);
console.log(typeof BoolVar);

// convert Date into String
let date = new Date();
// date = String();
console.log(date, (typeof date));

// convert array into String
let arr = [1, 2, 3, 4];
arr = String([1, 2, 3, 4]);
console.log(arr, (typeof arr));
console.log(arr.length);

let ex = 3;
console.log(ex.toString());//color white
console.log(ex);//color voilet

// covert String in to Number
// NaN - Not a number
let str = Number(`12334d`);
console.log(str, (typeof str));
let str1 = Number(`12334`);
console.log(str1, (typeof str1));

let no = parseInt(`12`);
console.log(no, (typeof no));

let flot = parseFloat(`12.33456`);
console.log(flot, (typeof flot));
console.log(flot.toFixed(2), (typeof flot));

// Type Coercion

let strr = `56`;
strr = Number(`56`);
let num = 12;
console.log(num + strr);