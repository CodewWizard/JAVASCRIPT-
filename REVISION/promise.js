console.log('PROMISE');


function myFun() {
    return new Promise(function (resolve, reject) {
        let error = true;
        if(!error){
            console.log('function : process has been resolving');
            resolve();
        } 
        else{
            console.log('function : process has not been resolving');
            reject('sorry');
        }
    });
}

myFun().then(function () {
    console.log('Resolving')
}).catch(function (errorMsg) {
    console.log('Reject ' + errorMsg)
})
