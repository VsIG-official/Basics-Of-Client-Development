'use strict'

const PARAGRAPH_TAG = "p";
const PARAGRAPH_CLASS = "RandomRecipe";
const DIV_SELECTOR = "div.AdditionalPage";

function addRecipePlaceholder() {
    let paragraph = getParagraph();
    let newParagraph = createNewParagraph();

    addParagraph(paragraph, newParagraph);
}

function getParagraph() {
    let paragraph = document.querySelector(RECIPE_SELECTOR);
    if (!paragraph) {
        let startDiv = findStartDiv();
        addParagraphToDiv(startDiv);
    }

    return paragraph;
}

function findStartDiv() {
    let div = document.querySelector(DIV_SELECTOR);
    return div;
}

function addParagraphToDiv(div) {
    let newParagraph = createNewParagraph();
    div.append(newParagraph);
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