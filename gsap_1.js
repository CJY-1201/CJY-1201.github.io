gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Flip);
const element = document.querySelector('.my-element');
gsap.flip(element, {
    duration: 0.5,
    ease: "power1.inOut"
  });