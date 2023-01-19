// Object prototype in JS
// Object literal:object prototype
console.log("Tutorial 21")
let obj = {
    name:"Madiha",
    Channel:"CodeWizard"
}

function Obj(givenName){
    this.name = givenName;
}

Obj.prototype.getName = function(){
    return this.name;
}

Obj.prototype.setName = function(newName){
     this.name = newName;
}

let obj2 = new Obj("Madiha");

// console.log(obj2);
console.log(obj2);