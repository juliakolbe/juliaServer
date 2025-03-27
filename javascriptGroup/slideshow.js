/* Joshua's code for creating a slideshow of memes! */

// a counter to traverse the slides
let index = 0;

// event listener that weights for click of '>' button
function nextSlide() {

    // store all slide divs into a sort-of array
    const slides = document.getElementsByClassName("slide");
    index++;    // increment index
    if (index >= slides.length) {
        index = 0;  //reset index
    }
    displaySlide();
}

// event listener that weights for click of '<' button
function previousSlide() {

    // store all slide divs into a sort-of array
    const slides = document.getElementsByClassName("slide");
    index--;    // decrement index
    if (index < 0) {
        index = slides.length - 1; //reset index
    }
    displaySlide();
}

function displaySlide() {
    // collect all slide divs into a sort-of array
    const slides = document.getElementsByClassName("slide");

    // hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    //changes current slide display to block
    slides[index].style.display = "block";
}

// displays the first slide and initializes the slideshow
document.addEventListener("DOMContentLoaded", displaySlide);