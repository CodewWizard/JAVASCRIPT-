console.log("AJAX");

let btn = document.getElementById('btn');
btn.addEventListener('click', btnEvent);

function btnEvent(){
    // console.log("Clicked");
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let container = document.getElementById('container');
            container.innerHTML = `<h1>${this.responseText}</h1>`;
        }
    };
    xhr.open('GET','practice.txt',true);
    // console.log(this.responseText);
    xhr.send();
}
