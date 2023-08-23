const navMenu=document.getElementById('navbar');
const hamburger=document.querySelector('.hamburger');
const closeMenu=document.getElementById('closeMenu');
if(hamburger){
    hamburger.addEventListener('click',()=>{
        navMenu.classList.add('active')
    })
}
if(closeMenu){
    closeMenu.addEventListener('click',()=>{
        navMenu.classList.remove('active')
    })
}

