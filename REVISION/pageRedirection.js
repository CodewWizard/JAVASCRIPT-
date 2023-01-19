console.log('INDEX');

let btn = document.getElementById("btn");
btn.addEventListener("click", function(){
    //1st way to redirect
    // window.location = 'https://youtube.com';

    //2nd way to redirect
    window.location.assign("https://youtube.com");
})
