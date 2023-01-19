// Fetch API in JS through modern JS
console.log("Tutorial No 29");

//Button 
let yourBtn = document.getElementById('yourbtn-id');

// Div 
let content = document.getElementById('content');

// function demo() {
//     console.log("Inside function");
// }

// console.log("Before Running function")
// demo();
// console.log("After Running Function")

// yourBtn.addEventListener('click', getData)

// Get request
// function getData() {
//     console.log("Started getData()");
//     url = 'https://api.github.com/users';
//     fetch(url).then((response) =>{
//         console.log("Inside First then");
//         // console.log(response.text());
//         return response.json();
//     }).then((data) =>{
//         console.log("Inside Second then");
//         console.log(data);
//     })
// }


function postData() {
    console.log("Started getData()");
    data = '{"name":"Emirates","salary":"123","age":"23"}';
    url = 'https://api.instantwebtools.net/v1/airlines';
    params = {
        method : 'post',
        headers : {
            'Content-Type' :'application/json'
        },
        body : data
    }
    fetch(url, params).then(response => response.json())
    .then( data => console.log(data) )
}

console.log("Before running getData");
postData();
console.log("After running getData");