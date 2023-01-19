//Ajax tutorial 
// Ready state code values:
// 0 - UNSENT - client has been created open() not called yet
// 1 - OPENED - open() called
// 2 - HEADERS_RECEIVED - Send() has been called and headers and status are available
// 3 - LOADING - Downloading responseText holds partial data
// 4 - DONE  - Operation is complete 

console.log("AJAX");

// Fetch the button from html
let fetchBtn = document.getElementById('fetchBtn-id');
fetchBtn.addEventListener('click',fetchEvent);

function fetchEvent(){
    console.log("You have Clicked Fetch Data button");
    
    // Create or Instatiates xhr object
    const xhr  = new XMLHttpRequest();

    // open the object
    // arguments- method, url, boolean of asynchronus or not
    // xhr.open('GET','baby.txt',true);
    // xhr.open('GET','baby.txt',true);
    // xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true);

    // POST Request
    xhr.open('POST','http://dummy.restapiexample.com/api/v1/create',true);
    xhr.getResponseHeader('content-type','application/json');

    xhr.onreadystatechange = function(){
        console.log("Ready state is ",xhr.readyState);
    }

    // what to do when response is ready
    xhr.onload = function (){
        if(this.status === 200){
            console.log(this.responseText);
        }
        else{
            console.error("Error occured")
        }
    }
   

     // what to do on progress
     xhr.onprogress = function (){
        console.log('On Progress');
    }

    // Send the request
    parameter  = `{"name":"test","salary":"123","age":"23"}`;
    xhr.send(parameter);
    console.log("We are Done");
}

let popBtn = document.getElementById('popBtn-id');
popBtn.addEventListener('click', popEvent);

function popEvent(){
    console.log("You have Clicked Populate button");
     
    // Create or Instatiates xhr object
    const xhr  = new XMLHttpRequest();

    // open the object
    xhr.open('GET',"https://reqres.in/api/products/3",true);

    xhr.onload = function (){
        if(this.status === 200){
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('list');
            let str = "";
            for(key in obj){
                str += `<li>${obj[key].year}</li>`
            }
            list.innerHTML = str;
        }
        else{
            console.error("Error occured")
        }
    }    

    // Send the request
    xhr.send();
    console.log("We are Done");
}
// console.log(fetchBtn);