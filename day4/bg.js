const body = document.querySelector("body");

const IMG_NUM = 2;

function paintImg(imgNumber) {
    const img = new Image();
    img.src = `js-background/${imgNumber + 1}.jpg`;
    img.classList.add('bgImg');
    body.prepend(img);
}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUM);
    return number;
}

function init() {
    const randomNumber = genRandom();
    paintImg(randomNumber);
}

init();