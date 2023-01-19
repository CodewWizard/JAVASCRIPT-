// Exercise
console.log("Exercise!");


let container = document.querySelector('.parent');


let element = document.createElement('div')
let val = localStorage.getItem('texts');
let text;
if(val == null){
text = document.createTextNode("This is editable text");
}
else{
    text = document.createTextNode(val);
}
element.appendChild(text)
element.setAttribute('id', 'id-ele')
element.setAttribute('class', 'class-ele')
element.setAttribute('style','padding:10px; border:1px solid black; width:162px; margin:34px')
// console.log(element)

container.appendChild(element);
element.addEventListener("click", function(e) {
    // console.log("clicked")
    let area = document.getElementsByClassName('class-text').length;
    if(area  == 0){
    element.innerHTML = `<textarea id='id-text' class="class-text"></textarea>`;
    // console.log(area)
        // element.innerHTML = html;
        // console.log("hha")
    }
    // console.log("area")
    let textarea1 = document.getElementById('id-text');
    textarea1.addEventListener("blur", function() {
        element.innerHTML = textarea1.value;
        localStorage.setItem('texts', textarea1.value)
        // console.log("blur")
    })
    // console.log(textarea1)
});
// To save the text in textarea
// console.log(element)






// 
// element.addEventListener('mouseover', function(e) {
//     console.log("clicked")
// }).

// let  b;
// let a = "madiha";
// a = a.length
// console.log(a)