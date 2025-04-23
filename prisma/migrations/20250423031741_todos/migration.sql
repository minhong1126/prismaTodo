/*
  Warnings:

  - Added the required column `doneTodo` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalTodo` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "doneTodo" INTEGER NOT NULL,
ADD COLUMN     "totalTodo" INTEGER NOT NULL;
