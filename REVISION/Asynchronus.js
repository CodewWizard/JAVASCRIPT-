console.log('ASYNCHRONOUS');


setTimeout(() => {
    myFun("I LOVE YOU !!")
}, 5000);

function myFun(value) {
    document.getElementById("demo").innerHTML = value;
}