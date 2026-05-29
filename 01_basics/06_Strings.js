const name = "karan"
const repocount =  50

console.log(name+repocount+"pandey");

// string interpolation 
// in this type we can concatinate the strings and make them upper lower and other operations etc.
console.log(`hello my name is ${name.toUpperCase()} and my repocount is ${repocount} and my surname is pandey`);

const gameName = new String("Valorant");

// console.log(gameName.toUpperCase());  // valorant is now in upper case.
// console.log(gameName.charAt(2)); // the charAt tells that in valorant what is the 2nd place in valorant that is l
// console.log(gameName.indexOf("l")); // indexof method is used to check in string which alphabet has came at what place.


const newString = gameName.substring(0,4) // the substring methos is used to divide the string into sub parts.
console.log(newString);

const anotherString = gameName.slice(-8,3) // the slice method is used to cut the string into parts 
// and we can also use negative values in slice method if i write -8 then the slicing will start from the end of the string.
console.log(anotherString);


// trim function is used to remove the leading white spaces from the string it also has trimstart and trimend function.

const newString1 = "    karan       "
console.log(newString1);
console.log(newString1.trimEnd());

// replace function is used to find the character or word in the string and replace it with the user input.

const url = " https://www.karan2505.com"
console.log(url.replace('2505',"pandey"))

// includes function is used to find whether a character or word or number is present in the string or not. if present it returnes true.
const doesincludes = "karanbhaiyapandey"
console.log(doesincludes.includes("karan"))

// split function is used to seperate the string which can be based on spaces,special symbols etc
// the output of split function is in the array.

const meraNaam = "karan-umashankar-pandey"
console.log(meraNaam.split('-',"u"))











