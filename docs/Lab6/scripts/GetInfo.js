'use strict'

const SURNAME = "Dominskyi";
const NAME = "Valentyn";
const DEFAULT_POSITION = "Student";
const GITHUB_INVITATION = "Wanna see github profile?";
const GITHUB_ACCOUNT = "https://github.com/VsIG-official";

function showInfo(surname, name, position = DEFAULT_POSITION) {
    alert(`Surname - ${surname}, name - ${name} and position - ${position}`);

    goToGithub();
}

function goToGithub() {
    let confirmation = confirm(GITHUB_INVITATION);

    if (confirmation) {
        location.href = GITHUB_ACCOUNT;
    }
}