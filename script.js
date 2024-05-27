let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    // Wrap around logic for infinite loop
    currentSlide = (index + totalSlides) % totalSlides;
    
    // Hide all slides and remove active class
    slides.forEach(slide => slide.classList.remove('active'));
    
    // Show the current slide
    slides[currentSlide].classList.add('active');
}

function moveSlide(direction) {
    showSlide(currentSlide + direction);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});