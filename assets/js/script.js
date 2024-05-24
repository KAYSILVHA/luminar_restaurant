const carouselImages = document.querySelector('.carousel-images');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;
const totalImages = document.querySelectorAll('.carousel-images img').length;
const imagesPerView = 2;

function updateCarousel() {
    const imageWidth = carouselImages.querySelector('img').clientWidth;
    carouselImages.style.transform = `translateX(${-currentIndex * imageWidth * imagesPerView}px)`;

    const canGoPrev = currentIndex > 0;
    const canGoNext = (currentIndex + 1) * imagesPerView < totalImages;

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
    if ((currentIndex + 1) * imagesPerView < totalImages) {
        currentIndex++;
        updateCarousel();
    }
});

window.addEventListener('resize', () => {
    updateCarousel();
    adjustImageWidths();
});

document.addEventListener('DOMContentLoaded', () => {
    adjustImageWidths();
    updateCarousel();
});

function adjustImageWidths() {
    const imageWidth = carouselImages.querySelector('img').clientWidth;
    carouselImages.style.width = `${totalImages * imageWidth}px`;
    updateCarousel();
}




const carouselImages2 = document.querySelector('.carousel-images-2');
const prevBtn2 = document.getElementById('prevBtn2');
const nextBtn2 = document.getElementById('nextBtn2');

let currentIndex2 = 0;
const totalImages2 = document.querySelectorAll('.carousel-images-2 img').length;
const imagesPerView2 = 2;

function updateCarousel2() {
    const imageWidth2 = carouselImages2.querySelector('img').clientWidth;
    carouselImages2.style.transform = `translateX(${-currentIndex2 * imageWidth2 * imagesPerView2}px)`;

    const canGoPrev2 = currentIndex2 > 0;
    const canGoNext2 = (currentIndex2 + 1) * imagesPerView2 < totalImages2;

    prevBtn2.disabled = !canGoPrev2;
    nextBtn2.disabled = !canGoNext2;
}

prevBtn2.addEventListener('click', () => {
    if (currentIndex2 > 0) {
        currentIndex2--;
        updateCarousel2();
    }
});

nextBtn2.addEventListener('click', () => {
    if ((currentIndex2 + 1) * imagesPerView2 < totalImages2) {
        currentIndex2++;
        updateCarousel2();
    }
});

window.addEventListener('resize', () => {
    updateCarousel2();
    adjustImageWidths2();
});

document.addEventListener('DOMContentLoaded', () => {
    adjustImageWidths2();
    updateCarousel2();
});

function adjustImageWidths2() {
    const imageWidth2 = carouselImages2.querySelector('img').clientWidth;
    carouselImages2.style.width = `${totalImages2 * imageWidth2}px`;
    updateCarousel2();
}
