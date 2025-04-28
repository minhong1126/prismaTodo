-- CreateEnum
CREATE TYPE "Color" AS ENUM ('BLACK', 'BLUE', 'SKYBLUE', 'YELLOW', 'PURPLE', 'GREEN', 'PINK', 'GRAY', 'WHITE');

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "totalTodo" INTEGER NOT NULL DEFAULT 0,
    "color" "Color" NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);
