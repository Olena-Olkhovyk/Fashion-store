//Select cart icon to open it 
const openCart=document.querySelector(".onl-cart");
//Select close-icon to close cart 
const closeCart=document.querySelector(".close");
//Select cart container
const cartCont=document.getElementById('cart');
//Select container for items in the cart
const cartItemsCont=document.querySelector(".cart-items");
//Container for total price and items in container
const subtotalCont=document.querySelector('.subtotal');
//Select container for storing amount all of the items in cart
const totalItemEl=document.querySelector('.total-items-in-cart');

//Opening cart
openCart.addEventListener('click',()=>{
    cartCont.style.display='block';
//Close menu when open cart 
    navMenu.classList.remove('active')
})
//Closing cart
closeCart.addEventListener('click',()=>{
    cartCont.style.display='none'
})

//Create a variable for storing there all of our products
let cart=JSON.parse(localStorage.getItem("CART"))||[];
updateCart();

function addToCart(id){
    //Check if item is already in the cart
    if(cart.some((item)=>item.id===id)){
        //Then we increase item in cart
        changeNumberOfUnits('plus',id)
    }else{
    //Looking for item we pressed in items.js snd if its not in cart we push it to cart
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
    renderSubtotal()
    localStorage.setItem("CART",JSON.stringify(cart));
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
            <div class="img-container"><img src="${item.imgSrc}" alt="" /></div>
            <div class="name-container"><h4>${item.name}</h4></div>
            <div class="unit-price"><small>$</small>${item.price}</div>
            <div class="units">
            <button onclick="changeNumberOfUnits('minus', ${item.id})">
              <div class="btn minus" >-</div>
            </button>
              <div class="number">${item.numberOfUnits}</div>
              <button onclick="changeNumberOfUnits('plus', ${item.id})">
              <div class="btn plus" >+</div>
            </button>
            </div>
          </div>
        </div>
        `
    })
}

//Function which allows to change amount of items in cart
function changeNumberOfUnits(action,id){
     cart=cart.map((item)=>{
        let oldNumberOfUnits=item.numberOfUnits;
        if(item.id===id){
        if(action==='plus'&& oldNumberOfUnits<item.inStock){
            oldNumberOfUnits++;
        }else if(action==='minus' && oldNumberOfUnits>1){
            oldNumberOfUnits--;
        }
        }
        localStorage.setItem("CART",JSON.stringify(cart));
        return{
            ...item,
            numberOfUnits:oldNumberOfUnits
        } 
     })
     renderCart()
     renderSubtotal()
}

 //Function which count total price and total items in cart

  function renderSubtotal(){
    let totalPrice=0,totalItems=0;
    cart.forEach((item)=>{
        //Count total price - price of each item multyplying on amount items in total
        totalPrice+=item.price*item.numberOfUnits;
        totalItems+=item.numberOfUnits;
    })
    subtotalCont.innerHTML=`
    Subtotal (${totalItems} items): $${(totalPrice.toFixed(2))}
    `
    //Insert on page amount of items in cart
    totalItemEl.innerHTML=totalItems;
}

//Remove items from cart
function removeItem(id){
    //With filter we leave in cart only those items which isnt the same id with id wich we press
    cart=cart.filter((item)=>item.id!==id)
    updateCart();
}