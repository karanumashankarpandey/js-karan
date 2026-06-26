// for each loop 
let coding = ["js","rd","css","java","python"]

coding.forEach( (lang)=> {
    console.log(lang);
    
} )
// in for each loop we have to create a function with no name 
// for each loop does not return anything its always undefined.

coding.forEach( (lang,index,arr)=>{  //we can also get index and whole array in for each loop
    console.log(lang,index,arr );
    
} )








let code  = [ {
    languageName: " javascript ",
    fileName:"js"

} ,
{
     languageName: " python ",
    fileName:"py"

},

{
     languageName: " java ",
    fileName:"java"

} ]
code.forEach( (item)=>{
    console.log(item.fileName);
} )