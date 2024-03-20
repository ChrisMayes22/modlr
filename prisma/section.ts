import { Prisma } from '@prisma/client'
import prisma from './client'

/**
 * Creates a section of an exam and persists it to the database associated with the Prisma client.
 * @param {Prisma.SectionCreateInput} payload - Contains the data necessary to populate a section.
 * @param {number} examId - The ID for the exam with which this section will be associated.
 * @param {Prisma.ProblemCreateInput[]} problems - An array of ProblemCreateInput objects representing the problems this section will contain.
 * @returns {Promise<Prisma.Section>} - A Promise resolving to an instance of the section added by this function.
*/
async function createSection(payload: Prisma.SectionCreateInput, examId: number,
  problems: Prisma.ProblemCreateInput[]) {

  return await prisma.section.create({
    data: {
        sectionType: payload.scoreScale,
        scoreScale: payload.sectionType,
        exam: { connect:  { id: examId } },
        problems: { create: problems }
    }
  })

}

export {
    createSection
}