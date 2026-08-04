// Navbar scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 40));

// Hamburger
const navLinks = document.getElementById('navLinks');
document.getElementById('hamburger').addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// Status OPEN / CLOSE otomatis (06.30 - 23.30)
const badge = document.getElementById('statusBadge');
const mins = new Date().getHours() * 60 + new Date().getMinutes();
const isOpen = mins >= 390 && mins <= 1410;
badge.textContent = isOpen ? '● OPEN — 06.30 s/d 23.30' : '● CLOSE — Buka lagi 06.30';
badge.classList.toggle('closed', !isOpen);

// Kalkulator fee (sesuai list resmi REVI)
const inp = document.getElementById('nominal');
const out = document.getElementById('calcResult');
const fmt = n => 'Rp' + n.toLocaleString('id-ID');
function hitungFee(n) {
  if (n < 1000) return null;
  if (n <= 49000)   return 3000;
  if (n <= 750000)  return 5000;
  if (n <= 999000)  return 10000;
  if (n <= 2999000) return 15000;
  return Math.ceil(n * 0.007);
}
inp.addEventListener('input', () => {
  const n = parseInt(inp.value.replace(/\D/g, '')) || 0;
  inp.value = n ? n.toLocaleString('id-ID') : '';
  const f = hitungFee(n);
  out.innerHTML = (n && f === null)
    ? 'Minimal transaksi Rp1.000.'
    : !f ? 'Fee akan muncul di sini.'
    : `Fee Rekber: <b>${fmt(f)}</b><br>Total yang dibayar buyer: <b>${fmt(n + f)}</b><br><small>+Rp1.500/hari jika delay.</small>`;
});

// FAQ accordion
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement, answer = item.querySelector('.faq-a');
    const wasOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(i => {
      i.classList.remove('open'); i.querySelector('.faq-a').style.maxHeight = null;
    });
    if (!wasOpen) { item.classList.add('open'); answer.style.maxHeight = answer.scrollHeight + 'px'; }
  });
});

// Lightbox galeri
const lb = document.getElementById('lightbox');
document.querySelectorAll('.gallery img').forEach(img =>
  img.addEventListener('click', () => { lb.querySelector('img').src = img.src; lb.classList.add('open
