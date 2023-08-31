const form =document.getElementById('myForm');
const subMsg=document.querySelector('.submit-msg');
form.addEventListener('submit', formSubmiting);

function formSubmiting(){
    subMsg.style.display='block';
}