// gsap_1.js
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

// 스크롤에 따라 로고의 폰트 크기 조절
window.addEventListener('scroll', function() {
    const logo = document.getElementById('logo');
    const scrollY = window.scrollY;

    const maxFontSize = 5;    // 초기 폰트 크기 (vw 단위)
    const minFontSize = 2.5;   // 최소 폰트 크기 (vw 단위)
    
    let newFontSize = maxFontSize - (scrollY / 69); 

    // 최소 폰트 크기 이하로 줄어들지 않도록 설정
    newFontSize = Math.max(newFontSize, minFontSize);
    
    logo.style.fontSize = newFontSize + 'vw';
});

