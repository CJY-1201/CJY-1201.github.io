// gsap_1.js
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

window.addEventListener('wheel', function(event) {
    const logo = document.getElementById('logo');
    if (event.deltaY > 0) {
        logo.style.transform = 'scale(1)'; // 스크롤 다운 시 확대
    } else {
        logo.style.transform = 'scale(1.5)'; // 스크롤 업 시 원래 크기로
    }
});
