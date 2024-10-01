document.addEventListener('DOMContentLoaded', function () {
    // Function to initialize each carousel
    function initializeCarousel(carouselId) {
        const slides = document.querySelectorAll(`#${carouselId} figure`);
        const prevButton = document.querySelector(`#${carouselId}`).previousElementSibling;
        const nextButton = document.querySelector(`#${carouselId}`).nextElementSibling;
        
        let currentIndex = 0;
        const totalSlides = slides.length;

        function updateCarouselPosition() {
            slides.forEach((slide, index) => {
                slide.style.display = 'none';
                slide.classList.remove('active');
            });
            slides[currentIndex].style.display = 'block';
            slides[currentIndex].classList.add('active');
        }

        function showNextSlide() {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateCarouselPosition();
        }

        function showPrevSlide() {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateCarouselPosition();
        }

        prevButton.addEventListener('click', showPrevSlide);
        nextButton.addEventListener('click', showNextSlide);

        updateCarouselPosition();
    }

    // Initialize both carousels
    initializeCarousel('arma');
    initializeCarousel('dayz');
    initializeCarousel('tarkov');
});
