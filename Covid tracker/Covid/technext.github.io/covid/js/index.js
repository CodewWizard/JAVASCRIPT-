console.log("Index JS File");
// Create get request
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.covid19api.com/stats", true);
xhr.onload = function(){
    if(this.status === 200){
        let jsonVar = JSON.parse(this.responseText);
        
        let active = document.getElementById('active');
        let activeHtml = `<strong>${jsonVar.ByCountryTotal}</strong>`;
        active.innerHTML += activeHtml;

        let deaths = document.getElementById('deaths');
        let deathsHtml = `<strong>${jsonVar.Default}</strong>`;
        deaths.innerHTML += deathsHtml;

        let recovered = document.getElementById('recovered');
        let recoveredHtml = `<strong>${jsonVar.DayOneTotal}</strong>`;
        recovered.innerHTML += recoveredHtml;
        // console.log(active);
    }
}
xhr.send();