burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
rightnav = document.querySelector('.rightnav')
navlist = document.querySelector('.navlist')



burger.addEventListener('click', ()=>{
    rightnav.classList.toggle('v-class-res')
    navlist.classList.toggle('v-class-res')
    navbar.classList.toggle('nav-height-res')
})