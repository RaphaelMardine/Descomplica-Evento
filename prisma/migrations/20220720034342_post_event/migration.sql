/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Post";

-- CreateTable
CREATE TABLE "PostEvent" (
    -- "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "eventName" TEXT NOT NULL,
    "CNPJ" TEXT NOT NULL,
    "adress" TEXT NOT NULL,
    -- "price" INTEGER NOT NULL,
    -- "quantity" INTEGER NOT NULL,
    "url" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,

    -- CONSTRAINT "PostEvent_pkey" PRIMARY KEY ("id")
);
