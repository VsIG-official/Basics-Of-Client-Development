'use strict'

class Menu {
    constructor(btn) {
        this.btn = btn;
        btn.onclick = this.onClick.bind(this);
    }
    getInfo() {
        showInfo(SURNAME, NAME);
    }
    getGithub() {
        goToGithub();
    }
    onClick(event) {
        let action = event.target.dataset.action;
        if (action) {
            this[action]();
        }
    };
}

let menu = document.getElementById("Menu");

new Menu(menu);