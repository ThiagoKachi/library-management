/*
  Warnings:

  - You are about to drop the column `returned` on the `LoanHistory` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "LoanHistory" DROP COLUMN "returned",
ADD COLUMN     "returnedDate" TIMESTAMP(3);
