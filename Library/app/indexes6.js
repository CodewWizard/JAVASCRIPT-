// console.log("ES 6 ")

// Create a class and add constructor
class Book{
    constructor(name,author,type){
        this.name = name;
        this.author = author;
        this.type = type;
    }
}


// Display Function
class Display{
    add(book){
        let tableBody = document.getElementById("tableBody");
  let html = `<tr>
  <td>${book.name}</td>
  <td>${book.author}</td>
  <td>${book.type}</td> 
  <td><button type="submit" class="btn btn-danger" id="submit-id">Delete</button> </td>
</tr>`;

    tableBody.innerHTML += html;
  // console.log("add");
    }

    clear(){
        let submit = document.getElementById("id-form");
  submit.reset();
    }

    validate(book){
        if(book.name.length < 2 || book.author.length <2){
            return false;
          }
          else{
            return true;
          }
    }

    show(type, msg1){
            let msg = document.getElementById('alert1');
            // console.log(msg)
            let boldText;
            if(type == "success"){
              boldText = "Success";
            }
            else{
              boldText = "Error";
            }
            msg.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>${boldText}:</strong> ${msg1}
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                          </div>`;
                          
            setTimeout(function() {
              msg. innerHTML = "";
            },2000);
    }
}


// Add Submit Event Listener to a form
let submit = document.getElementById("id-form");
submit.addEventListener("submit", formSubmit);

function formSubmit(e) {
  // console.log("Submitted");

  let name = document.getElementById("name-id").value;
  let author = document.getElementById("author-id").value;

  let type;

  let fiction = document.getElementById("fiction-id");
  let programming = document.getElementById("programming-id");
  let cooking = document.getElementById("cooking-id");

  if (fiction.checked) {
    type = fiction.value;
  } else if (programming.checked) {
    type = programming.value;
  } else if (cooking.checked) {
    type = cooking.value;
  }
  var book = new Book(name, author, type);
  // console.log(book);

  let display = new Display();
  if(display.validate(book)){
    display.add(book);
    display.clear();
    display.show('success','Your book has been successfully added');
  }
  else{
    display.show('danger','Filled out all fields');
 }
  e.preventDefault();
}