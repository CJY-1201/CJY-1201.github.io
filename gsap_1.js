// gsap_1.js
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(TextPlugin);


const lenis = new Lenis({
    duration: 0.1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    });
    
    lenis.on('scroll', (e) => {
    console.log(e)
    })
    
    function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf);

    document.addEventListener('DOMContentLoaded', function() {
        gsap.to("#pjlily", {
            duration: 3.5,
            text: "Project.Lily",
            color: "#3a0190",
            ease: "power1.inOut"
            
        });
    });
    