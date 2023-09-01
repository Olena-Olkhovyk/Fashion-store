const input=document.getElementById('myInput');
input.addEventListener('keyup',()=>{
    //Find input value 
    const inputValue=input.value.toUpperCase();
    console.log(inputValue);
    //Find each card with a product
    const item=document.querySelectorAll('.pro');
    //Iterate through each product
    for(let i=0;i<item.length;i++){
        //Find name of each product
        const name=item[i].querySelector('h4');
        console.log(name);
        //With indexof we are searching for a string which we specify in inputValue
        //If at least  one letter will match then indexof return 0 and 0 grater then -1
        if(name.innerHTML.toUpperCase().indexOf(inputValue)>-1){
            item[i].style.display='initial'
        }else{
            item[i].style.display='none'
        }
    }
  
})

//BUTTONS FILTERING
//Select all btn
const btns=document.querySelectorAll('.btn-filter');
//Looping through each of them
btns.forEach((btn)=>{
    //Add event to each of them
    btn.addEventListener('click',(e)=>{
        //Find buttons category
        const btnCategory=e.currentTarget.dataset.id;
        //Looping through all of the items 
        const productCategory=allProducts.filter((productItem)=>{
            //Compare btn id(category) and items category
            if(btnCategory===productItem.category){
               return productItem; 
            }
        })
        if(btnCategory==="all"){
            allProd(allProducts)
        }else{
            allProd(productCategory)
        }
    })
})