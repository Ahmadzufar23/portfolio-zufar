/* =====================================================
   HERO ENTRANCE — animasi masuk halus ala Framer (GSAP).
   Terpisah dari js/reveal.js (yang mengurus scroll-reveal section
   lain) supaya tidak baku-hantam mengendalikan opacity/transform
   elemen yang sama. Diputar sekali saat load, tidak diulang.
   ===================================================== */
(function heroEntrance(){
  if (typeof gsap === "undefined") return;

  const targets = [
    "#heroEyebrow",
    "#heroName",
    ".hero-divider",
    "#heroBio",
    "#heroSocial",
    ".hero-right .stat",
    ".cta-row",
    ".portrait-wrap"
  ];

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) {
    gsap.set(targets, { opacity: 1, y: 0 });
    return;
  }

  gsap.set(targets, { opacity: 0, y: 28 });

  const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });
  tl.to("#heroEyebrow", { opacity: 1, y: 0 }, 0)
    .to(["#heroName", ".hero-divider"], { opacity: 1, y: 0 }, 0.12)
    .to("#heroBio", { opacity: 1, y: 0 }, 0.24)
    .to("#heroSocial", { opacity: 1, y: 0 }, 0.36)
    .to(".hero-right .stat", { opacity: 1, y: 0, stagger: 0.08 }, 0.48)
    .to(".cta-row", { opacity: 1, y: 0 }, 0.6)
    .to(".portrait-wrap", { opacity: 1, y: 0, duration: 1.15 }, 0.72);
})();
