  // document.querySelector('#clock')     // both are same we are taking the id only
  
 const clock=document.getElementById('clock')



 setInterval(function(){
     const date = new Date();
   // console.log(date.toLocaleTimeString()); it is for printing purpose
   clock.innerHTML = date.toLocaleTimeString()
 
 },1000)   // 1000 is the miliseconds and setinterval means we are printing the time in every 1 seconds

