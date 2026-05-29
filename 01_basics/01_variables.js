    const accountId = 2505
    let accountEmail = "Karankp2505@gmail.com"
    var accountPassword = "karan9028877872"
    accountCity = "Baramati"

    // accountId = 1233 // this is not allowed becoz on upper side const variable is used.
    accountEmail = "pumashankar@gmail.com"
    
    accountPassword = " 1233214323"

    accountCity = "pune"

  let  accountState;

    console.log(accountId);
    console.log(accountEmail);
    console.log(accountPassword);
    console.log(accountCity);
    console.log(accountState);
    

    /*  
    prefer not to use var variable
    becoz of issue in block scope and funcltional scope.
    
    */

    console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
    
    
    
    