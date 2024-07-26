/*
  Warnings:

  - You are about to drop the column `returnedDate` on the `LoanHistory` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "LoanHistory" DROP COLUMN "returnedDate",
ADD COLUMN     "returnedAtDate" TIMESTAMP(3);
