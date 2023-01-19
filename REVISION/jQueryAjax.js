console.log('AJAX');

$(document).ready(function () {
    $("button").click(function () { 
       $("#get").load("AJAX.txt");
    });
});
