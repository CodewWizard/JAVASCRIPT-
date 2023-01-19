console.log('CALLBACK');

function call(callback) {
    console.log('call');
    callback();
    console.log('after call');
}

function back() {
    console.log('back');
    console.log('after back');
}

call(back);