  const colors =  document.querySelectorAll('.buttons')
  console.log(colors);

 const body =  document.querySelector('body')

 colors.forEach( function (button){
    console.log(button);
    button.addEventListener('click',function(event){
        console.log(event);
        console.log(event.target);   // target ka mutlab hai ki ye event aa kaha se raha hai

      if(event.target.id==='grey')
      {
        body.style.backgroundColor = 'grey'
      }

      else if(event.target.id==='white'){
            body.style.backgroundColor='white'
      }

      else if(event.target.id==='blue'){
            body.style.backgroundColor='blue'
      }

      else if(event.target.id==='purple')
      {
        body.style.backgroundColor='purple'
      }

      else{
        body.style.backgroundColor='yellow'
      }
        
    })
    
 } )
  
