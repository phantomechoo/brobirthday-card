const images = [
    "./assets/image1.png",
    "./assets/image2.png",
    "./assets/image3.png",
    "./assets/image4.png",
    "./assets/image5.png",
    "./assets/image6.png"
];

const loopImages = [
        "./assets/image5.png",
        "./assets/image6.png"
    ];

const imageContent = document.querySelector(".image-content");
const mainButton = document.getElementById("main-button");
const finalMessage = document.querySelector(".final-message");
const loopImageDiv = document.getElementById("loop-images");
const birthdaySong = document.getElementById("birthdaySong");

let currentIndex = 0;

function updateImage() {
    imageContent.computedStyleMap.opacity = 0;

    const img = new Image();
    img.src = images[currentIndex];

    img.onload = () => {
        imageContent.style.backgroundImage = `url('${images[currentIndex]}')`;

        imageContent.style.opacity = 1;
    };
}

function startLoopingLastImages() {
    let loopIndex = 0;

    setInterval(() => {
        imageContent.style.backgroundImage = `url('${loopImages[loopIndex]}')`;
        loopIndex = (loopIndex + 1) % loopImages.length;
}, 1500);
}


mainButton.addEventListener('click', () => {
    currentIndex++;

    if (currentIndex < images.length) {
        updateImage();
    }

    if (currentIndex === images.length) {
        mainButton.style.display = "none";
        finalMessage.style.display = "block";

        // müzik başlasın
        birthdaySong.play();
        // görsel döngüsü başlasın
        startLoopingLastImages();
    }
});

updateImage();