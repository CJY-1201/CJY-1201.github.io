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
            duration: 1.5,
        });
        gsap.from("#s1_3", {
            scrollTrigger: {
                trigger: "#s1_3",
                start: "top 80%",
                end: "top 30%",
                toggleActions: "play none none reverse",
            },
            opacity: 0,
            duration: 1.5,
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
        gsap.from("#s2_2", {
            scrollTrigger: {
                trigger: "#s2_2",
                start: "top 80%",
                end: "top 30%",
                toggleActions: "play none none reverse",
            },
            opacity: 0,
            duration: 1.5,
        });
        gsap.from("#s2_3", {
            scrollTrigger: {
                trigger: "#s2_3",
                start: "top 80%",
                end: "top 30%",
                toggleActions: "play none none reverse",
            },
            opacity: 0,
            duration: 1.5,
        });
        gsap.from("#s2_4", {
            scrollTrigger: {
                trigger: "#s2_4",
                start: "top 80%",
                end: "top 30%",
                toggleActions: "play none none reverse",
            },
            opacity: 0,
            duration: 1.5,
        });
        gsap.from("#s2_5", {
            scrollTrigger: {
                trigger: "#s2_5",
                start: "top 80%",
                end: "top 30%",
                toggleActions: "play none none reverse",
            },
            opacity: 0,
            duration: 1.5,
        });
        gsap.from("#s3_1", {
            scrollTrigger: {
                trigger: "#s3_1",
                start: "top 80%",
                end: "top 30%",
                toggleActions: "play none none reverse",
            },
            opacity: 0,
            scale: 0.5,
            duration: 1,
        });
        gsap.from("#s3_2", {
            scrollTrigger: {
                trigger: "#s3_2",
                start: "top 80%",
                end: "top 30%",
                toggleActions: "play none none reverse",
            },
            x: -100, 
            opacity: 0,
            duration: 1.5,
        });
        gsap.from("#s3_3", {
            scrollTrigger: {
                trigger: "#s3_3",
                start: "top 80%",
                end: "top 30%",
                toggleActions: "play none none reverse",
            },
            x: 100, 
            opacity: 0,
            duration: 1.5,
        });
        gsap.from("#s4_1", {
            scrollTrigger: {
                trigger: "#s4_1",
                start: "top 80%",
                end: "top 30%",
                toggleActions: "play none none reverse",
            },
            opacity: 0,
            scale: 0.5,
            duration: 1,
        });
        gsap.from("#s4_2", {
            scrollTrigger: {
                trigger: "#s4_2",
                start: "top 80%",
                end: "top 30%",
                toggleActions: "play none none reverse",
            },
            x: -100,
            y:  100, // 왼쪽에서 슬라이드 인
            opacity: 0,
            duration: 1.5,
        });
        gsap.from("#s4_3", {
            scrollTrigger: {
                trigger: "#s4_3",
                start: "top 80%",
                end: "top 30%",
                toggleActions: "play none none reverse",
            },
            x: 100,
            y: 100, // 왼쪽에서 슬라이드 인
            opacity: 0,
            duration: 1.5,
        });
        gsap.from("#s5_1", {
            scrollTrigger: {
                trigger: "#s5_1",
                start: "top 80%",
                end: "top 30%",
                toggleActions: "play none none reverse",
            },
            x: -100, 
            opacity: 0,
            duration: 1.5,
        });
        gsap.from("#s5_2", {
            scrollTrigger: {
                trigger: "#s5_2",
                start: "top 80%",
                end: "top 30%",
                toggleActions: "play none none reverse",
            },
            x: -100, 
            opacity: 0,
            duration: 1.5,
        });
        gsap.from("#s5_3", {
            scrollTrigger: {
                trigger: "#s5_3",
                start: "top 80%",
                end: "top 30%",
                toggleActions: "play none none reverse",
            },
            x: -100, 
            opacity: 0,
            duration: 1.5,
        });
    });

    document.addEventListener("DOMContentLoaded", () => {
        const button = document.getElementById("s5_1");
    
        // 마우스 오버 시 애니메이션
        button.addEventListener("mouseover", () => {
            gsap.to(button, { scale: 1.1, duration: 0.2 });
        });
    
        // 마우스 아웃 시 원래 크기로 돌아가기
        button.addEventListener("mouseout", () => {
            gsap.to(button, { scale: 1, duration: 0.2 });
        });
    
        // 클릭 시 애니메이션
        button.addEventListener("click", () => {
            gsap.to(button, { scale: 0.9, duration: 0.1, yoyo: true, repeat: 1 });
        });
    });
    document.addEventListener("DOMContentLoaded", () => {
        const button = document.getElementById("s5_2");
    
        // 마우스 오버 시 애니메이션
        button.addEventListener("mouseover", () => {
            gsap.to(button, { scale: 1.1, duration: 0.2 });
        });
    
        // 마우스 아웃 시 원래 크기로 돌아가기
        button.addEventListener("mouseout", () => {
            gsap.to(button, { scale: 1, duration: 0.2 });
        });
    
        // 클릭 시 애니메이션
        button.addEventListener("click", () => {
            gsap.to(button, { scale: 0.9, duration: 0.1, yoyo: true, repeat: 1 });
        });
    });
    document.addEventListener("DOMContentLoaded", () => {
        const button = document.getElementById("s5_3");
    
        // 마우스 오버 시 애니메이션
        button.addEventListener("mouseover", () => {
            gsap.to(button, { scale: 1.1, duration: 0.2 });
        });
    
        // 마우스 아웃 시 원래 크기로 돌아가기
        button.addEventListener("mouseout", () => {
            gsap.to(button, { scale: 1, duration: 0.2 });
        });
    
        // 클릭 시 애니메이션
        button.addEventListener("click", () => {
            gsap.to(button, { scale: 0.9, duration: 0.1, yoyo: true, repeat: 1 });
        });
    });

    document.addEventListener("DOMContentLoaded", function() {
        // 모달 요소
        const modal = document.getElementById("myModal");
        const modalTitle = document.getElementById("modalTitle");
        const modalDescription = document.getElementById("modalDescription");
        const span = document.getElementsByClassName("close")[0];

        // 모든 이미지 버튼에 클릭 이벤트 추가
        const buttons = document.querySelectorAll('.image-button');
        buttons.forEach(button => {
            button.onclick = function() {
                // 버튼의 데이터 속성에서 제목과 설명 가져오기
                const title = this.getAttribute('data-title');
                const description = this.getAttribute('data-description');

                // 모달에 제목과 설명 설정
                modalTitle.textContent = title;
                modalDescription.textContent = description;

                // 모달 열기
                modal.style.display = "block";
            }
        });

        // 닫기 버튼 클릭 시 모달 닫기
        span.onclick = function() {
            modal.style.display = "none";
        }

        // 모달 외부 클릭 시 모달 닫기
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    });
