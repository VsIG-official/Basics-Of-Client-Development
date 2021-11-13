'use strict'

const DEFAULT_BACKGROUND = "images/Background.jpg";
const NEW_BACKGROUND = "images/BackgroundLight.jpg";

const ELEMENT = "ThemeMode";
const PREPEND_TEXT = "Now You're in ";
const DARK_TEXT = "Dark mode";
const LIGHT_TEXT = "Light mode";
const DEFAULT_ELEMENT_TEXT = "Now You're in Dark mode";
const NEW_ELEMENT_TEXT = "Now You're in Light mode";

const BUTTON = "ThemeSwitcher";
const DEFAULT_BUTTON_TEXT = "Switch to Light mode";
const NEW_BUTTON_TEXT = "Wait 30 seconds";

const TIME = 30 * 1000;

function changeTheme() {
    changeBackground();

    let themeModeText = changeThemeModeText();
    let themeSwitcher = changeThemeSwitcher();

    changeDefaultThemeAfterTime(themeModeText, themeSwitcher);
}

function changeBackground() {
    document.body.style.backgroundImage = `url(${NEW_BACKGROUND})`;
}

function changeThemeModeText() {
    let themeModeText = document.getElementById(ELEMENT);
    themeModeText.textContent = LIGHT_TEXT;
    themeModeText.prepend(PREPEND_TEXT);

    return themeModeText;
}

function changeThemeSwitcher() {
    let themeSwitcher = document.getElementById(BUTTON);
    themeSwitcher.textContent = NEW_BUTTON_TEXT;

    return themeSwitcher;
}

function changeDefaultThemeAfterTime(themeModeText, themeSwitcher) {
    setTimeout(() => (document.body.style.backgroundImage = `url(${DEFAULT_BACKGROUND})`, themeModeText.textContent = DEFAULT_ELEMENT_TEXT, themeSwitcher.textContent = DARK_TEXT, themeSwitcher.prepend(PREPEND_TEXT)), TIME);
}