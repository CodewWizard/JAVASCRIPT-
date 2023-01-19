// Set in JS
console.log('Tutorial No 42');

// Set stores unique values
const mySet = new Set();
console.log(mySet);

// Adding values to the Set
mySet.add('this');
mySet.add('My name');
mySet.add('this'); // only one this can enter in set(does not allow duplicates)
mySet.add(23);
mySet.add(true);
mySet.add(false);
console.log('Set:',mySet);

// let set2 = new Set([1, 'Constructor', {a:4, s:5}, 1]);
// console.log(set2);

console.log('Size:', mySet.size); //get the size of set

// Methods of Set
console.log(mySet.has(23));  //Check whether set has 23 or not
console.log(mySet.has(5));

console.log('Before Removing', mySet);
mySet.delete(false); //remove the element from set
console.log('Before Removing', mySet);

// Iterating set (For od loop)
for(let item of mySet){
    console.log('Item is:', item);
}

// Iterating set (For Each loop)
mySet.forEach((item)=>{
     console.log('Item is:', item);
})

let arr = Array.from(mySet);
console.log('Convert set to array', arr);