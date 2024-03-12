import { DataTypes, Model, Sequelize } from "sequelize";
import createDb from "../db/db";

interface ProblemAttributes {
    problemId: number,
    parentId: number,
    problemTypes: string[],
    prompt: string,
    text: string,
    answerChoices: string[],
    correctAnswer: string
}

class ProblemModel extends Model implements ProblemAttributes {
    constructor(
        public problemId: number,
        public parentId: number,
        public problemTypes: string[],
        public prompt: string,
        public text: string,
        public answerChoices: string[],
        public correctAnswer: string
    ) {
        super();
    }
}

async function getProblemInstance() {
    const sequelize = await createDb();
    if(sequelize instanceof Sequelize){
        const ProblemInstance = sequelize.define('Problem', {
            problemId:  {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            parentId: {
                type: DataTypes.INTEGER,
                defaultValue: null
            },
            problemTypes: {
                type: DataTypes.STRING,
                defaultValue: '',
                allowNull: false
            },
            prompt: {
                type: DataTypes.STRING,
                defaultValue: "Error: Prompt text is missing!",
                allowNull: false
            },
            text: {
                type: DataTypes.STRING,
                defaultValue: "Error: TEXT is missing!",
                allowNull: false
            },
            answerChoices: {
                type: DataTypes.STRING,
                defaultValue: 'A, B, C, D',
                allowNull: false
            },
            correctAnswer: {
                type: DataTypes.STRING,
                defaultValue: 'A',
                allowNull: false
            }
        })

        await sequelize.sync();
        return ProblemInstance
    }
}

async function createProblem(parentId: number,
    problemTypes: string, prompt: string, text: string,
    answerChoices: string, correctAnswer: string) {

    const Problem = await getProblemInstance();
    if(Problem !== undefined){
        const problemInstance = await Problem.create({
            parentId: parentId,
            problemTypes: problemTypes, prompt: prompt, text: text,
            answerChoices: answerChoices, correctAnswer: correctAnswer
        });
    } else {
        throw Error('Problem was undefined!')
    }
}

createProblem(1, 'conciseness', 'Hi', 'Hey', 'A', 'A');



export default ProblemModel;