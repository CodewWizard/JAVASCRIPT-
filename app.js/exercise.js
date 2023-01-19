console.log("Exercise ON AJAX");

let veg = document.getElementById("veg-id");
veg.addEventListener("click", vegEvent);

function vegEvent() {
  // Create object
  const vegXhr = new XMLHttpRequest();

  // OPen the object
  vegXhr.open("GET", "vegi.json", true);

  vegXhr.onload = function () {
    if (this.status === 200) {
      let obj = JSON.parse(this.responseText);
      console.log(obj)
      let str = "";
      let list = document.getElementById("vegi");
      for (key in obj) {
        str += `<li>${obj[key].vegi}</li>`;
      }
      list.innerHTML = str;
    } else {
      console.log("Error Occured");
    }
  };

  // Send the request
  vegXhr.send();
  console.log("Done");
}

let fruit = document.getElementById("fruit-id");
fruit.addEventListener("click", fruitEvent);

function fruitEvent() {
  // Create object
  const fruitXhr = new XMLHttpRequest();

  // OPen the object
  fruitXhr.open("GET", "fruit.json", true);

  fruitXhr.onload = function () {
    if (this.status === 200) {
      let obj = JSON.parse(this.responseText);
      console.log(obj)
      let str = "";
      let list = document.getElementById("fruit");
      for (key in obj) {
        str += `<li>${obj[key].fruit}</li>`;
      }
      list.innerHTML = str;
    } else {
      console.log("Error Occured");
    }
  };

  // Send the request
  fruitXhr.send();
  console.log("Done");
}
