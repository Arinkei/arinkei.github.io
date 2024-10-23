document.addEventListener('scroll', function() {
    const lines = document.querySelectorAll('.lyric1');
    const windowHeight = window.innerHeight;

    lines.forEach((line, index) => {
        const lineRect = line.getBoundingClientRect();

        // 요소가 화면 중앙 근처에 있을 때 페이드 인/아웃 적용
        if (lineRect.top >= windowHeight * 0.3 && lineRect.top <= windowHeight * 0.7) {
            line.style.opacity = 1;
        } else {
            line.style.opacity = 0;
        }
    });
});
