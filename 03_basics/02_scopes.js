

//let and const are block-scoped → Sirf us {} block ke andar accessible hote hain.

// function mylet()
// {
//    let  a = 100

//     console.log(a);    // 100
// }
// console.log(a); // error a not found



// function myconst()
// {
//    const  b = 100

//     console.log(b);    // 100
// }
// console.log(b); // error b not found

// var is function-scoped → Agar function ke andar declare hua hai, to poore function mein accessible hoga. Agar function ke bahar declare hua hai, to global ho jayega.

// var c =100

// function myvar()
// {
//    var  c = 100

//     console.log(c);    // 100
// }
// myvar()
// console.log(c);


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// nested scopes


// so in nested scopes the inner(CHILD) function can take the access of outter(PARENT) but outter cannot take the access of inner function .
// function one()
// {
//     const username = "karan"
   
    
//     function two() {

//         const website = "github"
//         console.log(username);
//     }
//     two()

// }
// one()


if(true){
    const username = "karanpandey"
    if (username==="karanpandey") {
        const website = "  youtube "
       // console.log(username+website);
    }
    //console.log(website);  // it will show error becoz it is outside of the second if condition 
    

}
// console.log(username);    // it will show error becoz it is outside of the first if condition 


//++++++++++++++++++++++++++++++++++++++++++++++ INTERESTING ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.  so in first function we have created in the standar way
// so in standard function we access the function before initialization  

console.log(addOne(5))   // o/p is 6
function addOne(num)
{
    return num+1
}



//2. in this function , we have created it and assigned it to the variable , this is totally different part of creating a function
// in this type we cannot  access the function before initialization  .

console.log(addTwo(5))      //  Cannot access 'addTwo' before initialization
const addTwo = function (num)
{
    return num+2
}

