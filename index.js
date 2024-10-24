document.addEventListener('scroll', function() {
    const lines = document.querySelectorAll('.lyric1');
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;

    lines.forEach((line, index) => {
        const lineRect = line.getBoundingClientRect();

        // 요소가 화면 중앙 근처에 있을 때 페이드 인/아웃 적용
        if (lineRect.top >= windowHeight * 0.3 && lineRect.top - window.scrollY > 10) {
            line.style.opacity = 1;
        } else {
            line.style.opacity = 0;
        }
    });
});
