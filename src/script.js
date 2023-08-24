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

//Select container in which I will insert products from items.js
const productSummerContainer=document.querySelector(".products-container");
const allProductsContainer=document.querySelector(".all-items");

summerCollection.forEach((product)=>{
    productSummerContainer.innerHTML+= `
    <div class="pro">
          <img
            src="${product.imgSrc}"
            alt="air force sport shoes"
          />
          <div class="description">
            <p>${product.brand}</p>
            <h4>${product.name}</h4>
            <h3>${product.price}$</h3>
          </div>
          <a href="#"><i class="fa-solid fa-cart-shopping cart"></i></a>
        </div>
    `
})

allProducts.forEach((product)=>{
    allProductsContainer.innerHTML+=`
    <div class="pro" onclick="window.location.href='product.html';">
          <img
            src="${product.imgSrc}"
            alt="air force sport shoes"
          />
          <div class="description">
            <p>${product.brand}</p>
            <h4>${product.name}</h4>
            <h3>${product.price}$</h3>
          </div>
          <a href="#"><i class="fa-solid fa-cart-shopping cart"></i></a>
        </div>
    `
})