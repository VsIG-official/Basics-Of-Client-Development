'use strict'

let selectedIl;

function getListElement() {
    let il = target.closest('il'); // (1)
    if (!il) return; // (2)
    if (!list.contains(il)) return; // (3)
    highlight(il); // (4)
}

function highlight(il) {
    if (selectedIl) { // убрать существующую подсветку, если есть
        selectedIl.classList.remove('highlight');
    }
    selectedIl = il;
    selectedIl.classList.add('highlight'); // подсветить новый td
}