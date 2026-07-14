const form=document.querySelector('form')

form.addEventListener('submit', function (event){
    event.preventDefault()                // prevent default , default action ko rokne ke liye use kiya jata hai
                                        // such as giving the data to the website directly 
    
     const height = parseInt (document.querySelector('#Height').value)   // .value gives the user value , which is in string
                                                                            // parseint used to convert string into integer value
    
     const weight = parseInt (document.querySelector('#Weight').value)
     console.log(weight.type);
     

     const result = document.querySelector('#result')

     if(height===null || height<0 || isNaN(height)){
        result.innerHTML= ` please give a valid height `
     }

    else if(weight===null || weight<0 || isNaN(weight) ){
        result.innerHTML= ` please give a valid weight `
     }

     else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        // now showing the result
         result.innerHTML= `<span> The result is = ${bmi} </span>`
        
          if (bmi<18.6) {
        result.innerHTML=`${bmi} is under weight`
     }
         else if (bmi<24.9) {
        result.innerHTML=`${bmi} is normal  weight`
     }
        else  if (bmi>24.9) {
        result.innerHTML=`${bmi} is over weight`
     }
      

     }

   



} )

