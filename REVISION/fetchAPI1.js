console.log('index 1');

let div = document.getElementById("get");

fetch("https://jsonplaceholder.typicode.com/users")
.then(response  => response.json())
.then(json =>{
    let html = "";
    json.forEach(user => {
        let str = `<ul>
        <li>${user.name}</li>
        <td>${user.email}</td>
        </ul>`;
        html += str;  
    })
    div.innerHTML = html;
});