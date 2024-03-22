import { Prisma, Section, Problem } from '@prisma/client'
import prisma from '../prisma/client'


/**
 * Creates a new section.
 * 
 * @param payload - The data for the new section.
 * @param payload.examType - The type of the exam. Defaults to "ACT".
 * @param payload.scoreScale - The scale of the scores. Defaults to "ERR: Add a scorescale".
 * @param payload.sectionType - The type of the section. Defaults to "English".
 * 
 * @returns The created section.
 */
async function createSection(
  payload: Prisma.SectionCreateInput,
  problems: Prisma.ProblemCreateInput[]
): Promise<Section & { problems: Problem[] }> {
  try {
    // Use Prisma client to create a new section in the database
    // The 'include' option is used to also return the associated problems
    return await prisma.section.create({
      data: {
        ...payload,
        problems: { create: problems }
      },
      include: {
        problems: true
      }
    })
  } catch (e) {
    // Log and re-throw any errors
    console.error(e)
    throw e;
  }
}

/**
 * Updates a new section.
 * 
 * @param payload - The data for the new section.
 * @param payload.examType - The type of the exam. Defaults to "ACT".
 * @param payload.scoreScale - The scale of the scores. Defaults to "ERR: Add a scorescale".
 * @param payload.sectionType - The type of the section. Defaults to "English".
 * 
 * @returns The created section.
 */
async function updateSection(targetSection: number, payload: Prisma.SectionUpdateInput): Promise<Section> {
  try{
    return await prisma.section.update({
      where: { id: targetSection },
      data: payload
    })
  } catch(e){
    console.error(e)
    throw e;
  }
}

async function getSectionById(targetSection: number): Promise<Section> {
  try{
    const result = await prisma.section.findUnique({
      where: { id: targetSection }
    })
    
    // If the section is not found, throw an error
    if(result === null){
      throw new Error("Section not found")
    }

    // Otherwise, return the section
    return result;

  } catch(e){
    console.error(e)
    throw e;
  }
}

async function deleteSection(targetSection: number): Promise<Boolean>{
  try{
    await prisma.section.delete({
      where: { id: targetSection }
    })
    return true;
  } catch(e){
    console.error(e)
    throw e;
  }
}

export {
    createSection,
    updateSection,
    getSectionById,
    deleteSection,
}

