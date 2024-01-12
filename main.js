function humberger() {
  document.getElementById("menu").classList.toggle("hidden");
  document.getElementById("text-hero").classList.toggle("hidden");
  document.getElementById("humberger-icon").classList.toggle("hidden");
  document.getElementById("close-icon").classList.toggle("hidden");
}

//GSAP
gsap.registerPlugin(ScrollTrigger);

gsap
  .timeline()
  .from("#text-hero", { autoAlpha: 0, duration: 2 })
  .from(".interactive-vr img", { opacity: 0, scale: 0, ease: "back" })
  .from("#freds img", { y: 160, stagger: 0.1, duration: 0.8, ease: "back" })
  .from("#time", { xPercent: 100, duration: 0.2 });
