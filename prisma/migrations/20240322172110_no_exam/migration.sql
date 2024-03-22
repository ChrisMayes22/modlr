/*
  Warnings:

  - You are about to drop the `Exam` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `examId` on the `Section` table. All the data in the column will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Exam";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Section" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "examType" TEXT NOT NULL DEFAULT 'ACT',
    "scoreScale" TEXT NOT NULL DEFAULT 'ERR: Add a scorescale',
    "sectionType" TEXT NOT NULL DEFAULT 'English'
);
INSERT INTO "new_Section" ("id", "scoreScale", "sectionType") SELECT "id", "scoreScale", "sectionType" FROM "Section";
DROP TABLE "Section";
ALTER TABLE "new_Section" RENAME TO "Section";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
