// Callback Function
console.log("CallBack Function");

const studentObj = [
    {
        name:"Sohel",
        Subject:"Native react"
    }
]

function enrolledStudent(student, callBack) {
    setTimeout(function() {
        studentObj.push(student); 
        console.log("Student has been enrolled");
        callBack();
    }, 3000);
}

function getStudent(){
    setTimeout(function(){
        let str = "";
        studentObj.forEach(function(student){
            str += `<li>${student.name}</li>`; 
        });
        document.getElementById('student').innerHTML = str;
        console.log("Student have been fetched");
    },1000);
}

let newStudent = {name:"Madiha",Subject:"Python"};
enrolledStudent(newStudent, getStudent);
// getStudent();