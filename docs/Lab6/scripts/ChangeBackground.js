'use strict'

const DEFAULT_BACKGROUND = "images/Background.jpg";
const NEW_BACKGROUND = "images/BackgroundLight.jpg";

const ELEMENT = "ThemeMode";
const DEFAULT_ELEMENT_TEXT = "Now You're in Dark mode";
const NEW_ELEMENT_TEXT = "Now You're in Light mode";

const BUTTON = "ThemeSwitcher";
const DEFAULT_BUTTON_TEXT = "Switch to Light mode";
const NEW_BUTTON_TEXT = "Wait 30 seconds";

const TIME = 30 * 1000;

function changeTheme() {
    document.body.style.backgroundImage = `url(${NEW_BACKGROUND})`;

    let themeModeText = document.getElementById(ELEMENT);
    themeModeText.textContent = NEW_ELEMENT_TEXT;
    let themeSwitcher = document.getElementById(BUTTON);
    themeSwitcher.textContent = NEW_BUTTON_TEXT;

    setTimeout(() => (document.body.style.backgroundImage = `url(${DEFAULT_BACKGROUND})`, themeModeText.textContent = DEFAULT_ELEMENT_TEXT, themeSwitcher.textContent = DEFAULT_BUTTON_TEXT), TIME);
}