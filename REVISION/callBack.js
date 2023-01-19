console.log('CALLBACK');

const students = [
    {
        name : "Madiha",
        language : "React"
    },
    {
        name : "Sohel",
        language : "CPP"
    }
];

function enrollStudents(student, callback){
    setTimeout(() => {
        students.push(student);
        console.log('Enroll ho rahe hai');
        callback();
    }, 3000);
}

function getStudents() {
    setTimeout(() => {
        let str = "";
        students.forEach(function(student){ 
            str += `<li> ${student.name} </li>`;
        });
        document.getElementById("Students").innerHTML = str;
        console.log('print students');
    }, 1000);
}

// let fetch = document.getElementById("fetch");
// fetch.addEventListener('click', function() {
    let newStud = {name: "harry", language:"python"};
    enrollStudents(newStud, getStudents);
// });
