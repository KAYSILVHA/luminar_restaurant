const carouselImages = document.querySelector('.carousel-images');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;
const totalImages = document.querySelectorAll('.carousel-images img').length;
const imagesPerView = 1;

function updateCarousel() {
    const imageWidth = carouselImages.querySelector('img').clientWidth;
    carouselImages.style.transform = `translateX(${-currentIndex * imageWidth}px)`;

    const canGoPrev = currentIndex > 0;
    const canGoNext = currentIndex + imagesPerView < totalImages;

    prevBtn.disabled = !canGoPrev;
    nextBtn.disabled = !canGoNext;
}

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex + imagesPerView < totalImages) {
        currentIndex++;
        updateCarousel();
    }
});

window.addEventListener('resize', updateCarousel);


updateCarousel();
