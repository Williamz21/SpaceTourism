const hamburguer = document.querySelectorAll('.hamburguer');
const navbar = document.querySelector('.navbar');

hamburguer.forEach(element => {
    element.addEventListener('click',()=>{
        navbar.classList.toggle('showbar')
        console.log(9)
    })
});
