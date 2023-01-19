// // Traversing DOM objects
// let cont = document.querySelector('.child');
// cont = document.querySelector('.parent');
// // let nodeName = cont.childNodes[1].nodeName;
// let nodeType = cont.childNodes[1].nodeType;
// // let nodeValue = cont.childNodes[5].nodeValue;
// // console.log(nodeName);
// console.log(nodeType);
// // console.log(nodeValue);
// // console.log(cont.childNodes);
// // console.log(cont.children);//filtering new lines and comments





// /* Node Types
//   1- element
//   2- Attribute
//   3- Text node
//   8- Comment
//   9- Document
//   10- docType
// */

let parent = document.querySelector('div.parent');

// // console.log(parent.children[1].children[0]);
// console.log(parent.firstChild);
// console.log(parent.firstElementChild);
// console.log(parent.lastChild);
// console.log(parent.lastElementChild);
// console.log(parent.childElementCount);

console.log(parent.firstElementChild.parentNode);
console.log(parent.firstElementChild.nextSibling);
console.log(parent.firstElementChild.nextElementSibling.nextElementSibling);
