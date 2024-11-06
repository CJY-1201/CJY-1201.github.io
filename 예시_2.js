// script.js
gsap.registerPlugin(ScrollTrigger);

const header = document.getElementById('header');

// ScrollTrigger 설정
ScrollTrigger.create({
    trigger: header,
    start: "top top", // 헤더의 상단이 뷰포트의 상단에 도달할 때
    end: "bottom top", // 헤더의 하단이 뷰포트의 상단에 도달할 때
    pin: true, // 헤더를 고정
    pinSpacing: false, // 고정된 헤더 아래의 공간을 없앰
    onEnter: () => gsap.to(header, { background: "rgba(255, 255, 255, 1)", duration: 0.3 }),
    onLeave: () => gsap.to(header, { background: "rgba(255, 255, 255, 0.9)", duration: 0.3 }),
    onEnterBack: () => gsap.to(header, { background: "rgba(255, 255, 255, 1)", duration: 0.3 }),
    onLeaveBack: () => gsap.to(header, { background: "rgba(255, 255, 255, 0.9)", duration: 0.3 }),
});
