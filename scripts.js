let slideIndexes = {
    exterior: 0,
    interior: 0
};

function showSlides(section) {
    const slides = document.querySelectorAll(`.${section}-slides .slide`);
    let slideIndex = slideIndexes[section];
    
    if (slideIndex >= slides.length) {
        slideIndexes[section] = 0;
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndexes[section] = slides.length - 1;
        slideIndex = slides.length - 1;
    }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    slides[slideIndex].classList.add('active');
}

function nextSlide(section) {
    slideIndexes[section]++;
    showSlides(section);
}

function prevSlide(section) {
    slideIndexes[section]--;
    showSlides(section);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlides('exterior');
    showSlides('interior');
});
