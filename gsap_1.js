// gsap_1.js
gsap.registerPlugin(ScrollTrigger);

// 섹션을 선택
const section = document.querySelector('#section1');

// 애니메이션 설정
gsap.from(section, {
    scrollTrigger: {
        trigger: section,
        start: "top center", // 섹션의 상단이 뷰포트의 중앙에 도달할 때 애니메이션 시작
        toggleActions: "play none none reverse", // 스크롤 시 애니메이션 재생 및 역재생
    },
    opacity: 0, // 초기 투명도
    y: 50, // 아래에서 위로 이동
    duration: 1, // 애니메이션 지속 시간
});
