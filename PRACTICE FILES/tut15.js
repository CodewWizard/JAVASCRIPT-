// Events
console.log("Tutorial 15");

// document.getElementById("head").addEventListener("click", function (e) {
//   let ex;
//   console.log("You have clicked the heading.");
//   // alert("you have clicked the heading");
//   // location.href = '//facebook.com';
//   ex = e.target;
//   ex = e.target.className;
//   ex = e.target.id;
//   ex = Array.from(e.target.classList);
//   ex = e.offsetX;
//   ex = e.offsetY;
//   ex = e.clientX;
//   console.log(ex);
// });
// document.getElementById("head").addEventListener("mouseover", function (e) {
//     let ex;
//     console.log("You have clicked the heading.");
//     // alert("you have clicked the heading");
//     // location.href = '//facebook.com';
//     ex = e.target;
//     ex = e.target.className;
//     ex = e.target.id;
//     ex = Array.from(e.target.classList);
//     ex = e.offsetX;
//     ex = e.offsetY;
//     ex = e.clientX;
// //     console.log(ex);
// //   });

// let btn = document.getElementById('btn-id');
// btn.addEventListener('click', func1);
// btn.addEventListener('dblclick', func2);
// btn.addEventListener('mousedown', func3);

// function func1(e) {
//     // console.log("Clicked", e);
//     e.preventDefault();
// }

// function func2(e) {
//     console.log("Double Clicked", e);
//     e.preventDefault();
// }

// function func3(e) {
//     console.log("Mouse down", e);//mouse down means consider all clicks
//     e.preventDefault();
// // }

// document.querySelector('.child').addEventListener('mouseenter',
// function(){
//     console.log('You Entered child1')
// })

// document.querySelector('.child').addEventListener('mouseleave',
// function(){
//     console.log('You Exited child1')
// })

 document.querySelector('.parent').addEventListener('mousemove',
function(e){
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetX},${e.offsetX, 154
    })`;
    console.log(e.offsetX, e.offsetY);
    console.log('You moved Body')
})
