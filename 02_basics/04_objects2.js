// non singleton

// const tinderuser = new Object()
// {

// }
// console.log(tinderuser);

// we can also create the objects by
const tinderuser ={} 
{
   tinderuser.id = "123abc",
   tinderuser.name = "karanpandey",
   tinderuser.isloggedin = false
console.log(tinderuser);
}


// nested object syntax
const anotheruser =
{
    email : "karan2505@gmail.com",
    fullname:{
        username:{
            firstname: "karan",
            lastname: "pandey"
        }
   }
    
};
 console.log(anotheruser)

// combining multiple objects
//Object.assign method is used to   combining multiple objects  like we used to do while combining the array.

const obj1 ={
    1:"a",2:"b"
 } 
 const obj2 ={
    3:"a",4:"b"
 } 

 const obj3 = Object.assign({},obj1,obj2) // the {} is known for target value and after that {} it is known as source value.
 console.log(obj3);

 // you can use spread method for combining multiple objects

 const obj4 = {...obj1,...obj2}
 console.log(obj4);

console.log(tinderuser);
console.log(Object.keys(tinderuser))   // keys method returns the name of the column data
//[ 'id', 'name', 'isloggedin' ]

console.log(Object.values(tinderuser)); // values returns the data inside the column
// [ '123abc', 'karanpandey', false ]

console.log(Object.entries(tinderuser));// entries returns both column name and the data
// [ 'id', '123abc' ],
 // [ 'name', 'karanpandey' ],
  //[ 'isloggedin', false ]




   
 



