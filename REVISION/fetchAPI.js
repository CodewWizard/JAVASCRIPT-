//  updated version of xhr is fetch
// xhr is old  
// fetch is also Asynchronous 

console.log('INDEX');

// let btn = document.getElementById("btn");

// btn.addEventListener('click', function(){
//     let url = "AJAX.txt";
//     fetch(url).then((response) =>{
//         return response.text();
//     }).then((data)=>{
//         console.log(data);
//     })
// })

let url = 'https://jsonplaceholder.typicode.com/todos/1';
let api = fetch(url);
api.then((response) =>{
    return response.json();
}).then((data) => {
    console.log(data);
})