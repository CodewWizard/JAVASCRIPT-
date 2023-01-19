// Try Catch in JS
console.log("Tutorial No 31");
let a = 1;
if(a == undefined){
    // Custom throw
    throw new Error('This is Undefined');
}
else{
    console.log('This is Defined');
}

try {
    console.log('Inside try block');
    functionmaddy();
    // null.console
    console.log('Inside try second block');

} catch (error) {
    console.log('Inside Catch Block');
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}
finally {
    console.log('Finally We will run this');
}