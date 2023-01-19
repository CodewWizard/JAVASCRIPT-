console.log("API FETCH");

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.covid19api.com/stats', true);
xhr.onload = function(){
    if(this.status === 200){
        let jsonVar = JSON.parse(this.responseText);
        console.log(jsonVar.ByCountryTotal);
        console.log(jsonVar.ByCountryLive);
        console.log(jsonVar.DayOneTotal)
        console.log(jsonVar);
        // console.log(this.responseText);

        let active = document.getElementById('active');
        let activeHtml = `<h1> Active Cases: ${jsonVar.ByCountryTotal}</h1>`;
        active.innerHTML += activeHtml; 

        let deaths = document.getElementById('deaths');
        let deathsHtml = `<h1> Deaths: ${jsonVar.ByCountryLive}</h1>`;
        deaths.innerHTML += deathsHtml; 

        let recover = document.getElementById('recovered');
        let recoverHtml = `<h1> Recovered Cases: ${jsonVar.DayOneTotal}</h1>`;
        recover.innerHTML += recoverHtml; 
    }
    else{
        console.log("Error")
    }
}

xhr.send();
