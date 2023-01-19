// Creating, Removing and Replacing elements

// Creation
console.log(`tutorial 14`);
let element = document.createElement('li');
let text = document.createTextNode('i am text node');
element.appendChild(text);
element.className= 'childUL';
element.id = 'createdLI';
element.setAttribute('title','MyTitle')
// element.innerHTML = '<b> Hello, created by maddy </b>';

// Grab the ul class in html
let ul = document.querySelector('ul.UL-class')
// console.log(ul);
// append the element
ul.appendChild(element);

// console.log(element);

// Create 2nd element

let ele2 = document.createElement('h2');
ele2.id = 'h2-id';
ele2.className = 'class-h2';
let tnode = document.createTextNode('i am 2nd node');
ele2.appendChild(tnode);
// console.log(ele2);

// Replace element with ele2
element.replaceWith(ele2);

let ULclass = document.getElementById('UL-class');
// ULclass.replaceChild(element, document.getElementById('id-fi'));
// ULclass.removeChild(document.getElementById('id-la'))

// let pr = ele2.getAttribute('class');
let pr = ele2.hasAttribute('class');
ele2.removeAttribute('id');
// console.log(ele2, pr);
// console.log(ULclass);


// Home Work
let quiz = document.createElement('a');
quiz.id = 'quiz-id';
quiz.className = 'quiz-class';
quiz.setAttribute('href', 'https://www.codewithharry.com');

let quiz_text = document.createTextNode('Go to CodeWithHarry!');
// console.log(quiz_text);

quiz.append(quiz_text);
let head_app = document.querySelector('div.parent');
// console.log(head_app);
head_app.appendChild(quiz);
// console.log(quiz);

