// viistore.id — js/script.js
(function(){
"use strict";
// Menu mobile
var burger=document.getElementById("burger"),menu=document.getElementById("menu");
if(burger&&menu){
burger.addEventListener("click",function(){menu.classList.toggle("open");});
menu.querySelectorAll("a").forEach(function(a){a.addEventListener("click",function(){menu.classList.remove("open");});});
}
// Lightbox galeri
var lb=document.getElementById("lightbox"),lbImg=document.getElementById("lb-img"),lbClose=document.getElementById("lb-close");
function openLB(src){if(!lb||!lbImg)return;lbImg.src=src;lb.hidden=false;document.body.style.overflow="hidden";}
function closeLB(){if(!lb)return;lb.hidden=true;lbImg.src="";document.body.style.overflow="";}
document.querySelectorAll(".gal figure").forEach(function(f){
f.addEventListener("click",function(){openLB(f.getAttribute("data-img")||f.querySelector("img").src);});
});
if(lbClose)lbClose.addEventListener("click",closeLB);
if(lb)lb.addEventListener("click",function(e){if(e.target===lb)closeLB();});
document.addEventListener("keydown",function(e){if(e.key==="Escape")closeLB();});
// Scroll reveal
var io=("IntersectionObserver"in window)?new IntersectionObserver(function(es){
es.forEach(function(en){if(en.isIntersecting){en.target.classList.add("on");io.unobserve(en.target);}});
},{threshold:.12}):null;
document.querySelectorAll("section .wrap, section .wrap > *").forEach(function(el){
el.classList.add("reveal");
if(io)io.observe(el);else el.classList.add("on");
});
console.log("viistore.id loaded ✔");
})();
// AKHIR FILE
