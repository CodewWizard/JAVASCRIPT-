console.log('Index.js');
let screen = document.getElementById('screen');
let screenValue = '';

let btns = document.querySelectorAll('button');
for(item of btns){
    item.addEventListener('click', (e)=>{
        let btnText = e.target.innerText;
        console.log(btnText);
        if(btnText == 'X'){
            btnText = '*';
            screen.value += btnText
        }
        else if(btnText == 'C'){
            screen.value = '';
        }
        else if(btnText == '='){

        }
        
    })
}