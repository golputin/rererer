// Rebuilt script.js
const navbar=document.getElementById('navbar');
window.addEventListener('scroll',()=>navbar&&navbar.classList.toggle('scrolled',window.scrollY>40));

const navLinks=document.getElementById('navLinks');
const burger=document.getElementById('hamburger');
if(burger&&navLinks){
 burger.onclick=()=>navLinks.classList.toggle('open');
 navLinks.querySelectorAll('a').forEach(a=>a.onclick=()=>navLinks.classList.remove('open'));
}

const badge=document.getElementById('statusBadge');
if(badge){
 const mins=new Date().getHours()*60+new Date().getMinutes();
 const open=mins>=390&&mins<=1410;
 badge.textContent=open?'● OPEN — 06.30–23.30':'● CLOSE — Buka lagi 06.30';
}

function fee(n){
 if(n<1000)return null;
 if(n<=49000)return 3000;
 if(n<=750000)return 5000;
 if(n<=999000)return 10000;
 if(n<=2999000)return 15000;
 return Math.ceil(n*0.007);
}
const inp=document.getElementById('nominal');
const out=document.getElementById('hasil')||document.getElementById('calcResult');
if(inp&&out){
 inp.addEventListener('input',()=>{
   const n=parseInt(inp.value.replace(/\D/g,''))||0;
   if(n)inp.value=n.toLocaleString('id-ID');
   const f=fee(n);
   out.innerHTML=!f?'Fee akan muncul di sini.':`Fee: <b>Rp${f.toLocaleString('id-ID')}</b>`;
 });
}
document.querySelectorAll('.faq-q').forEach(btn=>{
 btn.onclick=()=>{
  const item=btn.parentElement;
  item.classList.toggle('open');
  const a=item.querySelector('.faq-a');
  if(a)a.style.maxHeight=item.classList.contains('open')?a.scrollHeight+'px':null;
 };
});
const lb=document.getElementById('lightbox');
document.querySelectorAll('.gal-item img').forEach(img=>{
 img.onclick=()=>{if(lb){lb.querySelector('img').src=img.src;lb.classList.add('open');}}
});
if(lb)lb.onclick=()=>lb.classList.remove('open');
const year=document.getElementById('year');
if(year)year.textContent=new Date().getFullYear();
