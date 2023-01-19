console.log('INDEX');

let card = document.getElementById("card");

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://saurav.tech/NewsAPI/top-headlines/category/health/in.json', true);


xhr.getResponseHeader("content-type", "application/json");

xhr.onload = function() {
    // console.log(this.responseText);
    let newsHtml = "";
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);  
    let articles = json.articles;
    console.log(json);
    articles.forEach(function(element, index) {
        // console.log(element);
        // console.log(element.title);
       let news = ` <div style="background-color: black;  width: 1000px; margin-left: 20px; margin-top: 30px; border-radius:6px; cursor:pointer;"
        id="card">
        <div class="card-body">
          <blockquote style="color: white" class="blockquote mb-0">
            <p id="para">${element["title"]}</p>
            <!-- <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer> -->
          </blockquote>
        </div>
      </div>
      </div>`;
      newsHtml +=news;
    });
    card.innerHTML = newsHtml;
  }else{
    console.log('Error occured');
  }
};
xhr.send();

let cardContent = document.getElementById("cardContent");
let newsHtml1 = "";
card.addEventListener('click', function () {
  console.log('hhah');
  
    let xhr1 = new XMLHttpRequest();
    xhr1.open('GET','https://saurav.tech/NewsAPI/top-headlines/category/health/in.json', true);
    xhr1.onload = function () {
      let json = JSON.parse(this.responseText);
      let art = json.articles;
      art.forEach(function (element) {
        let news1 = `<div id = "cardContent">
          ${element["content"]}
         </div>` 
         newsHtml1 +=news1;
      });
      cardContent = newsHtml1;
    }
    xhr1.send();
})



