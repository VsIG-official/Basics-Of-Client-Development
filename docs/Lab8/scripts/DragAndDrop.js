'use strict'

let recipeImages = {
    0: "Eggs",
    1: "Butter",
    2: "Sugar",
    3: "Flour",
    4: "Milk",
    5: "Baking-Powder",
    6: "Vanillin",
};

function activateDrag() {
    for (let i = 0; i < 7; i++) {
        let element = document.getElementById(`${recipeImages[i]}`);
        dragElement(element);
    }
}

function dragElement(element) {
    element.onmousedown = function(event) {
        let shiftX = event.clientX - element.getBoundingClientRect().left;
        let shiftY = event.clientY - element.getBoundingClientRect().top;
        element.style.position = 'absolute';
        element.style.zIndex = 1000;
        document.body.append(element);
        moveAt(event.pageX, event.pageY);

        function moveAt(pageX, pageY) {
            element.style.left = pageX - shiftX + 'px';
            element.style.top = pageY - shiftY + 'px';
        }

        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
        }

        document.addEventListener('mousemove', onMouseMove);

        element.onmouseup = function() {
            document.removeEventListener('mousemove', onMouseMove);
            element.onmouseup = null;
        };
    };

    element.ondragstart = function() {
        return false;
    };
}