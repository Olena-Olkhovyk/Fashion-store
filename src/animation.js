//Select all of the element wich we want to animate
const animatedItems=document.querySelectorAll(".animated");
//Check if they are existing
if(animatedItems.length>0){
    window.addEventListener('scroll',animOnScroll)
 function animOnScroll(){
    //Iterate through array
    for(let i=0;i<animatedItems.length;i++){
    //Get each of the element
    const animatedItem=animatedItems[i];
    //Find height each of the item
    const animItemHeight=animatedItem.offsetHeight;
    //Find the position of the element relative to the top
    const animatedItemOffset=offset(animatedItem).top;
    //Set a start of animation
    const animStart=4;
    let animItemPoint=window.innerHeight-animItemHeight/animStart;
    if(animItemHeight>window.innerHeight){
        animItemPoint=window.innerHeight-window.innerHeight/animStart;
    }
    if(pageYOffset>animatedItemOffset-animItemPoint&&pageYOffset<animatedItemOffset+animItemHeight){
        animatedItem.classList.add('active-animation')
    }else{
        if(!animatedItem.classList.contains('hide-anim')){
            animatedItem.classList.remove('active-animation')
        }
    }
    }
 }
 //Function to find the position of the element relative to the top
 function offset(el){
    const rect=el.getBoundingClientRect();
    scrollLeft=window.pageXOffset||document.documentElement.scrollLeft;
    scrollTop=window.pageYOffset||document.documentElement.scrollTop;
    return {
        top:rect.top+scrollTop,
        left:rect.left+scrollLeft,
    };
 }
 setTimeout(() => {
    animOnScroll();
  }, 300);
}