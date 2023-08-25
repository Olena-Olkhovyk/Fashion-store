//Select cart icon to open it 
const openCart=document.querySelector(".onl-cart");
//Select close-icon to close cart 
const closeCart=document.querySelector(".close");
//Select cart container
const cartCont=document.getElementById('cart');
//Select container for items in the cart
const cartItemsCont=document.querySelector(".cart-items");

//Opening cart
openCart.addEventListener('click',()=>{
    cartCont.style.display='block';
})
//Closing cart
closeCart.addEventListener('click',()=>{
    cartCont.style.display='none'
})

//Create a variable for storing there all of our products
let cart=[];

function addToCart(id){
    //Check if item is already in the cart
    if(cart.some((item)=>item.id===id)){
       alert('Is already in cart')
    }else{
    //Looking for item we pressed in items.js
     let item=allProducts.find((product)=>product.id===id)
     //Adding item to cart
     cart.push(
        {
        //Copy all of the old properties from item
        ...item,
        //Add new property to be able to see how many the same product items we have in cart
        numberOfUnits:1
        }
        )
    }
    updateCart();
}

function updateCart(){
    renderCart();
}

//Insert items into cart container
function renderCart(){
    //Clear itemContainer for not having multiply items in cart
    cartItemsCont.innerHTML="";
    cart.forEach((item)=>{
        cartItemsCont.innerHTML+=`
        <div class="cart-item">
          <div class="items">
            <a href='#' onclick='removeItem(${item.id})')><i class="fa-solid fa-xmark"></i></a>
            <img src="${item.imgSrc}" alt="" />
            <h4>${item.name}</h4>
            <div class="unit-price"><small>$</small>${item.price}</div>
            <div class="units">
            <button>
              <div class="btn minus" >-</div>
            </button>
              <div class="number">1</div>
              <button>
              <div class="btn plus" >+</div>
            </button>
            </div>
          </div>
        </div>
        `
    })
}