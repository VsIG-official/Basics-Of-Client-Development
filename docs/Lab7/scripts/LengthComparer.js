'use strict'

document.getElementById("LengthComparer").onclick = function() {
    compareTwoTexts()
};

function compareTwoTexts() {
    let texts;
    texts = getTwoTexts();

    if (!texts[0] || !texts[1]) {
        return;
    }

    if (isTextsChosen()) {
        let textToShow = compareLengthes(texts[0], texts[1]);

        showText(textToShow);
        return;
    }

    return;
}

function getTwoTexts() {
    let firstText = prompt("Write first recipes ' name", "");
    if (!firstText) {
        return;
    }

    let secondText = prompt("And for the second one", "");
    if (!secondText) {
        return;
    }

    return [firstText, secondText];
}

function isTextsChosen() {
    let isChosen = confirm("Are You sure, that You want to compare these strings?");
    return isChosen;
}

function compareLengthes(firstText, secondtext) {
    let text;
    if (firstText.length > secondtext.length) {
        text = firstText;
    } else {
        text = secondtext;
    }
    return text;
}

function showText(text) {
    alert(text);
}