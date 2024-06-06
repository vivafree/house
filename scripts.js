let slideIndex = 0;
showSlides(slideIndex);

function showSlides(index) {
    const slides = document.getElementsByClassName('slide');
    if (index >= slides.length) {
        slideIndex = 0;
    }
    if (index < 0) {
        slideIndex = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex].style.display = 'block';
}

function nextSlide() {
    showSlides(++slideIndex);
}

function prevSlide() {
    showSlides(--slideIndex);
}

function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

// Initialize to show the exterior section by default
showSection('exterior');
