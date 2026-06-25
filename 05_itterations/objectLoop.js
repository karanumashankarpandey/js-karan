// for in loop is not only used for object but it is also used for object

let myobject = {
    js : "javascript",
    py:"python",
    java:"java",
    react:"react"    
}
for (const key in myobject) {
   console.log(` ${key} shortcut is ${myobject[key]} `);
  
}
//          o/p
//  js shortcut is javascript 
//  py shortcut is python 
//  java shortcut is java 
//  react shortcut is react 

let myarr = ["sun","mon","tue ","wed"]

for (const key in myarr) {
    console.log(myarr[key]);
    
}