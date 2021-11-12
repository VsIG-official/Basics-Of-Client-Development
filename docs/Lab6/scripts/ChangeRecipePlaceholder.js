'use strict'

const PARAGRAPH_TAG = "p";
const PARAGRAPH_CLASS = "RandomRecipe";

function addRecipePlaceholder() {
    let paragraph = getParagraph();
    let newParagraph = createNewParagraph();

    addParagraph(paragraph, newParagraph);
}

function getParagraph() {
    let paragraph = document.querySelector(RECIPE_SELECTOR);
    if (!paragraph) {
        let div = document.querySelector("div.AdditionalPage");
        div.append(createNewParagraph());
    }

    return paragraph;
}

function createNewParagraph() {
    let newParagraph = document.createElement(PARAGRAPH_TAG);
    newParagraph.className = PARAGRAPH_CLASS;

    return newParagraph;
}

function addParagraph(paragraph, newParagraph) {
    paragraph.after(newParagraph);
}

function deleteRecipePlaceholder() {
    let paragraph = getParagraph();
    paragraph.remove();
}