'use strict'

let selectedLi;

function highlightListElement() {
    let list = document.getElementById("HighlightList");

    list.onclick = function(event) {
        let li = event.target.closest('li');

        if (!li) {
            return;
        }

        if (!list.contains(li)) {
            return;
        }

        highlightElement(li);
    };
}

function highlightElement(li) {
    if (selectedLi) {
        selectedLi.classList.remove('highlight');
    }

    selectedLi = li;
    selectedLi.classList.add('highlight');
}