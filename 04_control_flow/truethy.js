const userMail = "karankp2505@g,ail.com"

if(userMail==true)
{
    console.log(" got user email ");
    
}
else{
    console.log("dont have user email ");
    
}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*         
    SOME FALSY VALUES ARE:-
    false
    NaN
    Bigint 0n
    0
    -0
    ""
    null

*/

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/* 
        SOME TRUETHY VALUES ARE
        true
        " "
        function(){}
        []
        {}
        "0"
        'false'
*/

// if you want to check whether the array is  empty or not 

let ArraEmpty = []
if(ArraEmpty.length===0)
{
    console.log(" the array is empty ");
    
}

// if you want to check whether the object is empty or not

let objectIsEmpty = {}       

if (Object.keys(objectIsEmpty).length===0) {
    console.log(" the object is empty");
    
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Nullish Coalescing Operator (??) ka use tab hota hai jab aap kisi variable ki value null ya undefined hone par ek default value dena chahte ho.

let val1 = 5 ?? 10
console.log(val1);

let val1 = NaN ?? undefined
console.log(val1);

let val1 =  undefined ?? 15  // here the first value is undefined so the another value which is 15 , is used   
console.log(val1);



//                                                   imp
// if in first undefined is written , then ?? this operator gives the another value



console.log(undefined??"guest");

