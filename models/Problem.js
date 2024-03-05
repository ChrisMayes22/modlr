"use strict";
class Problem {
    constructor(problemId, parentId, problemTypes, prompt, text, answerChoices, correctAnswer) {
        this.problemId = problemId;
        this.parentId = parentId;
        this.problemTypes = problemTypes;
        this.prompt = prompt;
        this.text = text;
        this.answerChoices = answerChoices;
        this.correctAnswer = correctAnswer;
    }
}
