console.log('Index.js');

let whiteBoxes = document.getElementsByClassName('whiteBox');



let imgBox = document.querySelector('.imgBox');

imgBox.addEventListener('dragstart', (e)=>{
    console.log('Drag start Triggered');
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className += ' hide';
    }, 0);
});

imgBox.addEventListener('dragend', (e)=>{
    console.log('Drag Enter Triggered  ');
    e.target.className += 'imgBox';
});

for(whiteBox of whiteBoxes){
    whiteBox.addEventListener('dragover', (e)=>{
        e.preventDefault();
        console.log('Drag Over Triggered ');
    });

    whiteBox.addEventListener('dragenter', (e)=>{
        console.log('Drag Enter Triggered ');
        // e.target.className += ' dashed'; 
    });

    whiteBox.addEventListener('dragleave', (e)=>{
        console.log('Drag Leave Triggered ');
        // e.target.className += 'whiteBox';
    });
    
    whiteBox.addEventListener('drop', (e)=>{
        console.log('Drop Triggered  ');
        e.target.append(imgBox);
    });
}
// console.log(whiteBoxes);
// console.log(imgBox);