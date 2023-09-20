const mainTitle = document.querySelector('#title');
let cvalue=0;

const btnDecrement = document.querySelector('#decrement');
const btnReset = document.querySelector('#reset');
const btnIncrement = document.querySelector('#increment');

btnIncrement.addEventListener('click',() =>{
cvalue++;
mainTitle.textContent=cvalue;
});

btnDecrement.addEventListener('click',() =>{
    cvalue--;
    mainTitle.textContent=cvalue;
    });

    btnReset.addEventListener('click',() =>{
        cvalue=0;
        mainTitle.textContent=cvalue;
        });
    
    
