
const menu=document.getElementById("menu-btn");
const nav=document.getElementById("nav");

let is_menuopen=false;

 function show(){
   is_menuopen=!is_menuopen;
    nav.classList.toggle("show");

    if(is_menuopen){
        menu.innerHTML='<i class="fa-solid fa-xmark"></i>';
    }
    else{
         menu.innerHTML = '<i class="fa-solid fa-bars"></i>'; 
    }
    
 }
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1500,
  speedAsDuration: true,
});
