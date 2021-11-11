'use strict'

var dict = {
    0: "How old are You?",
    1: "Why do You attend Our site?",
    2: "What do You like the most about this site?",
    3: "How did you find out about Our site?",
};

function startDialog() {
    let confirmation = confirm("This button will start a survey. Do You want to start?");

    if (confirmation) {
        let answers = {};
        for (let i = 0; i < 4; i++) {
            answers[i] = prompt(dict[i]);
        }

        alert("Thank You for Your answers!");
    }
}