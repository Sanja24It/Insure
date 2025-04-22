const btn_mobile = document.querySelector(".menu_ham");
const nav = document.querySelector(".nav");

window.addEventListener("resize", () =>{
    if(window.innerWidth > 768){
      nav.style.display = "block";
    } else{
      nav.style.display = "none";
    }
})

btn_mobile.addEventListener("click", function(){
  
   if(btn_mobile.hasAttribute("data-open")){
    btn_mobile.removeAttribute("data-open");
    btn_mobile.setAttribute("data-close","close");
    nav.style.display = "block";
   } else{
    btn_mobile.removeAttribute("data-close");
    btn_mobile.setAttribute("data-open","open");
    nav.style.display = "none";
   }
})

