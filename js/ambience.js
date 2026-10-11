/* =====================================================
   SUASANA — efek dekoratif murni (tanpa konten).
   1. Kelopak sakura yang gugur pelan di hero.
   2. Penunjuk scroll berbentuk katana di tepi kanan: bilah
      tercabut dari sarung mengikuti progres scroll, cap kanji
      di atasnya mengikuti section yang sedang dibaca
      (diambil dari .section-kanji tiap section).
   Gaya ada di css/components.css (.petal, .katana-progress).
   ===================================================== */

/* ---------- 1. kelopak sakura ---------- */
(function sakura(){
  const hero = document.querySelector(".hero");
  if (!hero) return;
  const layer = document.createElement("div");
  layer.className = "petals";
  layer.setAttribute("aria-hidden", "true");

  const COUNT = window.innerWidth < 760 ? 7 : 14;
  const rand = (min, max) => min + Math.random() * (max - min);
  for (let i = 0; i < COUNT; i++) {
    const p = document.createElement("span");
    p.className = "petal";
    p.style.setProperty("--x", `${rand(0, 100)}%`);
    p.style.setProperty("--s", `${rand(8, 15)}px`);
    p.style.setProperty("--o", rand(.35, .8).toFixed(2));
    p.style.setProperty("--d", `${rand(11, 20)}s`);
    p.style.setProperty("--delay", `${-rand(0, 20)}s`); // negatif: sudah "di tengah jalan" saat halaman dibuka
    p.style.setProperty("--drift", `${rand(-140, 140)}px`);
    p.style.setProperty("--rot", `${rand(240, 720) * (Math.random() < .5 ? -1 : 1)}deg`);
    layer.appendChild(p);
  }
  hero.appendChild(layer);
})();

/* ---------- 2. katana penunjuk scroll ---------- */
(function katanaProgress(){
  const el = document.createElement("div");
  el.className = "katana-progress";
  el.setAttribute("aria-hidden", "true");
  el.innerHTML = `
    <span class="kp-label"></span>
    <span class="kp-kashira"></span>
    <span class="kp-tsuka"></span>
    <span class="kp-tsuba"></span>
    <span class="kp-habaki"></span>
    <span class="kp-saya"><span class="kp-blade"></span></span>`;
  document.body.appendChild(el);

  const label = el.querySelector(".kp-label");
  const homeMark = document.querySelector(".brand-mark");
  const marks = [...document.querySelectorAll("section .section-kanji")].map(k => ({
    section: k.closest("section"),
    text: k.textContent.trim()
  }));

  let ticking = false;
  function update(){
    ticking = false;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    el.style.setProperty("--progress", progress.toFixed(4));

    // section aktif = section terakhir yang bagian atasnya sudah melewati 40% layar
    let current = homeMark ? homeMark.textContent.trim() : "";
    const line = window.innerHeight * .4;
    marks.forEach(m => { if (m.section && m.section.getBoundingClientRect().top < line) current = m.text; });
    if (label.textContent !== current) label.textContent = current;
  }
  window.addEventListener("scroll", () => {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }, { passive: true });
  window.addEventListener("resize", update);
  update();
})();
