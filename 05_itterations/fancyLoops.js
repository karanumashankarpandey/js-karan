// for of loop
// for of loop will automatically detect the size of array and how many itterations to perform and no need to do i++
// for of loop is used i array,string,
// object can also be used but it has different way to use it 

// let arr = [1,2,3,4,5]

// for (const value of arr) {
//         console.log(` the value of the arrays are ${value}  `);
        
// }


// let greetings = "hello world!"
// for (const greet of greetings) {
//     if (greet==" ") {
//         console.log(" the space is printed ");
        
//         continue
//     }
//     console.log(` the greetings are ${greet}  `);
    
    
// }

// map is a method same as array , which does not hold duplicate values in it 

let map = new Map()

map.set('IN',"india")
map.set('USA',"united states of america")
map.set('FR',"france")
// map.set('FR',"france")   // still the france is printed once cause it does not hold duplicate values.


for (const [value,keys] of map) { //  [value,keys] is used to get the values of "IN" and "india"
        console.log(value,keys);
        
}
// console.log(map);

let games = {
    'game1':"NFS",
    'game2':"GTA5"
}
for (const [game,values] of games) {
    console.log(game,values);     // error te object is not itteratable
}
