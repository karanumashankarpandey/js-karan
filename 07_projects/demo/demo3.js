const calculate=document.querySelector('#calculate')

calculate.addEventListener('click',function(event){
    const audioFaah = new Audio()
    audioFaah.src="./audioFunnt/faaah.mp3"

    const happyaudio = new Audio()
    happyaudio.src = "./audioFunnt/happy-happy-happy-cat.mp3 "

    const fartaudio = new Audio()
    fartaudio.src="./audioFunnt/long-brain-fart.mp3"

    const meriJungaudio = new Audio()
    meriJungaudio.src="./audioFunnt/meri-jung-emotional.mp3"


    
   
    event.preventDefault();
    const height =parseInt (document.querySelector('.height').value)
    console.log(height);

    const weight = parseInt (document.querySelector('.weight').value)
    event.target

    const result = document.querySelector('.result')

    if(height===null||isNaN(height)||height<0){
        result.innerHTML= ` ${height} is not a valid height `
        audioFaah.play()

    }

    else if(weight===null||isNaN(weight)||weight<0){
        result.innerHTML =` ${weight} is not a valid weight `
        audioFaah.play()
    }

    else{
        const  bmi =  (weight / ((height*height)/10000))
        result.innerHTML = ` your bmi is ${bmi}`

            if(bmi<=18.6){
                result.innerHTML = ` you are under weight `
                meriJungaudio.play();
            }
            else if(bmi<24.6){
                result.innerHTML = ` you are normal weight `
                happyaudio.play();
             }
             else{
                result.innerHTML = ` you are FAAAAAAAATTTTTTTT `
                fartaudio.play();
             }
        
    }
})