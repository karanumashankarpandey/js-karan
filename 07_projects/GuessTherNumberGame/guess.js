const randomNumber=parseInt(Math.random()*100+1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const PreviousGuess = document.querySelector('.guesses')
const GuessRemaining = document.querySelector('.Remaining')
const LowOrHigh = document.querySelector('.lowORhigh')
const StartOver = document.querySelector('.resultParas')
const p = document.createElement('p')


let prevGuess = [];
let GuessRemain = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click',function (event){
        event.preventDefault();
       const guess=  parseInt(userInput.value);
       console.log(guess);
       
       ValidateGuess(guess)

    })    // this if condition is used to check whether the user can plau the game or not
    
}

function ValidateGuess(guess) {

    if (isNaN(guess)||guess<0||guess===''||guess>100) {
        StartOver.innerHTML = `please add a valid number  `    
    }
    else{
        prevGuess.push(guess)
        if (GuessRemain===11) {
            DisplayGuess(guess)
            DisplayMessage(` Game over Random guess number is ${randomNumber}`)
            endGame()
        }
        else{
            DisplayGuess(guess)
            CheckGuess(guess)
        }
        
    }
  
}
function CheckGuess(guess){
    if(guess===randomNumber)
    {
        DisplayMessage(` congratulation you have sucessfully guessed the number `)
        endGame()
    }

    else if (guess<randomNumber){
           DisplayMessage(` the number is greater than ${guess} `)
    }

    else if (guess>randomNumber) {
            DisplayMessage(` the number is less than ${guess}`)
    }

}

function DisplayGuess(guess) {
    userInput.value=' '     // it is used for clean up of the data elements
    PreviousGuess.innerHTML +=`${guess} `
   GuessRemain++;
   GuessRemaining.innerHTML = `${11-GuessRemain} `;   
}
function DisplayMessage(message){
    LowOrHigh.innerHTML = ` ${message} `

}

function endGame() {
        userInput.value=''       // it is used the clear the data
        userInput.setAttribute('disabled','')
        p.classList.add('button')
        p.innerHTML =`<h2 id="newGame"> start a new game </h2>`
        StartOver.appendChild(p)
        playGame =false
       newGame()

}

function newGame(){
 const newGameButton =  document.querySelector('#newGame')
 newGameButton.addEventListener('click',function (button){
    userInput.value=''
    const newRandomNumber = parseInt(Math.random()*100+1)
    prevGuess =[]
    GuessRemain =1
    userInput.removeAttribute('disabled')
    StartOver.removeChild(p)

    playGame = true

 })

   

}