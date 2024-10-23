// DOMContentLoaded 이벤트 처리 후 navbar.html을 불러오기
document.addEventListener("DOMContentLoaded", function() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-root').innerHTML = data;

            const navbarRoot = document.querySelector('#navbar-root');
            const viewportHeight = window.innerHeight;
            
            navbarRoot.style.height = viewportHeight + 'px';

            // 스크롤 이벤트 추가
            const navbar = document.querySelector('.navbar');
            window.addEventListener('scroll', function() {
                if (window.scrollY > 60) { // 스크롤 위치가 60px 이상이면 스타일 변경
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            });
        })
        .catch(error => console.error('Error loading the navbar:', error));
});
