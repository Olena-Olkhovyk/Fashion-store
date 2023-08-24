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

//Select container in which I will insert summer collection clothes
const productSummerContainer=document.querySelector(".products-container");
//Select container in which I will insert all of the products items
const allProductsContainer=document.querySelector(".all-items");

//Insert summer collection clothes to landing page(ind.html)
summerCollection.forEach((product)=>{
    productSummerContainer.innerHTML+= `
    <div class="pro" onclick="redirectToProduct('${product.id}');">
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
function redirectToProduct(product_id){
    window.location.href=`product.html?product_id=${product_id}`;
}

//Clear container
allProductsContainer.innerHTML='';
//Insert all of the product items to shop page
allProducts.forEach((product)=>{
    allProductsContainer.innerHTML+=`
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

