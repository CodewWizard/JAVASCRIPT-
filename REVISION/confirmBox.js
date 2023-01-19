console.log("INDEX");

let btn = document.getElementById("btn");
btn.addEventListener('click', function(){
    let confirmBox = confirm("facebook");
    
    if(confirmBox){
        window.open("https://www.facebook.com");
    }
    else{
        document.write("404 Not found")
    }
})
