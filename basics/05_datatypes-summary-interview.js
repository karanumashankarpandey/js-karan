//there arem two types of datatypes in js 
//primitive ,non-primitive

                                                // PRIMITIVE 

                        // primitve are of call by value means Primitive data types wo hote hain jo direct value store karte hain (memory me seedha value hota hai, reference nahi).

                        //there are total 7 types 
            

// string , number , boolean , null , undefined,symbol,bigint

// example of symbol
    const id = Symbol('123')
    const anotherId = Symbol('123')
    console.log(id==anotherId);
    



                                                // non-primitve(reference)
                                            
                        //  non primitve are of call by reference means Ye complex data store karte hain aur reference (address) ke through access hote hain.

                        // there are three types 

// object ,array ,function

// array declaration

let myarr = ["karan","umashankar","sanju","duvya"];

// object declaration means {} inside the curly braces it is denoted as object.

const obj = {
    name:"karan",
    surname:"pandey",
    age:"22"
}


// functions declaration 
const myfunction=function (){
    console.log("hello world")
}

// the link below is used for to check the dataypes and their outputs.

// https://262.ecma-international.org/5.1/#sec-11.4.3