'use strict'

function addRecipePlaceholder() {
    let paragraph = document.querySelector(RECIPE_SELECTOR);
    let newParagraph = document.createElement("P");
    newParagraph.className = "RandomRecipe";
    paragraph.after(newParagraph);
}