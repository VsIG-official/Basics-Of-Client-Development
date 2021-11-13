'use strict'

const FOOTER_SELECTOR = "footer";
const FOOTER_STRING = '<footer><a href="index.html" target="_blank">Main Page</a><br><a href="../index.html">Back to all labs</a></footer>';
const TABLE_SELECTOR = "table";
const TABLE_STRING = '<table><tr><td><a href="index.html" target="_blank">Main Page</a></td></tr><tr><td><a href="../index.html">Back to all labs</a></td></tr></table>';

function changeFooterToTable() {
    let footer = document.querySelector(FOOTER_SELECTOR);
    footer.outerHTML = TABLE_STRING;
}

function changeTableToFooter() {
    let table = document.querySelector(TABLE_SELECTOR);
    let footer = document.createElement(FOOTER_SELECTOR);
    footer.innerHTML = FOOTER_STRING;
    table.replaceWith(footer);
}