/* ============================= */
/* MOBILE NAVIGATION */
/* ============================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");


menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

        });

    });



/* ============================= */
/* CAROUSEL */
/* ============================= */

const slides = document.querySelectorAll(".carousel-slide");

const prevButton = document.getElementById("prevSlide");

const nextButton = document.getElementById("nextSlide");

const dotsContainer = document.getElementById("carouselDots");


let currentSlide = 0;

let slideTimer;



/* CREATE DOTS */

slides.forEach((slide, index) => {

    const dot = document.createElement("button");

    dot.classList.add("carousel-dot");

    if (index === 0) {
        dot.classList.add("active");
    }

    dot.addEventListener("click", () => {

        showSlide(index);

        restartTimer();

    });

    dotsContainer.appendChild(dot);

});


const dots = document.querySelectorAll(".carousel-dot");



/* SHOW SLIDE */

function showSlide(index) {

    slides[currentSlide].classList.remove("active");

    dots[currentSlide].classList.remove("active");


    currentSlide = index;


    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }


    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }


    slides[currentSlide].classList.add("active");

    dots[currentSlide].classList.add("active");

}



/* NEXT */

function nextSlide() {

    showSlide(currentSlide + 1);

}



/* PREVIOUS */

function previousSlide() {

    showSlide(currentSlide - 1);

}



/* BUTTON EVENTS */

nextButton.addEventListener("click", () => {

    nextSlide();

    restartTimer();

});


prevButton.addEventListener("click", () => {

    previousSlide();

    restartTimer();

});



/* AUTO PLAY */

function startTimer() {

    slideTimer = setInterval(nextSlide, 5500);

}


function restartTimer() {

    clearInterval(slideTimer);

    startTimer();

}


startTimer();