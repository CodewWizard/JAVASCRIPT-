// Async/Awaitn in JS
// Async returns promise
// Await handles program asynchronusly
console.log("Tutorial No 30");

async function demo() {
    console.log("Inside demo function");
    const response = await fetch('vegi.json');
    console.log("Before response");
    const users = await response.json();
    console.log("Users Resoloved");
    return users;
    // return "demo";
}

console.log("Before Calling demo");
let obj = demo();
console.log("After Calling demo");
console.log(obj);
obj.then((data) => console.log(data));
console.log("Last line of JS file");
