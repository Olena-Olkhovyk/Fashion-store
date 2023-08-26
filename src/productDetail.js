//Accept parametr from url
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const productId = urlParams.get("product_id");
//Select container where i store detail info of each products item
const detailCont = document.querySelector(".detailCont");
//If the product item which we press is in items.js then we are renderimg html
const product = detailProducts.find((product) => product.id == productId);
if (product) {
  detailCont.innerHTML += `
  <div class="single-pro-image">
  <img
    src="${product.imgSrcBig}"
    width="100%"
    id="mainImg"
    class="firstImg"
    alt="air force"
  />
  <div class="small-imgs">
    <div class="small-img-col">
      <img
        src="${product.imgSrcBig}"
        width="100%"
        alt="air force"
        class="small-img"
      />
    </div>
    <div class="small-img-col">
      <img
        src="${product.imgSrc2}"
        width="100%"
        alt="air force"
        class="small-img"
      />
    </div>
    <div class="small-img-col">
      <img
        src="${product.imgSrc3}"
        width="100%"
        alt="air force"
        class="small-img"
      />
    </div>
    <div class="small-img-col">
      <img
        src="${product.imgSrc4}"
        width="100%"
        alt="air force"
        class="small-img"
      />
    </div>
  </div>
</div>
<div class="single-pro-details">
  <h3>${product.name}</h3>
  <h2>$${product.price}</h2>
  <select>
    <option>Select size</option>
    <option>XL</option>
    <option>XXL</option>
    <option>Small</option>
    <option>Large</option>
  </select>
  <input type="number" value="1" />
  <button onclick="addToCart(${product.id})">Add to cart</button>
  <h2>Product details</h2>
  <p>
    <span
      >
      ${product.details}
    </span>
  </p>
</div>
  `;
}

//Select main big picture
const mainImg = document.getElementById("mainImg");
//Select all small pics
const smallimgs = document.querySelectorAll(".small-img");
//Make func which allows change big pic src when user click on small pic
smallimgs.forEach((smallimg)=>{
  smallimg.addEventListener('click',()=>{
    mainImg.src=smallimg.src;
  })
})