//Select cart icon to open it 
const openCart=document.querySelector(".onl-cart");
//Select close-icon to close cart 
const closeCart=document.querySelector(".close");
//Select cart container
const cartCont=document.getElementById('cart')

//Opening cart
openCart.addEventListener('click',()=>{
    cartCont.style.display='block';
})
//Closing cart
closeCart.addEventListener('click',()=>{
    cartCont.style.display='none'
})