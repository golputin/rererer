// REVI v2 - js/script.js
const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);

// Navbar jadi solid saat scroll
const navbar = $('.navbar');
window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 30));

// Hamburger menu mobile
const ham = $('#hamburger'), links = $('#navLinks');
ham.addEventListener('click', () => links.classList.toggle('open'));
$$('#navLinks a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));

// Status OPEN/CLOSE otomatis (06.30 - 23.30)
const jam = new Date(), menit = jam.getHours() * 60 + jam.getMinutes();
const buka = menit >= 390 && menit <= 1410;
const hours = $('.hours');
if (hours) hours.innerHTML = buka ? '🟢 OPEN NOW · 06.30 – 23.30 WIB' : '🔴 CLOSED · Buka lagi 06.30 WIB';

// Animasi reveal saat scroll
const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && e.target.classList.add('show')), { threshold: .12 });
$$('.reveal').forEach(el => io.observe(el));

// FAQ accordion
$$('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement, jawab = item.querySelector('.faq-a');
    const sudahBuka = item.classList.contains('open');
    $$('.faq-item.open').forEach(i => { i.classList.remove('open'); i.querySelector('.faq-a').style.maxHeight = null; });
    if (!sudahBuka) { item.classList.add('open'); jawab.style.maxHeight = jawab.scrollHeight + 'px'; }
  });
});

// Lightbox galeri poster
const lb = $('#lightbox'), lbImg = lb.querySelector('img');
$$('.gal-item').forEach(g => g.addEventListener('click', () => {
  lbImg.src = g.dataset.src || g.querySelector('img').src;
  lb.classList.add('open');
}));
lb.addEventListener('click', e => { if (e.target === lb || e.target.classList.contains('lb-close')) lb.classList.remove('open'); });
document.addEventListener('keydown', e => e.key === 'Escape' && lb.classList.remove('open'));

// Kalkulator fee sesuai list resmi REVI
function getFee(n) {
  if (n < 1000) return null;
  if (n <= 49000)   return 3000;
  if (n <= 750000)  return 5000;
  if (n <= 999000)  return 10000;
  if (n <= 2999000) return 15000;
  return Math.ceil(n * 0.007);
}
const rupiah = n => 'Rp' + n.toLocaleString('id-ID');
const inp = $('#nominal'), res = $('#hasil'), btnHitung = $('#hitung');
function hitung() {
  const n = Math.max(0, parseInt(inp.value, 10) || 0);
  if (!n) { res.textContent = 'Masukkan nominal transaksi terlebih dahulu.'; return; }
  const f = getFee(n);
  if (!f) { res.textContent = 'Minimal transaksi Rp1.000.'; return; }
  res.innerHTML = `Nominal: <b>${rupiah(n)}</b><br>Fee rekber: <b>${rupiah(f)}</b><br>Total dibayar buyer: <b>${rupiah(n + f)}</b><br><small>+${rupiah(1500)}/hari jika delay.</small>`;
}
btnHitung && btnHitung.addEventListener('click', hitung);
inp && inp.addEventListener('keydown', e => e.key === 'Enter' && hitung());

// Tahun copyright otomatis
$('#year').textContent = new Date().getFullYear();
// AKHIR FILE
