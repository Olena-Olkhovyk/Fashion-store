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

//Clear container
allProductsContainer.innerHTML='';
//Insert all of the product items to shop page
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

const detailCont=document.querySelector('.detailCont');

detailProducts.forEach((prod)=>{
    detailCont.innerHTML+=`
    <div class="single-pro-image">
    <img
      src="${prod.imgSrcBig}"
      width="100%"
      id="mainImg"
      class="firstImg"
      alt="air force"
    />
    <div class="small-imgs">
      <div class="small-img-col">
        <img
          src="${prod.imgSrcBig}"
          width="100%"
          alt="air force"
          class="small-img"
        />
      </div>
      <div class="small-img-col">
        <img
          src="${prod.imgSrc2}"
          width="100%"
          alt="air force"
          class="small-img"
        />
      </div>
      <div class="small-img-col">
        <img
          src="${prod.imgSrc3}"
          width="100%"
          alt="air force"
          class="small-img"
        />
      </div>
      <div class="small-img-col">
        <img
          src="${prod.imgSrc4}"
          width="100%"
          alt="air force"
          class="small-img"
        />
      </div>
    </div>
  </div>
  <div class="single-pro-details">
    <h3>${prod.name}</h3>
    <h2>${prod.price}</h2>
    <select>
      <option>Select size</option>
      <option>XL</option>
      <option>XXL</option>
      <option>Small</option>
      <option>Large</option>
    </select>
    <input type="number" value="1" />
    <button>Add to cart</button>
    <h2>Product details</h2>
    <p>
      <span
        >
        
        price charged for its high-end shoes, using genuine leather is
        natural.Air Force Ones are made of a combination of leather and
        rubber1. Some parts of the shoe also include suede, canvas, and
        other different materials1. The shoes are typically made of EVA
        foam, lightweight plastic and mesh fabrics2. The Nike Air technology
        makes the soles of these shoes flexible, durable, and elastic3. The
        original high-top Air Force 1 is intended for intense sport and the
        grip of the concentric circle outsole makes them perfect for use on
        the court3.
      </span>
    </p>
  </div>
    `
})

