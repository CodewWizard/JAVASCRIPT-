// Callback Function converted into promise function
console.log("CallBack Function");

const studentObj = [
    {
        name:"Madiha",
        Subject:"React JS"
    },
    {
        name:"Harsh",
        Subject:"Native react"
    }
]

function enrolledStudent(student) {
      return new Promise(function(resolve, reject){
          setTimeout(function() {
              studentObj.push(student); 
              console.log("Student has been enrolled");
              const error = false;
              if(!error){
                  resolve();
              } 
              else{
                  reject();
              }
          }, 1000);
      })
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

let newStudent = {name:"Baby",Subject:"Python"};
// enrolledStudent(newStudent, getStudent);
enrolledStudent(newStudent).then(getStudent).catch(function(){
    console.log("error")
})
// getStudent();