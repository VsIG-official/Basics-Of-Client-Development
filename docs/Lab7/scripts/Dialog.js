'use strict'

let questions = {
    0: "How old are You?",
    1: "Why do You attend Our site?",
    2: "What do You like the most about this site?",
    3: "How did you find out about Our site?",
};

const START_SURVEY_MESSAGE = "This button will start a survey. Do You want to start?";
const END_SURVEY_MESSAGE = "Thank You for Your answers!";
const CANCEL_SURVEY_MESSAGE = "No problem. Do what You want";

function startDialog() {
    let confirmation = getConfirmation();

    if (confirmation) {
        startSurvey();
        return;
    }

    cancelSurvey();
}

function getConfirmation() {
    let confirmation = confirm(START_SURVEY_MESSAGE);
    return confirmation;
}

function startSurvey() {
    let answers = {};
    for (let i = 0; i < 4; i++) {
        answers[i] = prompt(questions[i]);
    }

    alert(END_SURVEY_MESSAGE);
}

function cancelSurvey() {
    alert(CANCEL_SURVEY_MESSAGE);
}