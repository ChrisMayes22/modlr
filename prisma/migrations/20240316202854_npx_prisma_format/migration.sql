/*
  Warnings:

  - You are about to drop the column `scoreScale` on the `Exam` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Exam" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL DEFAULT 'ACT'
);
INSERT INTO "new_Exam" ("id", "type") SELECT "id", "type" FROM "Exam";
DROP TABLE "Exam";
ALTER TABLE "new_Exam" RENAME TO "Exam";
CREATE TABLE "new_Section" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "scoreScale" TEXT NOT NULL DEFAULT 'ERR: Add a scorescale',
    "examId" INTEGER NOT NULL,
    "sectionType" TEXT NOT NULL DEFAULT 'English',
    CONSTRAINT "Section_examId_fkey" FOREIGN KEY ("examId") REFERENCES "Exam" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Section" ("examId", "id", "sectionType") SELECT "examId", "id", "sectionType" FROM "Section";
DROP TABLE "Section";
ALTER TABLE "new_Section" RENAME TO "Section";
CREATE TABLE "new_Problem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "problemTypes" TEXT NOT NULL DEFAULT 'Default Problem Type',
    "prompt" TEXT NOT NULL DEFAULT 'Default Prompt',
    "text" TEXT NOT NULL DEFAULT 'Default Text',
    "answerChoices" TEXT NOT NULL DEFAULT 'A,B,C,D',
    "correctAnswer" TEXT NOT NULL DEFAULT 'A',
    "sectionId" INTEGER NOT NULL,
    "sessionId" INTEGER,
    CONSTRAINT "Problem_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "Section" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Problem_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "Session" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Problem" ("answerChoices", "correctAnswer", "id", "problemTypes", "prompt", "sectionId", "sessionId", "text") SELECT "answerChoices", "correctAnswer", "id", "problemTypes", "prompt", "sectionId", "sessionId", "text" FROM "Problem";
DROP TABLE "Problem";
ALTER TABLE "new_Problem" RENAME TO "Problem";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
