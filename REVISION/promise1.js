console.log('PROMISE 1');

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

function enrollStudents(student){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            let error = false;
            students.push(student);
            console.log('Students has been enolled');
            if(!error){
                resolve();
            }
            else{
                reject();
            }
        }, 2000);
    });
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

    let newStud = {name: "harry", language:"python"};
    enrollStudents(newStud).then(function(){
        getStudents();
    }).catch(function(){
        console.log('error occured');
        
    })
