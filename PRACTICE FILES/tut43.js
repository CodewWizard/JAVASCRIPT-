// Symbols in JS
console.log('Tutorial No 43');

// Symbols are primitive
const symb = Symbol('My identifier'); //these two symbols are unique from each other
const symb2 = Symbol('My identifier');
console.log('Symbol is:', symb);
console.log('Symbol is:', symb2);
console.log(symb === symb2);
console.log(typeof symb);


const var1 = 'maddy';
const var2 = 'maddy';
console.log(var1 === var2);
console.log(null === null);
console.log(undefined === undefined);

const k1 = Symbol('Identifier for k1');
const k2 = Symbol('For k2');

let obj = {};
obj[k1] = "Maddy";
obj[k2] = "Harsh";
obj["name"] = "baby";
console.log(obj);
console.log(obj[k1]);
console.log(obj[k2]);
console.log(obj.name);

// Symbols are ignored in for-in loop
for(key in obj){
    console.log(key, obj[key]);
}

// Symbols are ignored in json.stringify
console.log(JSON.stringify(obj));