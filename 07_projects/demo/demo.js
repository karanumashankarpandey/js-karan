
const container = document.querySelector('.container')
const button = document.querySelectorAll('.button')
const body = document.querySelector('body')

container.addEventListener('click',function(addEventListener){
        event.preventDefault();
         event.target

        if(event.target.id==='blue-pink')
        {
            body.style.background='linear-Gradient(to right,Blue,pink)';
        }

       else if(event.target.id==='purple-pink'){
                body.style.background ='linear-Gradient(to right,purple,pink)';
        }

        else if(event.target.id==='insta'){
            body.style.background ='linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)';
        }

        else if(event.target.id==='midnight-sky'){
            body.style.background = 'linear-gradient(135deg, #232526, #414345)';
        }
})





