// Arrays and Objects

let marks = [40, 57, 76, 97, 75];
const fruits = [`Apple`, `Orange`, `Mango`];
const mixed = [`string`, 88, [1,8]];

// Second way to create Array
const arr = new Array(12, 34, `Apple`);
console.log(arr);
console.log(marks);
console.log(fruits);
console.log(mixed);
console.log(mixed[0]);

console.log(arr.length);//length is property not method
console.log(Array.isArray(marks));
arr[0] = `MADIHA`;
console.log(arr);
console.log(arr[0]);

let arrElement = arr[0]; 
console.log(arrElement);

let value = marks.indexOf(76);//index of element
console.log(value);

//Mutating Arrays

marks.push(100);//add element at end
console.log(marks);

marks.unshift(10);//add element at start
console.log(marks);

marks.pop();//remove element from end
console.log(marks);

marks.shift();//remove element from start
console.log(marks);

marks.splice(1,2);//1st argue- from which place removing 2nd argue- how many elements remove
console.log(marks);

marks.reverse();
console.log(marks);

let marks2 = [0, 0, 0];
marks = marks.concat(marks2);
console.log(marks);

// Objects

let obj = {
    'name':`Madiha`,
    demo:`Harsh`,
    isActive:true,
    marks:[1, 3, 5]
}

console.log(obj);
console.log(obj.demo);
console.log(obj.marks);
console.log(obj.isActive);
console.log(obj[`name`]);
console.log(obj[`demo`]);
