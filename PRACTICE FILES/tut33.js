//Functions of Regular expression in JS
console.log("Tutorial No 33");
let reg = /maddy/;
//  reg = /maddy/g;  //g flag means globally
//  reg = /maddy/i;  //i flag means case insensitive

console.log(reg);
console.log(reg.source);

//  Globally finding string
let str = "This is maddy bhai ok maddy";
//  str = "This is maddy bhai ok maddy";

//  Functions to match expression -
// 1.exex() - this will return an array fot match or null for else match

let result = reg.exec(str);
console.log(result);

// result = reg.exec(str);
// console.log(result); // we can use multiple exec() with global flag

// console.log(result.input);
// console.log(result.index);

// 2. test() - returns true or false
let result2 = reg.test(str);
console.log(result2);

// 3. match() It will return an array of results else null

let result3 = str.match(reg);
console.log(result3);

// 4.search() - returns index of first match else -1

let result4 = str.search(reg);
console.log(result4);

// 5.replace() - returns new replaced string with all the replacements. (if no global flag is given , only first match will be replaced)
let replaceRes = str.replace(reg, 'BABY');
console.log(replaceRes);