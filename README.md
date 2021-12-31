# Project Title

<p align="center">
  <img src="/docs/images/FrontendHeader.png" data-canonical-src="/docs/images/FrontendHeader.png"/>
</p>

## Table of Contents

- [Description](#description)
- [Badges](#badges)
- [Contributing](#contributing)
- [License](#license)

### Description

This is My repo with labs for Basics Of Client Development


## Badges

[![Theme](https://img.shields.io/badge/Theme-Frontend-yellow)](https://img.shields.io/badge/Theme-Frontend-blueviolet)
[![Site](https://img.shields.io/badge/Site-Cooking-green)](https://img.shields.io/badge/Site-Cooking-green)

---

## Example

```js
'use strict'

const PARAGRAPH_TAG = "p";
const PARAGRAPH_CLASS = "RandomRecipe";
const DIV_SELECTOR = "div.AdditionalPage";
const LAST_CHILD_SELECTOR = ":last-child";

function addRecipePlaceholder() {
    let paragraph = getParagraph();
    let newParagraph = createNewParagraph();

    addParagraph(paragraph, newParagraph);
}

function getParagraph() {
    let paragraph = document.querySelector(RECIPE_SELECTOR + LAST_CHILD_SELECTOR);
    if (!paragraph) {
        let startDiv = findStartDiv();
        addParagraphToDiv(startDiv);
    }

    return paragraph;
}

function findStartDiv() {
    let div = document.querySelector(DIV_SELECTOR);
    return div;
}

function addParagraphToDiv(div) {
    let newParagraph = createNewParagraph();
    div.append(newParagraph);
}

function createNewParagraph() {
    let newParagraph = document.createElement(PARAGRAPH_TAG);
    newParagraph.className = PARAGRAPH_CLASS;

    return newParagraph;
}

function addParagraph(paragraph, newParagraph) {
    paragraph.after(newParagraph);
}

function deleteRecipePlaceholder() {
    let paragraph = getParagraph();
    paragraph.remove();
}
```

---

## Contributing

> To get started...

### Step 1

- 🍴 Fork this repo!

### Step 2

- **HACK AWAY!** 🔨🔨🔨

---

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2021 © <a href="https://github.com/VsIG-official" target="_blank">VsIG</a>.
