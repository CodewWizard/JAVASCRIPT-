// Async/Awaitn in JS
// Async returns promise
// Await handles program asynchronusly
console.log("Tutorial No 30");

async function baby() {
    console.log("Inside baby function");
    const response = await fetch('vegi.json');
    console.log("Before response");
    const users = await response.json();
    console.log("Users Resoloved");
    return users;
    // return "Baby";
}

console.log("Before Calling Baby");
let obj = baby();
console.log("After Calling Baby");
console.log(obj);
obj.then((data) => console.log(data));
console.log("Last line of JS file");
