"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
const sequelize_typescript_1 = require("sequelize-typescript");
const db_1 = __importDefault(require("../db/db"));
let ProblemModel = class ProblemModel extends sequelize_1.Model {
    static createProblem(parentId, problemTypes, prompt, text, answerChoices, correctAnswer) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.create({
                parentId: parentId,
                problemTypes: problemTypes, prompt: prompt, text: text,
                answerChoices: answerChoices, correctAnswer: correctAnswer
            });
        });
    }
};
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], ProblemModel.prototype, "problemId", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], ProblemModel.prototype, "parentId", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], ProblemModel.prototype, "problemTypes", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], ProblemModel.prototype, "prompt", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], ProblemModel.prototype, "text", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], ProblemModel.prototype, "answerChoices", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], ProblemModel.prototype, "correctAnswer", void 0);
ProblemModel = __decorate([
    sequelize_typescript_1.Table
], ProblemModel);
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
                    defaultValue: 'A,B,C,D',
                    allowNull: false,
                    get() {
                        return this.getDataValue('answerChoices').split(',');
                    },
                    // set(answers: string[]){
                    //     this.setDataValue('answerChoices', answers.join(','));
                    // }
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
exports.default = ProblemModel;
