// Funcionalidad del carrusel
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const autoBtn = document.getElementById('autoBtn');
    const counter = document.getElementById('slideCounter');
    
    let currentSlide = 0;
    let autoPlay = null;

    function updateCounter() {
        counter.textContent = `${currentSlide + 1}/${slides.length}`;
    }

    function moveSlide(direction) {
        currentSlide = (currentSlide + direction + slides.length) % slides.length;
        carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
        updateCounter();
    }

    function toggleAutoPlay() {
        if (autoPlay) {
            clearInterval(autoPlay);
            autoPlay = null;
            autoBtn.textContent = 'Auto';
        } else {
            autoPlay = setInterval(() => moveSlide(1), 3000);
            autoBtn.textContent = 'Stop';
        }
    }

    prevBtn.addEventListener('click', () => moveSlide(-1));
    nextBtn.addEventListener('click', () => moveSlide(1));
    autoBtn.addEventListener('click', toggleAutoPlay);

    updateCounter();
});