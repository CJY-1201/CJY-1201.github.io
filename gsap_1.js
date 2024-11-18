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
            color: "#ffffff",
            ease: "power1.inOut"
            
        });
    });

    document.addEventListener("DOMContentLoaded", function() {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from("#s1_1", {
            scrollTrigger: {
                trigger: "#s1_1",
                start: "top 80%",
                end: "top 30%",
                toggleActions: "play none none reverse",
            },
            opacity: 0,
            scale: 0.5,
            duration: 1,
        });
        gsap.from("#s1_2", {
            scrollTrigger: {
                trigger: "#s1_2",
                start: "top 80%",
                end: "top 30%",
                toggleActions: "play none none reverse",
            },
            opacity: 0,
            duration: 1,
        });
        gsap.from("#s1_3", {
            scrollTrigger: {
                trigger: "#s1_3",
                start: "top 80%",
                end: "top 30%",
                toggleActions: "play none none reverse",
            },
            opacity: 0,
            duration: 1,
        });
        gsap.from("#s2_1", {
            scrollTrigger: {
                trigger: "#s2_1",
                start: "top 80%",
                end: "top 30%",
                toggleActions: "play none none reverse",
            },
            opacity: 0,
            scale: 0.5,
            duration: 1,
        });
    });
    