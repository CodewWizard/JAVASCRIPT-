console.log('ASYNCHRONOUS');


setTimeout(() => {
    myFun("hello world!")
}, 5000);

function myFun(value) {
    document.getElementById("demo").innerHTML = value;
}
