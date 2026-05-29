// arrays
// in js the array is the group of elements which does not have similar datatypes 
// unlike other array in programming languages 
// array in js can contain string,number,integer,float values in single array.


// this is the standard declaration of array in js
 const myarray = [0,1,2,3,4,5]
 console.log(myarray);


// // in js array can contain multiple elements of different datatypes 
 let myarry1 = [0,1,2,3,4,5,"karan",3.14,'K']
 console.log(myarry1);

 const myarray2 = [0,1,2,3,4,5]
 console.log(myarray2[0]);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++ ARRAY METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// push ,thod is used to add element in the array at the last position
// pop is used to delete the last element from the array

 const okarray = [0,1,2,3,4,5,6,7,8,9]
 okarray.push(10)   //    o/p        0, 1, 2, 3, 4,5,6,7,8,9,10
  okarray.push(11)   //    o/p        0, 1, 2, 3, 4,5,6,7,8,9,10,11

  okarray.pop()     //    o/p        0, 1, 2, 3, 4,5,6,7,8,9,10

//   unshift method is used to add the element in the array at the starting index of array which 0

  okarray.unshift(12)    //    o/p        12,0, 1, 2, 3, 4,5,6,7,8,9,10

  // shift method is same like pop 
  okarray.shift()    
// console.log(okarray);

let arrayinfo =   [0,1,2,3,4,5,6,7,8,9]
console.log(arrayinfo);

// includes methos is used to check whether the element in the array exist or not 
// the o/p of input methos is true or false.

console.log(arrayinfo.includes(5)); // o/p true



// indexof method is used to search the index of element in the array
// if element is present in array it outputs the index of it 
// if not present in the array it outputs -1 

 console.log(arrayinfo.indexOf(8)); 
 console.log(arrayinfo.indexOf(15));  // o/p -1



//   join method is used to combine both the array and the variable in which the first array is stored is converted into string
//  JavaScript me join() method array ke elements ko string me convert karta hai

 const karanArray = arrayinfo.join()
 console.log(karanArray);           // now arrayinfo elements are stored in karanArray \
                                  // o/p of karanArray is in string.
                                  //  o/p   "0,1,2,3,4,5,6,7,8,9"

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//slice method is used to split the array . we give the range in slice and within that range the array is seperated.

console.log("A",arrayinfo);

const arrslice = arrayinfo.slice(1,3)
console.log("array after slice = ",arrslice); // [ 1, 2 ]

console.log("B",arrayinfo);


// splice method is used to remove the element from the array  in a range 
// for eg (1,3) so from index 1 to 3 the elements will be removed from the array



const arrslice1 = arrayinfo.splice(1,3)
console.log("c",arrayinfo); 
                                                            /* c [
                                                                    0, 4, 5, 6,
                                                                    7, 8, 9
                                                             ] */
console.log(arrslice1);   // [ 1, 2, 3 ] 








