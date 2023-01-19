console.log("AJAX");


// to add setTimeOut we can make code Asynchronus
setTimeout(() => {
    for (let index = 0; index < 10; index++) {
        // const element = index;
        console.log("index " + index);
    }
}, 100);

console.log("Done");