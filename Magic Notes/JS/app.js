console.log("APP.JS");
showNotes();

// If user clicks the add button it should store in local storage

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  let addTitle = document.getElementById("addTitle");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  let myObj = {
    text: addTxt.value,
    title: addTitle.value,
  };

  notesObj.push(myObj);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  addTitle.value = "";

  // console.log(notesObj);
  showNotes();
});

// function to show elements from localstorage

function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  var html1 = "";
  // let a = "";
  notesObj.forEach(function (element, index) {
    html1 += `<div id="noteCard-id" class="noteCard card my-2 mx-2" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text">${element.text}</p> 
            <button id="${index}" onclick="deleteNode(this.id)" class="class-del btn btn-success">Delete Node</button>
        </div>
    </div>`;
  });
  // a += `<p> nothing </p>`;

  let notesElem = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElem.innerHTML = html1;
  } else {
    // let a = `nothing`;
    notesElem.innerHTML = `Nothing to show! Use "Add Note" section above to add note`;
  }
  // console.log(notesObj);
}

// Deleting Node
function deleteNode(index) {
  let delNote = document.getElementsByClassName("class-del");
  // console.log("deleting")
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}

// // Search technoclogy
let searchTxt = document.getElementById("searchTxt");
searchTxt.addEventListener("input", function () {
  let inputVal = searchTxt.value;
  // console.log("input event fired", inputVal);
  let noteCard = document.getElementsByClassName("noteCard");
  Array.from(noteCard).forEach(function (element) {
    let cardTxt = element.getElementsByTagName("p")[0].innerText;
    // console.log(cardTxt)
    if (cardTxt.includes(inputVal)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});

// MArk as Important
let markVar = document.getElementById('noteCard-id');
markVar.addEventListener("click", function(e){
  // markVar.forEach(function(){
       markVar.style.borderColor  = "red";
  // });
})
