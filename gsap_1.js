// gsap_1.js
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

// 스크롤에 따라 로고의 폰트 크기 조절
window.addEventListener('scroll', function() {
    const logo = document.getElementById('logo');
    const scrollY = window.scrollY;

    const maxFontSize = 10;    // 초기 폰트 크기 (vw 단위)
    const minFontSize = 5.8;   // 최소 폰트 크기 (vw 단위)
    
    let newFontSize = maxFontSize - (scrollY / 69); 

    // 최소 폰트 크기 이하로 줄어들지 않도록 설정
    newFontSize = Math.max(newFontSize, minFontSize);
    
    logo.style.fontSize = newFontSize + 'vw';
});

// 섹션을 선택
const section = document.querySelector('#section1');

// 애니메이션 설정
gsap.from(section, {
    scrollTrigger: {
        trigger: section,
        start: "top center", // 섹션의 상단이 뷰포트의 중앙에 도달할 때 애니메이션 시작
        toggleActions: "play reverse", // 스크롤 시 애니메이션 재생 및 역재생
    },
    opacity: 0, // 초기 투명도
    y: 50, // 아래에서 위로 이동
    duration: 1, // 애니메이션 지속 시간
});

// 페이지 내의 앵커 링크인지 확인
function getSamePageAnchor(link) {
    if (
      link.protocol !== window.location.protocol ||
      link.host !== window.location.host ||
      link.pathname !== window.location.pathname ||
      link.search !== window.location.search
    ) {
      return false;
    }
  
    return link.hash;
  }
  
  // 주어진 해시로 스크롤하고 이벤트를 방지
  function scrollToHash(hash, e) {
    const elem = hash ? document.querySelector(hash) : false;
    if (elem) {
      if (e) e.preventDefault();
      // ScrollToPlugin을 사용하여 스크롤 애니메이션 적용
      gsap.to(window, {
        scrollTo: elem,
        duration: 1,         // 스크롤 애니메이션 지속 시간
        ease: "power2.out"   // 부드러운 애니메이션 효과
      });
    }
  }
  
  // 현재 페이지 내의 링크를 클릭했을 때 스크롤 이동
  document.querySelectorAll('a[href]').forEach(a => {
    a.addEventListener('click', e => {
      scrollToHash(getSamePageAnchor(a), e);
    });
  });
  
  // 페이지 로드 시 URL에 해시가 있을 경우 해당 요소로 스크롤
  scrollToHash(window.location.hash);
  