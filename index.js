let ratings = document.querySelectorAll('.circle'); 
let button = document.getElementById('btn'); 
let cardComponent = document.querySelector('.card-component'); 
let nextcardComponent = document.querySelector('.next-card-component');
let span = document.getElementById('rating'); 



for(let i=0; i<ratings.length; i++){


    ratings[i].addEventListener('click', () =>{
        let rate = ratings[i].innerHTML; 

        for(let i=0; i<ratings.length; i++){
            ratings[i].classList.contains('selected'); 
            ratings[i].classList.remove('selected'); 
        }

        ratings[i].classList.add('selected'); 

        button.addEventListener('click', () => {
            cardComponent.style.display ='none'; 
            nextcardComponent.style.display ='block'; 
            span.innerHTML = rate; 
        })
    })
}