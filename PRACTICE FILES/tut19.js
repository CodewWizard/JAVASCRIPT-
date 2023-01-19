// Date Object
console.log("Tutorial 19")

let today = new Date();
let otherDate = new Date('11-29-2003');
 otherDate = new Date('Nov 29 2003');
 otherDate = new Date('Nov 29 2003 04:54:08:05')
// console.log(typeof today);
console.log(otherDate)
let a;
a = otherDate.getDay();
a = otherDate.getDate();
a = otherDate.getMinutes();
a = otherDate.getDay();
a = otherDate.getSeconds();
a = otherDate.getHours();
a = otherDate.getTime();
a = otherDate.getMilliseconds();
a = otherDate.getMonth();
console.log(a)
otherDate.setDate(30);
otherDate.setMonth(0);
otherDate.setFullYear(2002);
console.log(otherDate)