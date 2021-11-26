let waffleSize = 350;

function enlargeImage(element) {
    element.style.height = `${waffleSize*2}px`;
    element.style.width = `${waffleSize*2}px`;
}

function unlargeImage(element) {
    element.style.height = `${waffleSize}px`;
    element.style.width = `${waffleSize}px`;
}