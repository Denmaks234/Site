const menu=document.querySelector(".overlay");
const menuBtn=document.querySelector(".burger-btn");

menuBtn.addEventListener("click",function(){
    menu.classList.toggle("active")
})