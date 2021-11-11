'use strict'

const DEFAULT_BACKGROUND = "images/Background.jpg";
const NEW_BACKGROUND = "images/BackgroundLight.jpg";
const TIME = 30 * 1000;

function changeBackground() {
    document.body.style.backgroundImage = "url(images/BackgroundLight.jpg)";

    setTimeout(() => document.body.style.backgroundImage = "url(images/Background.jpg)", TIME);
}