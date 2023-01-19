console.log("Index.js");

// Utility Function
// 1. to get dom element from string
// function getElementFromString(string) {
//     let div = document.createElement('div');
//     div.innerHTML = string;
//     return div.firstElementChild;
// }

// Initialize no of parameters
let addedparam = 0;

//Hide the parameters box initially
let parameterBox = document.getElementById("parametersBox");
parameterBox.style.display = "none";

//If the user clicks on params, hide the json box

let custom = document.getElementById("params");
custom.addEventListener("click", () => {
  document.getElementById("reqJsonBox").style.display = "none";
  document.getElementById("parametersBox").style.display = "block";
});

//If the user clicks on json , hide the params box
let json = document.getElementById("json");
json.addEventListener("click", () => {
  document.getElementById("parametersBox").style.display = "none";
  document.getElementById("reqJsonBox").style.display = "block";
});

// if the user clicks on + button, add more parameters
let addParam = document.getElementById("addParam");
addParam.addEventListener("click", () => {
  let params = document.getElementById("params");
  let str = ` <div class="form-row"><label for="url" class="col-sm-2 col-form-label">Parameter ${
    addedparam + 2
  } </label>
    <div class="form-group col-md-4">
        <input type="text" name="" id="parameter${
          addedparam + 2
        }" class="form-control"
            placeholder="Enter Parameter ${addedparam + 2}  key">
    </div>
    <div style="margin-left: 500px; margin-top: -38px;" class="form-group col-md-4">
        <input type="text" name="" id="parameter ${
          addedparam + 2
        }" class="form-control"
            placeholder="Enter Parameter ${addedparam + 2} value">
            </div>
            <button style="margin-left:950px; margin-top:-65px; width:38px" class="btn btn-primary deleteParam" id="">-</button>
    </div>`;
  params.innerHTML += str;
  //Add an event listener to remove the parameter on clicking - button
  let deleteParam = document.getElementsByClassName("deleteParam");
  for (item of deleteParam) {
    item.addEventListener("click", (e) => {
      alert("Do you want to delete this parameter");
      e.target.parentElement.remove();
    });
  }
  addedparam++;
});

// Submit
let submit = document.getElementById("submit");
submit.addEventListener("click", () => {
  document.getElementById("resjsonText").value =
    "Please wait.. Fetching response";

  //fetch all the values user has entered
  let url = document.getElementById("url").value;
  let reqType = document.querySelector(
    "input[name='requestType']:checked"
  ).value;
  let conType = document.querySelector(
    "input[name='ContentType']:checked"
  ).value;

  // if user has params option instead of json, collect all the parameters in an object
  if (conType == "params") {
    data = {};
    for (let i = 0; i < addedparam + 1; i++) {
      if (document.getElementById("parameterKey" + (i + 1)) != undefined) {
        let key = document.getElementById("parameterKey" + (i + 1)).value;
        let value = document.getElementById("parameterValue" + (i + 1)).value;
        data[key] = value;
      }
    data = JSON.stringify(data);
    }
  } else {
    data = document.getElementById("reqjsonText").value;
  }
  
  console.log("URL is:", url);
  console.log("reqType is", reqType);
  console.log("conType is", conType);
  console.log("Data", data);

  // If the request type is post, invoke fetch api to create a post request
  if(reqType == 'get'){
    fetch(url, {
      method : 'GET'
    })
    .then(response => response.text())
    .then((text) =>{
      let response = document.getElementById('resjsonText').value = text;
    })
  }
  else{
    fetch(url, {
      method : 'POST',
      body : data,
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
    .then(response => response.text())
    .then((text) =>{
      let response = document.getElementById('resjsonText').value = text;
    })
  }

});
