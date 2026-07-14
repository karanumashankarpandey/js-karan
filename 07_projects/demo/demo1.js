const display=document.querySelector('.display')
setInterval((event) => {
let date = new Date();
display.innerHTML=date.toLocaleTimeString()
    
}, 1000);