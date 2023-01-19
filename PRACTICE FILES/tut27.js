// Promises in JS
console.log("Tutorial No 27");

function promise_fun(){
    return new Promise(function (resolve, reject){
        const error =  false;
        setTimeout(function(){
            if(!error){
                console.log("Promise has been resolved");
                resolve();
            }
            else{
                console.log("Promise has not been resolved");
                reject('Sorry promise is not fulfilled');
            }
        },5000)
    })
}

promise_fun().then(function(){
    console.log("Madiha:Resolved");
}).catch(function(e){
    console.log("Madiha:not Resolved. Reason: "+e);
})