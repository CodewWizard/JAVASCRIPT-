console.log("AJAX");


let fetchBtn = document.getElementById('fetch-btn');

fetchBtn.addEventListener('click', btnHandler);

function btnHandler(){
    console.log('msg');
    const xhr = new XMLHttpRequest();

    //To open
    xhr.open('GET', 'AJAX.txt', true);

    //On load 
    xhr.onload = function(){
        if (this.status == 200) {
            console.log(this.responseText);
        }
        else{
            console.error("Some error occured");
        }
    }

    //to send the request
    xhr.send();
}

//POST REQUEST

let postbtn = document.getElementById('back');

postbtn.addEventListener('click', postHandle);

function postHandle(){
    console.log('msg');
    const xhr = new XMLHttpRequest();

    //To open
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

    //On load 
    xhr.onload = function(){
        if (this.status == 200) {
            console.log(this.responseText);
        }
        else{
            console.error("Some error occured");
        }
    }

    //to send the request
    xhr.send();
}
