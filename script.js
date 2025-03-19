// Optional: JavaScript für Interaktivität
document.querySelectorAll('.contact-links a').forEach(link => {
    link.addEventListener('click', () => {
        alert('Sie werden weitergeleitet zu: ' + link.href);
    });
});

ScrollReveal().reveal('h1, h2, p, ul, .contact-links', {
    delay: 200, // Задержка перед анимацией
    distance: '50px', // Расстояние, с которого элемент появляется
    origin: 'bottom', // Направление анимации (top, bottom, left, right)
    duration: 1000, // Длительность анимации
    easing: 'ease-in-out', // Плавность анимации
    reset: true // Анимация повторяется при каждом появлении
});