// gsap_1.js
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrambleTextPlugin);

window.addEventListener('wheel', function(event) {
    const logo = document.getElementById('logo');
    if (event.deltaY > 0) {
        logo.style.transform = 'scale(1)'; // 스크롤 다운 시 확대
    } else {
        logo.style.transform = 'scale(1.5)'; // 스크롤 업 시 원래 크기로
    }
});

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

gsap.to("scramble", {
        scrambleText: {
            text: "Project.Lily",
            chars: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()",
            speed: 0.25,
            revealDelay: 0.5
        },
        duration: 3
    });
