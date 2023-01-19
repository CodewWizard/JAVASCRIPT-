// Asynchronus programming in JS
// Few ways to write Asynchronus code in JS
// 1. Async/Await
// 2. Callbacks
// 3. Promises

//Ajax helps in fetching data asynchronously without interfering existing page
//No relaod
// Asynchronus programming allows you to do multiple things at a time
// with the help of set timeout synchronus code convert in Asynchronus code 
// without reloading we can access the portal immediately
console.log("Tutorial No 24");
setTimeout(()=>{
for (let index = 0; index <= 10; index++) {
    // const element = array[index];
    console.log("Index Number:" +index);
    }
},2000);

console.log("Done printing");