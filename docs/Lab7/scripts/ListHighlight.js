'use strict'

let selectedLi;

let list = document.getElementById("HighlightList");
list.onclick = function(event) {
    let li = event.target.closest('li');

    if (!li) {
        return;
    }
    if (!list.contains(li)) {
        return;
    }

    highlight(li);
};

function highlight(li) {
    if (selectedLi) {
        selectedLi.classList.remove('highlight');
    }

    selectedLi = li;
    selectedLi.classList.add('highlight');
}