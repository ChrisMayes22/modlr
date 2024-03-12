"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../db/db"));
class ProblemModel extends sequelize_1.Model {
    constructor(problemId, parentId, problemTypes, prompt, text, answerChoices, correctAnswer) {
        super();
        this.problemId = problemId;
        this.parentId = parentId;
        this.problemTypes = problemTypes;
        this.prompt = prompt;
        this.text = text;
        this.answerChoices = answerChoices;
        this.correctAnswer = correctAnswer;
    }
}
function getProblemInstance() {
    return __awaiter(this, void 0, void 0, function* () {
        const sequelize = yield (0, db_1.default)();
        if (sequelize instanceof sequelize_1.Sequelize) {
            const ProblemInstance = sequelize.define('Problem', {
                problemId: {
                    type: sequelize_1.DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true,
                    allowNull: false
                },
                parentId: {
                    type: sequelize_1.DataTypes.INTEGER,
                    defaultValue: null
                },
                problemTypes: {
                    type: sequelize_1.DataTypes.STRING,
                    defaultValue: '',
                    allowNull: false
                },
                prompt: {
                    type: sequelize_1.DataTypes.STRING,
                    defaultValue: "Error: Prompt text is missing!",
                    allowNull: false
                },
                text: {
                    type: sequelize_1.DataTypes.STRING,
                    defaultValue: "Error: TEXT is missing!",
                    allowNull: false
                },
                answerChoices: {
                    type: sequelize_1.DataTypes.STRING,
                    defaultValue: 'A, B, C, D',
                    allowNull: false
                },
                correctAnswer: {
                    type: sequelize_1.DataTypes.STRING,
                    defaultValue: 'A',
                    allowNull: false
                }
            });
            yield sequelize.sync();
            return ProblemInstance;
        }
    });
}
function createProblem(parentId, problemTypes, prompt, text, answerChoices, correctAnswer) {
    return __awaiter(this, void 0, void 0, function* () {
        const Problem = yield getProblemInstance();
        if (Problem !== undefined) {
            const problemInstance = yield Problem.create({
                parentId: parentId,
                problemTypes: problemTypes, prompt: prompt, text: text,
                answerChoices: answerChoices, correctAnswer: correctAnswer
            });
        }
        else {
            throw Error('Problem was undefined!');
        }
    });
}
createProblem(1, 'conciseness', 'Hi', 'Hey', 'A', 'A');
exports.default = ProblemModel;
