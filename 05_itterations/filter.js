//  filter() JavaScript ka ek array method hai jo array me se sirf woh elements return karta hai jo condition ko satisfy karte hain.
// filter()-> condition lagao , agar condition match hua , then it will be printed in the new array.

// const arr = [1,2,3,4,5,6,7,8,9,10]

// arr.filter( (i)=>  {
//     i>5
//     console.log(i);
    
// } )

const nums = [1,2,3,4,5,6,7,8,9,10]

const result = nums.filter( (num) => num >  5 )
//console.log(result);      // [ 6, 7, 8, 9, 10 ]



let books = [
    {
        title:' tables-book ', genre:' maths ', publish:'1987',
        edition:'2010'
    },

    {
        title:' know your history ', genre:' history ', publish:'1986',
        edition:'1996'
    },

    {
        title:' book1 ', genre:' science ', publish:'1985',
        edition:'2016'
    },

    {
        title:' book2 ', genre:' english ', publish:'1990',
        edition:'2005'
    },


    {
        title:' book4 ', genre:' science ', publish:'1999',
        edition:'2019'
    },
]

let bok = books.filter( (b00k)=>{
   return  b00k.edition==='2019'
 }  )


 bok = books.filter( (b00k)=> b00k.edition>='2005'  )

bok = books.filter( (b00k)=>b00k.publish>'1985' && b00k.genre==' history '  )


bok = books.filter( (b00k)=> {
    return   b00k.genre==' science ' && b00k.edition!='2016'

} )
console.log(bok);