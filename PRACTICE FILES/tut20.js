// Object Oriented JS
console.log("Tutorial No 20")
let bike = {
    name:"",
    speed:"",
    run:function(

    ) {
        console.log("")
    }
}
// console.log(bike);

// Constructor 
function generalBike(givenName, givenSpeed){
    this.name = givenName;
    this.speed = givenSpeed;
    this.run = function(){
        console.log(`${this.name} is Running`)
    }
}

bikeObj = new generalBike("rs100",200);
console.log(bikeObj)