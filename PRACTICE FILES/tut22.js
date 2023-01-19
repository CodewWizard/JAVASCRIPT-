// ES6 classes and Inheritance
console.log("Tutorial 22");

class Employee{
    constructor (givenName, givenExp, givenPost){
        this.Name = givenName;
        this.Exp = givenExp;
        this.Post = givenPost;
    }

     slogan() {
        return `My name is ${this.Name} and this comapany is best`;
    }

    joiningYear(){
        return 2021 - this.Exp;
    }

    // Static Method
    static add(a, b){
        return a + b;
    }
}

class Programmer extends Employee{
    constructor(givenName, givenExp, givenPost, givenLang, givenGithub){
        super(givenName, givenExp, givenPost);
        this.lang = givenLang;
        this.github = givenGithub;
    }

    favouriteLanguage(){
        if(this.lang == 'python'){
            return `Python`;
        }
        else{
            return `JavaScript`;
        }
    }

    static multiply(a, b){
        return a * b;
    }
}


Obj = new Programmer("CodeWizard", 10, "CEO", "PHP", "madiha3105")
console.log(Obj)
console.log(Obj.favouriteLanguage());
console.log(Programmer.multiply(4,7));


// Obj =  new Employee("CodeWizard", 10, "CEO");
// console.log(Obj)
// console.log(Employee.add(10,45))