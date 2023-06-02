// For-in And For-of loop
console.log('Tutorial No 40');

let people = ['Maddy', 'demo', 'SkillF', 'Harsh', 'Virat'];
// Traditional for loop
// for (let index = 0; index < people.length; index++) {
//     const element = people[index];
//     console.log(element);
// }

// For-in Loop

obj = {
    name:"Maddy",
    language :"Javascript",
    hobbies:"Coding"
}
// console.log(obj);

// Iterating an object using traditional for loop:

// for (let index = 0; index < Object.keys(obj).length; index++) {
//     const element = obj[Object.keys(obj)[index]];
//     console.log(element);
// }

// Iterating an object using for-in loop:

for (let key in obj){
    console.log(obj[key]);
}

myString = "My string bro";
// We can use for-in with string to loop through all the characters
// for(let key in myString){
//     console.log(myString[key]);
// }

// String iterate in traditional way

// for (let index = 0; index < myString.length; index++) {
//     const element = myString[index];
//     console.log(element);
// }

// For-of loop
// used when we want to fetch keys of object
console.log('*****FOR-OF LOOP*****');

people = ['Maddy', 'demo', 'SkillF', 'Harsh', 'Virat'];

for(let name of people){
    console.log(name);
}


// String iterate in for-of loop
for(let name of myString){
    console.log(name);
}
