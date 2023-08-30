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
