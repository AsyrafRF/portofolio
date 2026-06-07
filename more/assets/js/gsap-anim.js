/* ======================================================
   GSAP-ANIM.JS — SCROLL & LOAD ANIMATION
   ====================================================== */

gsap.from("#hero h1", {
  opacity: 0,
  y: -40,
  duration: 1.4,
  ease: "power4.out"
});

gsap.from("#hero .tagline", {
  opacity: 0,
  y: 20,
  delay: 0.4
});

gsap.from(".cta a", {
  opacity: 0,
  y: 20,
  stagger: 0.15,
  delay: 0.6
});

/* Scroll Animations */
gsap.utils.toArray("section").forEach(section => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%"
    },
    opacity: 0,
    y: 40,
    duration: 1.2,
    ease: "power3.out"
  });
});

// low-power
document.body.classList.toggle("low-power");
