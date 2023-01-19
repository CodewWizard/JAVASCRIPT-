// Exercise-wordsAPI

let btn = document.getElementById("btn");
btn.addEventListener("click", btnHandler);

function btnHandler() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "dictionary.json", true);
  xhr.onload = function () {
    if (this.status == 200) {
      let obj = JSON.parse(this.responseText);
      console.log(obj);
      let data = document.getElementById("data");
      let html = "";
      for (key in obj) {
        html = html + `<li>${obj[key].dictionary}</li>`;
        //    console.log(obj[key]);
      }
      data.innerHTML = html;
    }
    else{
        console.error("Error occured");
    }
  };
  xhr.send();
}
