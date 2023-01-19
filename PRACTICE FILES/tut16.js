// local ans session storage
console.log("Tutorial 16");
let arr = ['Apple', 'Banana', 'Strawberry'];

// //Add d key-value pair inside local storage4 
// localStorage.setItem(`Name`, `Harsh`);
// localStorage.setItem(`Name2`, `Madiha`);
// localStorage.setItem(`Fruits`, JSON.stringify(arr));

// // To clear the local storage
// // localStorage.clear();

// // Get Item from local storage

// console.log(localStorage.getItem('Name'));
// console.log(localStorage.getItem('Name2'));
// let f = JSON.parse(localStorage.getItem('Fruits'));
// console.log(f);

//Length of local storage
// console.log(localStorage.length);

// Remove Item
// console.log(localStorage.removeItem('Name'));
// console.log(localStorage.getItem('Name'));

// Session Storage
sessionStorage.setItem(`sessionName`, `sHarsh`);
sessionStorage.setItem(`sessionName2`, `sMadiha`);
sessionStorage.setItem(`sessionFruits`, JSON.stringify(arr));