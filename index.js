const images = document.getElementsByClassName("images");

// Define an array of functions
const functions = [
    funct1,
    funct2,
    funct3,
    funct4,
    funct5,
    funct6
];

// Attach click event listeners to each image element
for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", functions[i]);
}

// Define the functions
function funct1() {
    var audio = new Audio('tom-1.mp3');
    audio.play();
}

function funct2() {
    var audio = new Audio('tom-2.mp3');
    audio.play();
}

function funct3() {
    var audio = new Audio('tom-3.mp3');
    audio.play();
}

function funct4() {
    var audio = new Audio('tom-4.mp3');
    audio.play();
}

function funct5() {
    var audio = new Audio('snare.mp3');
    audio.play();
}

function funct6() {
    var audio = new Audio('kick-bass.mp3');
    audio.play();
}
