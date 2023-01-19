// Loops
// For Loop

// let i = 0;
// while (i < 10) {
//   console.log(i + 1);
//   if(i===5){
//       break;
//   }
//   i++;
// }
// continue continues the loop iteration without executing further stmts

// let k = 0;
// do {
//   if (k === 5) {
//     k++;
//     continue;//iske bad skip
//   }
//   console.log(k);
//   k++;
// } while (k < 10);

// ForEach

let arr = [2,3,5,6,2,1,8];
arr.forEach(function(element, index, array) {
    console.log(element, index, array);
});

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element);    
// }

// Object iteration

let obj = {
    Name:`Baby`,
    Age:19,
    Profession:`Developer`,
    Love:`ME:)`
}
// for(let key in obj){
//     console.log(key +' : '+obj[key]);
// }

// for(let k in obj){
//     console.log(`${k} : ${obj[k]}`);
// }   


console.log(`done!`);
