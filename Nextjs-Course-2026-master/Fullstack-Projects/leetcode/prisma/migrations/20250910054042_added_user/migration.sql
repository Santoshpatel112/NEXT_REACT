/*
  Warnings:

  - You are about to drop the column `image` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "public"."User_name_key";

-- AlterTable
ALTER TABLE "public"."User" DROP COLUMN "image",
DROP COLUMN "name",
ADD COLUMN     "firstName" TEXT,
ADD COLUMN     "imageUrl" TEXT,
ADD COLUMN     "lastName" TEXT,
ADD COLUMN     "username" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "public"."User"("username");
