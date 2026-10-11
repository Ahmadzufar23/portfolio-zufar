/* =====================================================
   HERO ENTRANCE — animasi masuk ala Framer (GSAP).
   Terpisah dari js/reveal.js (yang mengurus scroll-reveal section
   lain) supaya tidak baku-hantam mengendalikan opacity/transform
   elemen yang sama. Diputar sekali saat load, tidak diulang.
   Urutan: teks muncul → katana "dicabut" dari kiri (nukitsuke) →
   matahari tinta merembes membesar → foto & ensō menyusul.
   ===================================================== */
(function heroEntrance(){
  if (typeof gsap === "undefined") return;

  const fadeTargets = [
    "#heroEyebrow",
    "#heroName",
    "#heroBio",
    "#heroSocial",
    ".hero-right .stat",
    ".cta-row",
    ".portrait",
    ".portrait-caption"
  ];

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) {
    gsap.set(fadeTargets, { opacity: 1, y: 0 });
    return;
  }

  gsap.set(fadeTargets, { opacity: 0, y: 28 });
  gsap.set(".hero-divider", { clipPath: "inset(0 100% 0 0)" });
  gsap.set(".hinomaru", { scale: .55, opacity: 0 });
  gsap.set([".enso", ".hero-vertical"], { opacity: 0 }); // hanya opacity — .hero-vertical sudah memakai transform untuk posisi

  const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });
  tl.to("#heroEyebrow", { opacity: 1, y: 0 }, 0)
    .to("#heroName", { opacity: 1, y: 0 }, 0.12)
    .to(".hero-divider", { clipPath: "inset(0 0% 0 0)", duration: .7, ease: "expo.inOut" }, 0.3)
    .to("#heroBio", { opacity: 1, y: 0 }, 0.36)
    .to("#heroSocial", { opacity: 1, y: 0 }, 0.46)
    .to(".hero-right .stat", { opacity: 1, y: 0, stagger: 0.08 }, 0.5)
    .to(".cta-row", { opacity: 1, y: 0 }, 0.62)
    .to(".hinomaru", { scale: 1, opacity: 1, duration: 1.4, ease: "expo.out" }, 0.2)
    .to(".enso", { opacity: .2, duration: 1.6 }, 0.6)
    .to(".portrait", { opacity: 1, y: 0, duration: 1.15 }, 0.55)
    .to(".portrait-caption", { opacity: 1, y: 0 }, 0.9)
    .to(".hero-vertical", { opacity: .55, duration: 1.4 }, 0.9);
})();
