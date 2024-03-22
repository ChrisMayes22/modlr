import { Prisma, Problem } from '@prisma/client'
import prisma from '../prisma/client'
  

/**
 * Creates a new problem.
 * 
 * @param payload - The data for the new problem.
 * @param payload.problemTypes - The types of the problem. Defaults to "Default Problem Type".
 * @param payload.prompt - The prompt of the problem. Defaults to "Default Prompt".
 * @param payload.text - The text of the problem. Defaults to "Default Text".
 * @param payload.answerChoices - The answer choices for the problem. Defaults to "A,B,C,D".
 * @param payload.correctAnswer - The correct answer for the problem. Defaults to "A".
 * @param payload.sectionId - The ID of the section associated with the problem.
 * @param payload.sessionId - The ID of the session associated with the problem. Can be null.
 * 
 * @returns The created problem.
 */
async function createProblem(payload: Prisma.ProblemCreateInput): Promise<Problem> {
  try {
    return await prisma.problem.create({
      data: payload
    })
  } catch(e){
    console.error(e)
    throw e;
  }
}

async function getProblemById(targetProblem: number): Promise<Problem> {
  try{
    const result = await prisma.problem.findUnique({
      where: { id: targetProblem }
    })
    
    // If the problem is not found, throw an error
    if(result === null){
      throw new Error("Problem not found")
    }

    // Otherwise, return the problem
    return result;

  } catch(e){
    console.error(e)
    throw e;
  }
}

async function getProblemBySection(targetSection: number): Promise<Problem[]> {
  try{
    return await prisma.problem.findMany({
      where: { sectionId: targetSection }
    })
  } catch(e){
    console.error(e)
    throw e;
  }
}

/**
 * Creates a new problem.
 * 
 * @param payload - The data for the new problem.
 * @param payload.problemTypes - The types of the problem. Defaults to "Default Problem Type".
 * @param payload.prompt - The prompt of the problem. Defaults to "Default Prompt".
 * @param payload.text - The text of the problem. Defaults to "Default Text".
 * @param payload.answerChoices - The answer choices for the problem. Defaults to "A,B,C,D".
 * @param payload.correctAnswer - The correct answer for the problem. Defaults to "A".
 * @param payload.sectionId - The ID of the section associated with the problem.
 * @param payload.sessionId - The ID of the session associated with the problem. Can be null.
 * 
 * @returns The created problem.
 */
async function updateProblem(targetProblem: number, payload: Prisma.ProblemUpdateInput): Promise<Problem> {
  try{
    return await prisma.problem.update({
      where: { id: targetProblem },
      data: payload
    })
  } catch(e){
    console.error(e)
    throw e;
  }
}

async function deleteProblem(targetProblem: number): Promise<Boolean>{
  try{
    await prisma.problem.delete({
      where: { id: targetProblem }
    })
    return true;
  } catch(e){
    console.error(e)
    throw e;
  }
}


export {
    createProblem,
    updateProblem,
    getProblemById,
    getProblemBySection,
    deleteProblem,
}