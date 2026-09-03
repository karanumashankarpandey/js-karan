// singleton

// objects

// is yo want to insert a symbol in the object then we need to write that symbol name variable inside the square brackets inside object
const mysym = Symbol("hello my name is")


const jsuser={
    name: "karan",
    "surname": "pandey",
    [mysym]:"hello",
    age: "22",
    address:"baramati",
    isloggedIN: false
}

console.log(jsuser.name); // karan
console.log(jsuser[mysym]);

// if you want to change the name or overwrite it in the object then we can use below
jsuser.name="divya"
console.log(jsuser.name); //divya

//  object.freeze method is used to lock or freeze any name or anything in the object
Object.freeze(jsuser) // if you will change the name then it will not change it
jsuser.name="sanju"
console.log(jsuser);


jsuser.greetings = function()
{
    console.log("hello jsuser");
}
console.log(jsuser.greetings());


// if you want give the reference of another object then you can give it by this method
jsuser.greetings2 = function()
{
    console.log(`hello jsuser my nane is ${this.name}`);
    
}
console.log(jsuser.greetings2());











