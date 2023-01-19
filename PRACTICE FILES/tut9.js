// Functions in JS
// function greet(nameArgu, thank = ` Thank You`) {
//     console.log(`HAPPY B'DAY ` + `${nameArgu}` + `${thank}`);
//     return nameArgu;
// }

// // let name = prompt("Enter Name: ");
// let val = greet(prompt("Name:"), `! Thanks A Lot`);
// console.log(val);

// ********************************************

// function greet1(nameArgu1, thank1 = ` Thank You`) {
//     let msg = `HAPPY B'DAY ` + `${nameArgu1}` + `${thank1}`;
//     return msg;
// }

// // let name = prompt("Enter Name: ");
// let val1 = greet1(prompt("Name:"), `! Thanks A Lot`);
// console.log(val1);

// **************************************

// let myFun = function(nameArgu, thank = ` Thank You`) {
//     console.log(`HAPPY B'DAY ` + `${nameArgu}` + `${thank}`);
//     return nameArgu;
// }

// // let name = prompt("Enter Name: ");
// let val = myFun(prompt("Name:"), `! Thanks A Lot`);
// console.log(val);

// ***************************************

// let obj = {
//     name: `Baby`,
//     Love:function() {
//         return `Madiha`;
//     }
// }

// console.log(obj.Love());

// *****************************************

// let arr = [`fruit`, `Virat`, `Baby`];
// arr.forEach(function(element, index, array) {
//     console.log(element, index, array);
// });

//Scopes in JS

var i = 10;
function scope() {
    var i = 20;
    console.log(i)
}
scope();
console.log(i)