// function basics

function myname() {
    console.log("k");
   console.log("a");
     console.log("r");
     console.log("a");
     console.log("n");
 }
 myname() // it is used to print the function

function add2no (number1,number2,num3)
{
  let  result = number1+number2+num3
    return result
    
}
result = add2no(2,5,3)
console.log(result);

function userLoggedIn(username){
    
    return `${username} just logged in welcome to the page`
     
}
console.log(userLoggedIn("karan"));
//                       ^
// if you do not pass any value to userLoggedIn then it outputs udefined just logged in 



function userloggIn(userName="karan"){
    if (!userName) {
        console.log("please enter the user name");
        return
    }
    return `${userName} just loggedin thank you`
}
console.log(userloggIn());

// meaning of (userName="karan") is that if i dont put any input then my default user name is karan
// and if i put any input then it will overwrite and  display it what i have written in log






 
 
 


