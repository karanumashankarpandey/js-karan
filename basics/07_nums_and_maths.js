const no = 500
console.log(no);

// new keyword is used to create a new object
const balance = new Number(15000)
console.log(balance);

// // tostring methos is used to convert integer into string.
// // after writing to string we can write more additional properties of string in it.
 console.log(balance.toString())
 console.log(balance.toString().length);


// // to fixed function is used to give 2 zeros after the decimal point
 console.log(balance.toFixed(2));

 // toprecision function is used when the user give the input as 123.9877 so to get the precise value we use it.
 // is i write toprecise(3) tab float value ke dot ke pehele suppose 3 value hai toh uska precise value dega
 // if hum 4 dein and dot ke pehle 3 value he hain toh ye exponential value dega.
 const precise = 123.8897
 console.log(precise.toPrecision(3));

 // toLocaleString this function is used to give the numbers comma so we can understand the big numbers.
const hundreds = 1000000
console.log(hundreds.toLocaleString());


//++++++++++++++++++++++++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math);

// absolute value is used to convert negative values into positive and does not convert positive to negative
console.log(Math.abs(-4));

// round function is used to roundoff the number if less that .5 then same number else next number.
console.log(Math.round(5.6));

//ceil function means ceilling or top (4.2) if it is greater than 4 then return 5
console.log(Math.ceil(4.2));

// floor function means floor or bottom (4.9) if it is 4 then returns the lowest value
console.log(Math.floor(4.9));

// min is used to find the minimum value in the array
console.log(Math.min(4,2,6,3,1,0));

// max is used to find the maximum value in the array
console.log(Math.max(4,2,6,3,1,0));

//random funtion is used to give the random number which is between 0 and 1


console.log(Math.random());

// if we want random number between 1 to 10
 console.log(Math.random()*10);

// if we want random number but no 0 as starting 
console.log(Math.random()*10+1);

//+++++++++++++++++++++++++++++++++++++++++++++++ IMP FORMULA +++++++++++++++++++++++++++++++++++++++++++++++++++++

// if you want random number netween 10 and 20 then we will need a small formula

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max-min+1))+min);

// in formula (max-min+1) means max-min we have the range between 10 and 20 and added 1 so it will not give us 0 values
// after that +min is used becoz it will start from the minimum 10 so.








