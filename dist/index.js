
//nav background
const Jn = window.innerHeight;
window.addEventListener("scroll", mn);
const skill = document.getElementById("skill");
function mn() {
    window.scrollY >= document.getElementById('home').clientHeight ? (document.getElementById('nav-background').classList.replace("bg-transparent", "bg-neutrals-900/80"),
    document.getElementById('nav-background').classList.add("backdrop-blur-[8px]"), document.getElementById('header').style.position='fixed') : (document.getElementById('nav-background').classList.replace("bg-neutrals-900/80", "bg-transparent"),
    document.getElementById('nav-background').classList.remove("backdrop-blur-[8px]"), document.getElementById('header').style.position='relative')
}   
//nav contents 
document.getElementById('toggle-button').addEventListener("click", c);
function c() {
    document.getElementById('toggle-menu-open').classList.toggle("hidden")
    document.getElementById("toggle-menu-close").classList.toggle("hidden")
    document.getElementById("nav-background").classList.toggle("translate-y-0")
    document.getElementById("nav-content").classList.toggle("opacity-100")
    document.getElementById("nav-content").classList.toggle("translate-y-1/2")
}      
function stillonline()
{
    var x =  navigator.onLine;
    return x;
} 
setInterval(stillonline, 1000);
var i = stillonline();
if (i != true)
{
    alert("you are offline some images and icons might not show up but you can still enjoy amazing experices from this site");
    
}




let slideIndexb = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dot = document.getElementsByClassName("dot");
  console.log(slides.length)
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].style.transform = "translateX(-1016px)";
    dot[i].classList.remove("active");
  }
  slideIndexb++;
  if (slideIndexb > slides.length) {slideIndexb = 1}
  slides[slideIndexb-1].style.display = "block";
  slides[slideIndexb-1].style.transform = "translateX(0px)";
  dot[slideIndexb-1].classList.add("active");
  setTimeout(showSlides, 8000); // Change image every 2 seconds
}