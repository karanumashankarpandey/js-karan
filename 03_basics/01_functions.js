// function basics

function myname() {
    console.log("k");
   console.log("a");
     console.log("r");
     console.log("a");
     console.log("n");
 }
 //myname() // it is used to print the function

function add2no (number1,number2,num3)
{
  let  result = number1+number2+num3
    return result
    
}
result = add2no(2,5,3)
//console.log(result);

function userLoggedIn(username){
    
    return `${username} just logged in welcome to the page`
     
}
//console.log(userLoggedIn("karan"));
//                       ^
// if you do not pass any value to userLoggedIn then it outputs udefined just logged in 



function userloggIn(userName="karan"){
    if (!userName) {
        console.log("please enter the user name");
        return
    }
    return `${userName} just loggedin thank you`
}
//console.log(userloggIn());

// meaning of (userName="karan") is that if i dont put any input then my default user name is karan
// and if i put any input then it will overwrite and  display it what i have written in log


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                                                 object used inside function

// rest oopeartor is denoted bh (...)

function CalculateCartPrice(val1,val2,...num1)
{
    return num1

}
//console.log(CalculateCartPrice(20,300,500,250,1500));

const user={
    username:"karan",
    price:"2000"

}
console.log(user);

// when we put object into the function we cannot directly put object name into function parameter 
// we need to make a variable and then assign it with (.) oprator 
// otherobject is a parameter which receives the object.

function userIntoFunction(otherObject)
{
    console.log(`the user name is ${otherObject.username} and the price is${otherObject.price}`);
    

}
userIntoFunction(user)

// we can also overwrite the username and the password
// i have created an object here
userIntoFunction
(
{
    username:"divya",
    price:"50000"
}
)


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//                                                ARRAY USED INSIDE FUNCTION

const MyNewArray=[100,200,300,400]

function ARRAYINSDEFUN(getarray)
{
    return getarray[3]
}
console.log(ARRAYINSDEFUN(MyNewArray));






function myfun(num1,num2)
{
    let num3= num1+num2
    console.log(`the addition of two numbers is${num3}`);
    
    
}
console.log(myfun(3,7));




 
 
 


