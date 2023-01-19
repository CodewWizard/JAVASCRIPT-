console.log("hello");

const student = [
    {
        name:"madiha",
        sub:"js"
    }
]

function enroll(stud){
    setTimeout(() => {
        student.push(stud);
        console.log('students enrolled');
    }, 5000);
}


function getStud(){
    setTimeout(() => {
        let str = "";
        student.forEach(student => {
            str += `<li> ${student.name} </li>`
            document.getElementById('list').innerHTML = str;
            console.log('students fetched');
        });
    }, 1000);
}

let newStud = 
    {
        name:"sohel",
        sub:"python"
    }

enroll(newStud);
getStud();