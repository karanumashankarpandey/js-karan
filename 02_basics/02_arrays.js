// when we push array inside array the first array has the index till 2 and when we push anoyher array ,
// the first array  has index till 2 and at the third index the another array will print 

const marvel_heros = ["ironman","spiderman","thor"]

const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);     // o/p [ 'ironman', 'spiderman', 'thor', [ 'superman', 'flash', 'batman' ] ]
//                                 //        0            1           2        3  
// console.log(marvel_heros[3][2]);
// batman

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// concat method is used to merge 2 or more array 
// for using the concat method we need to put it in the new variable.

 //const allHeros =marvel_heros.concat(dc_heros)
 //console.log(allHeros);  // [ 'ironman', 'spiderman', 'thor', 'superman', 'flash', 'batman' ]


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// spread method is denoted by ... three dots which is used to merge or spread the element in the array
// concat and spred methods working is same.

const allNewHeros = [...marvel_heros,...dc_heros]
console.log(allNewHeros);  // [ 'ironman', 'spiderman', 'thor', 'superman', 'flash', 'batman' ]

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// flat method is used to convert nested array into  one single array (flatten) 
// depth in the flat method is used to tell how manynesting levels we have to remove
// we can use flat(infinity)  it automatically detects the no.of depths in the array and flattens it  into the single array. 

const arr = [1,2,3,4,[5,6,[7]],9,[10]]
console.log(arr.flat(Infinity));




// is we want to convert any string,object etc into array then we can convert it by
//array.from() method
// array.is array method is used to check whether it is array or not


console.log(Array.isArray("karan"));
console.log(Array.from("karan"));  //[ 'k', 'a', 'r', 'a', 'n' ]

// interesting concept
console.log(Array.from({name:"karan"})); // the output is [] because we have not mentioned that we have to make array of keys or values .

// array.of method is used to create array of multiple variables

let score = 100
let score1 = 200
let score2 = 300

console.log(Array.of(score,score1,score2));   // [100,200,300]




