// reduce() ek array method hai jo poore array ko reduce karke ek single value return karta hai.

const myarr = [1,2,3,4,5,6,7,8,9,10]

const result = myarr.reduce( (previoueVal,currentVAl)=> {  // current val array ka first element hai  
      console.log(` the previous val is${previoueVal} and current val is ${currentVAl}`);
       return previoueVal+currentVAl     // previousval (0) + currentval (1)  = 1 
      
},0 )      // this is initial value for previous value
//console.log(result);

/*   o/p 
 the previous val is0 and current val is 1
 the previous val is1 and current val is 2
 the previous val is3 and current val is 3
 the previous val is6 and current val is 4
 the previous val is10 and current val is 5
 the previous val is15 and current val is 6
 the previous val is21 and current val is 7
 the previous val is28 and current val is 8
 the previous val is36 and current val is 9
 the previous val is45 and current val is 10 */

let shoppingCart = [
    { 
        coureseName: " js course",
        price:2999
     },

        
    { 
        coureseName: " py course",
        price:999
     },

    { 
        coureseName: " java course",
        price:99
     },

    { 
        coureseName: " mobile dev course",
        price:8999
     },

    { 
        coureseName: " html course",
        price:2999
     },
]

let rs = shoppingCart.reduce((accumilator,item)=>
{
        return accumilator+ item.price
},0
)
console.log(rs);


