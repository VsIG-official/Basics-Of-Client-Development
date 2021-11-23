'use strict'

document.addEventListener('click', function(event) {
    let id = event.target.dataset.toggleId;
    if (!id) return;
    let textArea = document.getElementById(id);
    textArea.hidden = !textArea.hidden;
});