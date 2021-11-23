'use strict'

let links = {
    0: "Belgian-Waffles.html",
    1: "Cracked-Cookies.html",
    2: "Envelopes-With-Apples.html",
    3: "Waffle-Tubes.html",
}

const RECIPE_SELECTOR = "div > p.RandomRecipe";

function insertRandomRecipes() {
    let paragraphs = getAllParagraphs();
    let paragraphsNum = 0;

    paragraphs.forEach(paragraph => {
        paragraphsNum++;
        changeHTML(paragraph, paragraphsNum);
    });
}

function getAllParagraphs() {
    let paragraphs = document.querySelectorAll(RECIPE_SELECTOR);
    return paragraphs;
}

function getRandomRecipe() {
    let randomNumber = Math.round(Math.random() * 3);
    let randomRecipe = links[randomNumber];
    return randomRecipe;
}

function changeHTML(paragraph, paragraphsNum) {
    let randomRecipe = getRandomRecipe();
    let number = document.createTextNode(paragraphsNum);
    paragraph.innerHTML = `<a href="${randomRecipe}" target="_blank">Random Recipe №${number.textContent}</a>`;
}