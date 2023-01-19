console.log('Index');
// Array of object
const data = [
    {
        name: "Rohit Sharma",
        age : 35,
        city : "Mumbai",
        language: "Python",
        framework : "Django",
        image : "https://randomuser.me/api/portraits/med/men/75.jpg"
    },
     {
        name: "Ravi Ashwin",
        age : 35,
        city : "Chennai",
        language: "PHP",
        image : "https://randomuser.me/api/portraits/med/men/77.jpg"

    },
     {
        name: "Siraj Shaikh",
        age : 35,
        city : "Benglore",
        language: "C#",
        image : "https://randomuser.me/api/portraits/med/men/78.jpg"
    }, 
    {
        name: "Dev Paddikal",
        age : 35,
        city : "Delhi",
        language: "GO",
        image : "https://randomuser.me/api/portraits/med/men/79.jpg"
    }, 
    {
        name: "Rishabh Pant",
        age : 35,
        city : "Pune",
        language: "Javascript",
        image : "https://randomuser.me/api/portraits/med/men/80.jpg"
    }
]


function CVIterator(profiles) {
    let nextIndex = 0;
    return {
        next : function(){
            return nextIndex < profiles.length ?
            { value : profiles[nextIndex++],done:false }:
            {   done:true }
         }
    }
}
let candidates = CVIterator(data);
nextCV();

const next = document.getElementById('next');
next.addEventListener('click', nextCV);


function nextCV(){
    const currentCandidate = candidates.next().value;
    // console.log('In nextCV');
    let image =  document.getElementById('image');
    let profile =  document.getElementById('profile');

    if(currentCandidate != undefined){
        image.innerHTML = `<img src='${currentCandidate.image}'>`;
        profile.innerHTML = `<ul class="list-group">
        <li style="width: 400px;"  class="list-group-item">My name is ${currentCandidate.name}</li>
        <li style="width: 400px;"  class="list-group-item">${currentCandidate.age} years old</li>
        <li style="width: 400px;"  class="list-group-item">Lives in ${currentCandidate.city}</li>
        <li style="width: 400px;"  class="list-group-item">Primarily works on ${currentCandidate.language}</li>
      </ul>`;
    }
    else{
        alert('End of candidate application');
        window.location.reload();
    }
}


