// Dates

const myDate = new Date()
console.log(myDate);  // o/p      2026-05-26T17:22:55.276Z

console.log(typeof myDate);  // the type of date is object.


console.log(myDate.toString()); // o/p        Tue May 26 2026 22:55:07 GMT+0530 (India Standard Time)

console.log(myDate.toISOString()); // o/p      2026-05-26T17:25:42.883Z

console.log(myDate.toJSON());// o/p        2026-05-26T17:25:42.883Z

console.log(myDate.toDateString());// o/p         Tue May 26 2026

console.log(myDate.toLocaleDateString()); // o/p     26/5/2026

console.log(myDate.toLocaleString()); // o/p        26/5/2026, 10:58:51 pm



// we can create the date by our own
const MyCreatedDate = new Date(2023,0,25) 
console.log(MyCreatedDate.toDateString()); 

const mycreateddate1 = new Date("05-2-2005")
console.log(mycreateddate1.toLocaleString());

// creating a timestamp

const mytimestamp = Date.now()
console.log(mytimestamp); // the output will be in milliseconds.

// get time function is used to get the time from the date which you have given 
console.log(mycreateddate1.getTime());  

// if you have to convert milli seconds into seconds then we can use the below formula
// this formula is pretty much similar to math in 07 file of js

const milliTOseconds = Date.now()
console.log(Math.floor(milliTOseconds/1000));

// you can also retrive separate information from date such as month,year,day etc.
let mydate = new Date(2005,5,2)
console.log(mydate.getMonth());
console.log(mydate.getFullYear());
console.log(mydate.getDay());

// jab bhi hum locale string log ke andar print karte hein tab mon sirf short mein ata hain 
// we can change it by our preference 
// and there are many more types for it to change

let localeExplore = new Date(1997,5,12)
console.log(localeExplore.toLocaleString());
// by this function the thur is now thursday.
console.log(localeExplore.toLocaleString('default',{
    weekday:"long"
    
}));


















