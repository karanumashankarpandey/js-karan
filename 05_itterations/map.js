/*  map() ek array method hai jo har element par operation perform karta hai aur ek naya array return karta hai.

map() = Har element ko modify karo aur ek naya array banao. */

let mynumbers = [1,2,3,4,5,6,7,8,9,10]

// let result=mynumbers.map( (num)=>{
//     return num+10
  
// } )
//   console.log(result);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/// CHAINIG OF METHODS

//Chaining ka matlab hai ek method ke baad dusra method lagana, kyunki pehla method kuch return karta hai aur us returned value par next method call ho jata hai.


let mynums = [1,2,3,4,5,6,7,8,9,10]

let rs = mynums.map( (num )=>num*10)
    .map( (num )=> num+1 )
    .filter( (num)=>  num>41  )


console.log(rs);


// in first .map method the num is multiplied by 10   o/p = 10,20,30...
// in second .map the num is added by 1  o/p = 11,21,31...
// in filter method it checks whether the num>41  o/p = 51,61,71...

