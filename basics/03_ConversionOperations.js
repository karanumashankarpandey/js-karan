let score = "33abc" // the number is in string 
//console.log(typeof score);

let valueInNumber = Number(score); // it is used to convert string number into number.
//console.log(valueInNumber);
//console.log(typeof (valueInNumber));

// "33" => 33
//"33abc"=> NaN   it is called not a number
// null => 
// true => 1
// false => 0


let isLoggedIn = " karan "

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
// 1=> true , 0=> false
// "" => false 
//  " " => true 
//  " karan "=> true.

let stringSomeNumber = 33

let stringNumber = String(stringSomeNumber);
console.log(typeof(stringNumber));

let str1 = "karan"
let str2 = " pandey" // if we give the space before pandey then the output will also be space out after karan  
let str3 = str1 + str2
console.log(str3);

console.log("1"+2);
console.log(1+"2");
console.log("1"+2+2); // is the string is  first then all the remaining elements are treated as string 
console.log(1+2+"2");// is the string is on the last then first 2 elements are added and after that string is printed.

let gamecounter = 100
++gamecounter
console.log(gamecounter);




