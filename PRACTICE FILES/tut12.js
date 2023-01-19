// Element Selectors
// - Single element selector
// - Multi element selector

// Single Element
let ele = document.getElementById("first");
// ele = ele.className;
// ele = ele.childNodes;
// // ele = ele.parentNode;
// ele.style.color = `red`;
// ele.innerText = "Madihaaa";
ele.innerHTML = "<b>Madiha</b>";
// console.log(ele);
// console.log(ele.innerHTML);

let sel = document.querySelector('#first');
sel = document.querySelector('.child');
sel = document.querySelector('b');
sel = document.querySelector('h1');
sel = document.querySelector('div');
sel.style.color = "green";
// console.log(sel);

// Multi Line Elements
let elems = document.getElementsByClassName('parent');
// console.log(elems);
// console.log(elems[0].getElementsByClassName('child'));
elems = document.getElementsByTagName('div');

Array.from(elems).forEach(element =>{
    console.log(element);
    element.style.color="blue";
})

console.log(elems);