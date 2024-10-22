window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 60) { // 스크롤 위치가 60px 이상이면 스타일 변경
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
