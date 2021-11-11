'use strict'

const FOOTER_SELECTOR = "footer";
const TABLE_STRING = '<table><tr><td><a href="index.html" target="_blank">Main Page</a></td></tr><tr><td><a href="../index.html">Back to all labs</a></td></tr></table>';

function changeFooter() {
    let footer = document.querySelector(FOOTER_SELECTOR);
    footer.outerHTML = TABLE_STRING;
}