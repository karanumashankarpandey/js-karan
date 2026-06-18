// this keyword is same as the inheritance in the java
// this keyword is used to show the current context of the object and if we change anything it 
// it overwrites it.

//  console.log(this);  if you write only this in log then it prints all the current context


const user={
username:"karan",
price:"999",

        WelcomeMessage : function()
        {
            console.log(` ${this.username},  welcome to the website`);
            console.log(` the price of the protein is   ${this.price} `);
            console.log(this);
            
            
            
        }
}
user.WelcomeMessage()  // here the name is karan
user.username= "sam"  // after changing the username to sam , now it prints the sam name as a output 
user.WelcomeMessage()  // the o/p is sam.

function chai ()
{
    let username = "chaibhai"
   console.log(this.username);  // this is mainly used inside the function
    // o/p is undefined
    
}
chai()

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Arrow Function   ++++++++++++++++++++++++++++++++++++++++++++++++++++

//  function aur arrow function dono ka main purpose same hai — code ko reusable banana aur execute karna.
// arrow function is denoted by =>
// theworking of the function and arrow function is same

let karanName = function (num1){    
        return num1+1
}
console.log(karanName(5))  // o/p is 6


const addTwo = (num1,num2)=>{
    return num1+num2

}
console.log(addTwo(2,5));  // o/p is 7

// implicite function for => 
    // you can aso write the => as well , it is only applicable for single line 
// i can remember it by no putting the curly braces in the => function

const subTwo = (num1,num2) => console.log( num1-num2,num1/num2 , 5+6 ); 
console.log(subTwo(2,6,(4,7)));

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ IMP  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// IF YOU WRITE A FUNCTION AND PUT CURLY BRACES {} IN IT THEN YOU MUST WRITE RETURN KEYWORD INIT
// NOT NECESSARY WHEN NOT PUTTING  THE CURLY BRACES


// if you want to return an object inside the function 
//  ({username:"karan"})  this is the syntax to return an object inside the function 

const name = () => ({username:"karan"})
console.log(name());

 

