console.log("Index JS file");
// API Key - 86d54e1cced24b069e475a6a5b3f98f0

// Grab the news container
let newsCard = document.getElementById("newsCard");

//create the ajax get request
let api_Key = "86d54e1cced24b069e475a6a5b3f98f0";
const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  ` https://newsapi.org/v2/top-headlines?country=us&apiKey=86d54e1cced24b069e475a6a5b3f98f0`,
  true
);
xhr.getResponseHeader("content-type", "application/json");

// Onload
xhr.onload = function () {
  let newsHtml = "";
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    console.log(json);
    articles.forEach(function (element, index) {
    //   console.log(articles[news]);
      let news = `<div id="newsCard">
      <p>
          <a class="btn btn-dark" data-bs-toggle="collapse" href="#collapseExample${index}" role="button"
              aria-expanded="false" aria-controls="collapseExample">
              <b> Breaking News : ${index+1} </b> ${element["title"]}
          </a>
      </p>
          <div class="collapse" id="collapseExample${index}">
              <div class="card card-body"> ${element["description"]}<a href="${element['url']}"> Read More</a>
              </div>
              <hr>
          </div>
    </div>`;
      newsHtml += news;
    });
    newsCard.innerHTML = newsHtml;
  } else {
    console.log("Error occured");
  }
};

xhr.send();
