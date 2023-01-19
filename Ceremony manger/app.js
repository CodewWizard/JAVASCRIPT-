console.log('Index');

let navName = document.getElementById("navName");
navName.addEventListener('click', ()=>{
  window.location.reload();
})
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

let name1 = document.getElementById("nameBox");
let locationBox = document.getElementById("locationBox");

let obj = {
  nameText : name1.value,
  location : locationBox.value,
  data : date
}
let addGuests = document.getElementById("add");
addGuests.addEventListener("click",  (e)=>{
  e.preventDefault();
    console.log(name1.value);
    console.log(locationBox.value);
    localStorage.setItem("name",name1.value);
    localStorage.setItem("location",locationBox.value);
    name1.value = "";
    locationBox.value ="";
  // let trData = document.getElementById("trData");
  // let html = `<td>name<td>`;
  //  trData.innerHTML += html;
  
});


let guests = document.getElementById("guests");
guests.addEventListener("click", (e)=>{
  e.preventDefault();
    // console.log('gues');
  document.getElementById("form").style.display = "none";
  let html = "";
    html += `<table class='table'>
   <thead>
     <tr>  
       <th>Name</th>
       <th>Location</th>
       <th>Data added</th>
       <th>Actions</th>
     </tr>
   </thead>
   <tbody>
     <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
     </tr>
   </tbody>
   
 </table>`;
     document.getElementById("data").innerHTML = html;
  document.getElementById("data").style.display = "block";
});

let home = document.getElementById("home");
home.addEventListener("click", ()=>{
  // console.log('home');
  let html1 = `<div class="name"></div>
  Name
  <input style="margin-top:-30px; margin-left: 80px; width: 600px;"type="text" class="form-control" id="nameBox" >
  <div id="location"></div>
          <p style="margin-top: 40px;">Location</p> 
  <input style="margin-top:-40px; margin-left: 80px; width: 600px;" type="text" class="form-control" id="locationBox" >
  <button id="add" style="background-color:rebeccapurple; margin-top:30px; margin-left: 575px;" type="submit" class="btn btn-primary mb-3">Add Guests</button>`
  document.getElementById("form").style.display = "block";
  document.getElementById("data").style.display = "none";
})
