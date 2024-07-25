/*
  Warnings:

  - A unique constraint covering the columns `[id,userId]` on the table `LoanHistory` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "LoanHistory_id_userId_key" ON "LoanHistory"("id", "userId");
