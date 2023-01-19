// Destructuring in JS
console.log('Tutorial No 44');

// let a, b;
// [a, b] = [34, 65];
// console.log(a, b);

// [a, b, c, ...d] = [1,2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(a,b,c,d);

// Array Destructuring
// ({a, b, c, ...d} = {a:2, b:4, c:8, d:7, e:0});
// console.log(a, b, c, d);


// const fruits = ['Apple', 'Banana', 'Mango'];
// [a, b, c] = frits;
// console.log(a, b,u c);


// Object Destructuring
laptop = {
    model:"Lenovo i5",
    age : 1,
    net:1234,
    start : function(){
        console.log('Started');
    }
};

const {model, age, net, start} = laptop
console.log(model, age, net, start);
start();