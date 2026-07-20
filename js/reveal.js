/* =====================================================
   REVEAL-ON-SCROLL — utilitas umum, dipakai section mana saja
   yang elemen-nya diberi class "reveal" (lihat css/components.css).
   Elemen dengan data-delay="N" mendapat transition-delay N*90ms
   supaya baris/daftar muncul berurutan (stagger halus). Animasi
   replay setiap kali elemen masuk viewport lagi (tidak unobserve).
   ===================================================== */
(function setupReveal(){
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return;

  items.forEach(el => {
    if (el.dataset.delay !== undefined) {
      el.style.transitionDelay = `${parseInt(el.dataset.delay, 10) * 90}ms`;
    }
  });

  if (!("IntersectionObserver" in window)) {
    items.forEach(el => el.classList.add("is-visible"));
    return;
  }

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      } else if (entry.intersectionRatio === 0) {
        entry.target.classList.remove("is-visible"); // keluar viewport sepenuhnya — replay saat masuk lagi
      }
    });
  }, { threshold: [0, 0.15] });

  items.forEach(el => io.observe(el));
})();
