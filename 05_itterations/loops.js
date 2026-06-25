// let n  = 10
// for (let i = 0; i <= n; i++) {
//         if(i==9)
//         {
//             break;
//         }


//         console.log(i);

         
// }

// nested for loop 

// for(i=0;i<=10;i++)
// {
//    // console.log(`outer loop value:${i}`);
//     for (let j = 0; j <=10; j++) {
//       //  console.log(`inner loop is ${j} and outter loop is ${i}`);
//       console.log(i + '*' + j + '=' + i * j );
      
        
//     }
// }


// let myArray = [0,1,2,3,4,5,6,7,8,9,10]

// for (let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i]);
    
// }

// agar break statement true ho gaya toh direct loop ke bahar ata hai aur loop finish hojata hai
for(i=1;i<=20;i++)
{
      if(i==5)
    {  console.log("  5 is detected ");
        break;
    }
    console.log(` the value of i is ${i}`);
  
    
}

// continue statement continue ka use loop ke current iteration ko skip karne ke liye hota hai aur loop ko next iteration par bhej deta hai.
for(i=1;i<=20;i++)
{
      if(i==5)
    {  console.log("  5 is detected ");
        continue
    }
    console.log(` the value of i is ${i}`);
  
    
}
