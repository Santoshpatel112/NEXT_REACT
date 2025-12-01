-- CreateEnum
CREATE TYPE "public"."MessageRole" AS ENUM ('USER', 'ASSISTANT');

-- CreateEnum
CREATE TYPE "public"."MessageType" AS ENUM ('NORMAL', 'ERROR', 'TOOL_CALL');

-- CreateEnum
CREATE TYPE "public"."AttachMentType" AS ENUM ('IMAGE', 'FILE');

-- CreateTable
CREATE TABLE "public"."chat" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "chat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."message" (
    "id" TEXT NOT NULL,
    "messageRole" "public"."MessageRole" NOT NULL DEFAULT 'USER',
    "messageType" "public"."MessageType" NOT NULL DEFAULT 'NORMAL',
    "content" TEXT NOT NULL,
    "model" TEXT,
    "chatId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."attachment" (
    "id" TEXT NOT NULL,
    "messageId" TEXT NOT NULL,
    "type" "public"."AttachMentType" NOT NULL,
    "url" TEXT NOT NULL,
    "name" TEXT,
    "size" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "attachment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "chat_userId_updatedAt_idx" ON "public"."chat"("userId", "updatedAt");

-- CreateIndex
CREATE INDEX "message_chatId_createdAt_idx" ON "public"."message"("chatId", "createdAt");

-- AddForeignKey
ALTER TABLE "public"."chat" ADD CONSTRAINT "chat_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."message" ADD CONSTRAINT "message_chatId_fkey" FOREIGN KEY ("chatId") REFERENCES "public"."chat"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."attachment" ADD CONSTRAINT "attachment_messageId_fkey" FOREIGN KEY ("messageId") REFERENCES "public"."message"("id") ON DELETE CASCADE ON UPDATE CASCADE;
