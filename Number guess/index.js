
function game(){
    var btn = document.getElementById("btn");
    btn.addEventListener("click", clickEvent);
    
    const random = Math.floor(Math.random() * 101);
    // console.log(random);
    
    function clickEvent(e) {
        var result = "";
        var guessNo = document.getElementById('guess-id').value;
        if(random == guessNo){
            result = "Entered Number is Correct";
            // console.log(result);
        }
        else if(guessNo > random){
           var max = "Entered Number is too High";
            result = max;
            // console.log(result)
        }
        else if(guessNo < random){
          var min = "Entered Number is too Low";
            result = min;
            // console.log(result)
        }
        var para = document.getElementById('warn');
        if(result == max || result == min){
            var paraHtml = `<br><p style="color:red;">${result}</p>`;
            para.innerHTML = paraHtml;
        }
        else{
            var paraHtml = `<br><p style="color:green;">${result}</p>`;
            para.innerHTML = paraHtml; 
        }
      e.preventDefault();
    }
}
game();

let restart = document.getElementById('restart');
restart.addEventListener('click', function(e){
    paraHtml.innerHTML= ``;
    guessNo.innerHTML = ``;
    game();
    e.preventDefault();
})