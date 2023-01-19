// Maps in JS
console.log('Tutorial No 41');

// Map in JS we can use any type of key or values
const myMap = new Map();

// const key1 = 'String', key2 = {}, key3 = function(){};
const key1 = 'String Baby', key2 = {name:"Maddy"}, key3 = function(){};

// Setting map values
// myMap.set(key1, 1);
myMap.set(key1, "This is String");
myMap.set(key2, "This is Blank Obj");
myMap.set(key3, {value: "This is Blank Fun"});
console.log(myMap);

// Getting the values from map
let value1 = myMap.get(key1);
let value2 = myMap.get(key2);
let value3 = myMap.get(key3);
console.log(value1);
console.log(value2);
console.log(value3);

// Get the size of map
console.log('Size: ',myMap.size);

console.log('For of loop');
// You can loop using for-of to get keys and values
for(let [key, value] of myMap){
    console.log(key, value);
}

console.log('Keys of Map');
// Get only keys
for(let key of myMap.keys()){
    console.log(key);
}

console.log('Values of Map');
// Get only values
for(let value of myMap.values()){
    console.log(value);
}

console.log('For Each Loop');
// You can loop through for each loop
myMap.forEach((value, key)=>{
    console.log('Key is:', key);
    console.log('Value is:', value);
})

console.log('Convert Map to Array');
// Converting map to array
let arr = Array.from(myMap);
console.log('Map to Array: ', arr);

// Converting map keys to array
let arrkeys = Array.from(myMap.keys());
console.log('Map to Array Keys: ', arrkeys);

// Converting map values to array
let arrValues = Array.from(myMap.values());
console.log('Map to Array Values: ', arrValues);