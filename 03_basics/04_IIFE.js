// imediately invocked function expression  (IIFE)
// it is used to immediately execute a function 
// global scope ke ploution se  problem hoti hai kahi baar , to global scope ke variabless or any declaration ko hatane 
// ke liye iife use hota hai

// iife is declared as ()  ()  the first () is used to write the function inside the ()
// the second () is used to execute the function
// if you want to create multiple iife then make sure to put ();  after the function , then only the another function will start


(function chai()
{    // this is named IIFE
    console.log("db connected");
    
})();

(  karan=(name)=>{
    console.log(` ${name} chai lelo chai only 10 rs  `);
    
})("karan");  // in normal functon we used to do karan("chai")
//   ^ this function is exactly same as the original ones

 ( (surname)=>{
    console.log(` karan ${surname} welcome to the website  `);   
})("pandey")

//  VIDEO NO 25 IS IMPORTANT FOR INTERVIEW PREPARATION.
// IT IS ABOUT HOW JS EXECUTE THE CODE AND ALSO ABOUT CALL STACK.