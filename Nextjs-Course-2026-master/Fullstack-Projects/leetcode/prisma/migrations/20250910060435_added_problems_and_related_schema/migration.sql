-- CreateEnum
CREATE TYPE "public"."Difficulty" AS ENUM ('EASY', 'MEDIUM', 'HARD');

-- CreateTable
CREATE TABLE "public"."Problem" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "difficulty" "public"."Difficulty" NOT NULL,
    "tags" TEXT[],
    "userId" TEXT NOT NULL,
    "examples" JSONB NOT NULL,
    "constraints" TEXT NOT NULL,
    "hints" TEXT,
    "editorial" TEXT,
    "testCases" JSONB NOT NULL,
    "codeSnippets" JSONB NOT NULL,
    "referenceSolutions" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Problem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Submission" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "problemId" TEXT NOT NULL,
    "sourceCode" JSONB NOT NULL,
    "language" TEXT NOT NULL,
    "stdin" TEXT,
    "stdout" TEXT,
    "stderr" TEXT,
    "compileOutput" TEXT,
    "status" TEXT NOT NULL,
    "memory" TEXT,
    "time" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Submission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."TestCaseResult" (
    "id" TEXT NOT NULL,
    "submissionId" TEXT NOT NULL,
    "testCase" INTEGER NOT NULL,
    "passed" BOOLEAN NOT NULL,
    "stdout" TEXT,
    "expected" TEXT NOT NULL,
    "stderr" TEXT,
    "compileOutput" TEXT,
    "status" TEXT NOT NULL,
    "memory" TEXT,
    "time" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TestCaseResult_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ProblemSolved" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "problemId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProblemSolved_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Playlist" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Playlist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ProblemInPlaylist" (
    "id" TEXT NOT NULL,
    "playlistId" TEXT NOT NULL,
    "problemId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProblemInPlaylist_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Problem_difficulty_idx" ON "public"."Problem"("difficulty");

-- CreateIndex
CREATE INDEX "Submission_status_idx" ON "public"."Submission"("status");

-- CreateIndex
CREATE INDEX "TestCaseResult_submissionId_idx" ON "public"."TestCaseResult"("submissionId");

-- CreateIndex
CREATE UNIQUE INDEX "ProblemSolved_userId_problemId_key" ON "public"."ProblemSolved"("userId", "problemId");

-- CreateIndex
CREATE UNIQUE INDEX "Playlist_name_userId_key" ON "public"."Playlist"("name", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "ProblemInPlaylist_playlistId_problemId_key" ON "public"."ProblemInPlaylist"("playlistId", "problemId");

-- AddForeignKey
ALTER TABLE "public"."Problem" ADD CONSTRAINT "Problem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Submission" ADD CONSTRAINT "Submission_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Submission" ADD CONSTRAINT "Submission_problemId_fkey" FOREIGN KEY ("problemId") REFERENCES "public"."Problem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."TestCaseResult" ADD CONSTRAINT "TestCaseResult_submissionId_fkey" FOREIGN KEY ("submissionId") REFERENCES "public"."Submission"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ProblemSolved" ADD CONSTRAINT "ProblemSolved_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ProblemSolved" ADD CONSTRAINT "ProblemSolved_problemId_fkey" FOREIGN KEY ("problemId") REFERENCES "public"."Problem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Playlist" ADD CONSTRAINT "Playlist_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ProblemInPlaylist" ADD CONSTRAINT "ProblemInPlaylist_playlistId_fkey" FOREIGN KEY ("playlistId") REFERENCES "public"."Playlist"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ProblemInPlaylist" ADD CONSTRAINT "ProblemInPlaylist_problemId_fkey" FOREIGN KEY ("problemId") REFERENCES "public"."Problem"("id") ON DELETE CASCADE ON UPDATE CASCADE;
