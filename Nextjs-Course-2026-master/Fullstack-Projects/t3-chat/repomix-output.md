This file is a merged representation of the entire codebase, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
.gitignore
components.json
docker-compose.yml
eslint.config.mjs
jsconfig.json
next.config.mjs
package.json
postcss.config.mjs
prisma/migrations/20251006050714_testting_migration/migration.sql
prisma/migrations/20251006051631_authentication/migration.sql
prisma/migrations/20251006065308_added_chat_schema/migration.sql
prisma/migrations/migration_lock.toml
prisma/schema.prisma
public/file.svg
public/github.svg
public/globe.svg
public/logo.svg
public/next.svg
public/vercel.svg
public/window.svg
README.md
src/app/(auth)/layout.jsx
src/app/(auth)/sign-in/page.jsx
src/app/(root)/chat/[chatId]/page.jsx
src/app/(root)/layout.jsx
src/app/(root)/page.jsx
src/app/api/ai/get-models/route.js
src/app/api/auth/[...all]/route.js
src/app/api/chat/route.js
src/app/globals.css
src/app/layout.js
src/components/ai-elements/actions.jsx
src/components/ai-elements/artifact.jsx
src/components/ai-elements/branch.jsx
src/components/ai-elements/chain-of-thought.jsx
src/components/ai-elements/code-block.jsx
src/components/ai-elements/context.jsx
src/components/ai-elements/conversation.jsx
src/components/ai-elements/image.jsx
src/components/ai-elements/inline-citation.jsx
src/components/ai-elements/loader.jsx
src/components/ai-elements/message.jsx
src/components/ai-elements/open-in-chat.jsx
src/components/ai-elements/prompt-input.jsx
src/components/ai-elements/reasoning.jsx
src/components/ai-elements/response.jsx
src/components/ai-elements/sources.jsx
src/components/ai-elements/suggestion.jsx
src/components/ai-elements/task.jsx
src/components/ai-elements/tool.jsx
src/components/ai-elements/web-preview.jsx
src/components/providers/query-provider.jsx
src/components/providers/theme-provider.jsx
src/components/ui/accordion.jsx
src/components/ui/alert-dialog.jsx
src/components/ui/alert.jsx
src/components/ui/aspect-ratio.jsx
src/components/ui/avatar.jsx
src/components/ui/badge.jsx
src/components/ui/breadcrumb.jsx
src/components/ui/button-group.jsx
src/components/ui/button.jsx
src/components/ui/calendar.jsx
src/components/ui/card.jsx
src/components/ui/carousel.jsx
src/components/ui/chart.jsx
src/components/ui/checkbox.jsx
src/components/ui/collapsible.jsx
src/components/ui/command.jsx
src/components/ui/context-menu.jsx
src/components/ui/delete-chat-modal.jsx
src/components/ui/dialog.jsx
src/components/ui/drawer.jsx
src/components/ui/dropdown-menu.jsx
src/components/ui/empty.jsx
src/components/ui/field.jsx
src/components/ui/form.jsx
src/components/ui/hover-card.jsx
src/components/ui/input-group.jsx
src/components/ui/input-otp.jsx
src/components/ui/input.jsx
src/components/ui/item.jsx
src/components/ui/kbd.jsx
src/components/ui/label.jsx
src/components/ui/menubar.jsx
src/components/ui/modal.jsx
src/components/ui/mode-toggle.jsx
src/components/ui/navigation-menu.jsx
src/components/ui/pagination.jsx
src/components/ui/popover.jsx
src/components/ui/progress.jsx
src/components/ui/radio-group.jsx
src/components/ui/resizable.jsx
src/components/ui/scroll-area.jsx
src/components/ui/select.jsx
src/components/ui/separator.jsx
src/components/ui/sheet.jsx
src/components/ui/sidebar.jsx
src/components/ui/skeleton.jsx
src/components/ui/slider.jsx
src/components/ui/sonner.jsx
src/components/ui/spinner.jsx
src/components/ui/switch.jsx
src/components/ui/table.jsx
src/components/ui/tabs.jsx
src/components/ui/textarea.jsx
src/components/ui/toggle-group.jsx
src/components/ui/toggle.jsx
src/components/ui/tooltip.jsx
src/hooks/use-mobile.js
src/lib/auth-client.js
src/lib/auth.js
src/lib/db.js
src/lib/prompt.js
src/lib/utils.js
src/modules/ai-agent/hook/ai-agent.js
src/modules/authentication/actions/index.js
src/modules/authentication/components/user-button.jsx
src/modules/chat/actions/index.js
src/modules/chat/components/active-chat-loader.jsx
src/modules/chat/components/chat-bot.jsx
src/modules/chat/components/chat-input.jsx
src/modules/chat/components/chat-message-form.jsx
src/modules/chat/components/chat-message-view.jsx
src/modules/chat/components/chat-message.jsx
src/modules/chat/components/chat-sidebar.jsx
src/modules/chat/components/chat-welcome-tabs.jsx
src/modules/chat/components/header.jsx
src/modules/chat/components/message-card.jsx
src/modules/chat/components/message-form.jsx
src/modules/chat/components/message-view.jsx
src/modules/chat/components/model-selector.jsx
src/modules/chat/hooks/chat.js
src/modules/chat/store/chat-store.js
```

# Files

## File: .gitignore
````
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/versions

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# env files (can opt-in for committing if needed)
.env*

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts

/src/generated/prisma
````

## File: components.json
````json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": false,
  "tailwind": {
    "config": "",
    "css": "src/app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "iconLibrary": "lucide",
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "registries": {}
}
````

## File: docker-compose.yml
````yaml
name : "t3-chat"
services:
  db:
    image: postgres:latest
    environment:
      POSTGRES_USER: "postgres"
      POSTGRES_PASSWORD: "postgres"
      POSTGRES_DB: "postgres"
    ports:
      - "5431:5432"
    restart: always
````

## File: eslint.config.mjs
````
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
];

export default eslintConfig;
````

## File: jsconfig.json
````json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
````

## File: next.config.mjs
````
/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
````

## File: package.json
````json
{
  "name": "t3-chat",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "docker compose up -d && next dev --turbopack",
    "build": "next build --turbopack",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "@ai-sdk/react": "^2.0.60",
    "@hookform/resolvers": "^5.2.2",
    "@openrouter/ai-sdk-provider": "^1.2.0",
    "@prisma/client": "^6.16.3",
    "@radix-ui/react-accordion": "^1.2.12",
    "@radix-ui/react-alert-dialog": "^1.1.15",
    "@radix-ui/react-aspect-ratio": "^1.1.7",
    "@radix-ui/react-avatar": "^1.1.10",
    "@radix-ui/react-checkbox": "^1.3.3",
    "@radix-ui/react-collapsible": "^1.1.12",
    "@radix-ui/react-context-menu": "^2.2.16",
    "@radix-ui/react-dialog": "^1.1.15",
    "@radix-ui/react-dropdown-menu": "^2.1.16",
    "@radix-ui/react-hover-card": "^1.1.15",
    "@radix-ui/react-label": "^2.1.7",
    "@radix-ui/react-menubar": "^1.1.16",
    "@radix-ui/react-navigation-menu": "^1.2.14",
    "@radix-ui/react-popover": "^1.1.15",
    "@radix-ui/react-progress": "^1.1.7",
    "@radix-ui/react-radio-group": "^1.3.8",
    "@radix-ui/react-scroll-area": "^1.2.10",
    "@radix-ui/react-select": "^2.2.6",
    "@radix-ui/react-separator": "^1.1.7",
    "@radix-ui/react-slider": "^1.3.6",
    "@radix-ui/react-slot": "^1.2.3",
    "@radix-ui/react-switch": "^1.2.6",
    "@radix-ui/react-tabs": "^1.1.13",
    "@radix-ui/react-toggle": "^1.1.10",
    "@radix-ui/react-toggle-group": "^1.1.11",
    "@radix-ui/react-tooltip": "^1.2.8",
    "@radix-ui/react-use-controllable-state": "^1.2.2",
    "@tanstack/react-query": "^5.90.2",
    "ai": "^5.0.60",
    "better-auth": "^1.3.26",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "^1.1.1",
    "date-fns": "^4.1.0",
    "embla-carousel-react": "^8.6.0",
    "input-otp": "^1.4.2",
    "lucide-react": "^0.544.0",
    "nanoid": "^5.1.6",
    "next": "15.5.4",
    "next-themes": "^0.4.6",
    "react": "19.1.0",
    "react-day-picker": "^9.11.0",
    "react-dom": "19.1.0",
    "react-hook-form": "^7.64.0",
    "react-resizable-panels": "^3.0.6",
    "react-syntax-highlighter": "^15.6.6",
    "recharts": "^2.15.4",
    "sonner": "^2.0.7",
    "streamdown": "^1.3.0",
    "tailwind-merge": "^3.3.1",
    "tokenlens": "^1.3.1",
    "use-stick-to-bottom": "^1.1.1",
    "vaul": "^1.1.2",
    "zod": "^4.1.11",
    "zustand": "^5.0.8"
  },
  "devDependencies": {
    "@eslint/eslintrc": "^3",
    "@tailwindcss/postcss": "^4",
    "@types/node": "24.7.0",
    "@types/react-syntax-highlighter": "^15.5.13",
    "eslint": "^9",
    "eslint-config-next": "15.5.4",
    "prisma": "^6.16.3",
    "tailwindcss": "^4",
    "tw-animate-css": "^1.4.0"
  }
}
````

## File: postcss.config.mjs
````
const config = {
  plugins: ["@tailwindcss/postcss"],
};

export default config;
````

## File: prisma/migrations/20251006050714_testting_migration/migration.sql
````sql
-- CreateTable
CREATE TABLE "public"."User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
````

## File: prisma/migrations/20251006051631_authentication/migration.sql
````sql
/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."User";

-- CreateTable
CREATE TABLE "public"."user" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "emailVerified" BOOLEAN NOT NULL DEFAULT false,
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."session" (
    "id" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "token" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "ipAddress" TEXT,
    "userAgent" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."account" (
    "id" TEXT NOT NULL,
    "accountId" TEXT NOT NULL,
    "providerId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "accessToken" TEXT,
    "refreshToken" TEXT,
    "idToken" TEXT,
    "accessTokenExpiresAt" TIMESTAMP(3),
    "refreshTokenExpiresAt" TIMESTAMP(3),
    "scope" TEXT,
    "password" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."verification" (
    "id" TEXT NOT NULL,
    "identifier" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "verification_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "public"."user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "session_token_key" ON "public"."session"("token");

-- AddForeignKey
ALTER TABLE "public"."session" ADD CONSTRAINT "session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."account" ADD CONSTRAINT "account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
````

## File: prisma/migrations/20251006065308_added_chat_schema/migration.sql
````sql
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
````

## File: prisma/migrations/migration_lock.toml
````toml
# Please do not edit this file manually
# It should be added in your version-control system (e.g., Git)
provider = "postgresql"
````

## File: prisma/schema.prisma
````
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id            String    @id @default(cuid())
  name          String
  email         String
  emailVerified Boolean   @default(false)
  image         String?
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @default(now()) @updatedAt
  sessions      Session[]
  accounts      Account[]
  chats         Chat[]

  @@unique([email])
  @@map("user")
}

model Session {
  id        String   @id
  expiresAt DateTime
  token     String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  ipAddress String?
  userAgent String?
  userId    String
  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([token])
  @@map("session")
}

model Account {
  id                    String    @id
  accountId             String
  providerId            String
  userId                String
  user                  User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  accessToken           String?
  refreshToken          String?
  idToken               String?
  accessTokenExpiresAt  DateTime?
  refreshTokenExpiresAt DateTime?
  scope                 String?
  password              String?
  createdAt             DateTime  @default(now())
  updatedAt             DateTime  @updatedAt

  @@map("account")
}

model Verification {
  id         String   @id
  identifier String
  value      String
  expiresAt  DateTime
  createdAt  DateTime @default(now())
  updatedAt  DateTime @default(now()) @updatedAt

  @@map("verification")
}

model Chat {
  id        String    @id @default(cuid())
  title     String
  model     String    
  userId    String
  user      User      @relation(fields: [userId], references: [id], onDelete: Cascade)
  messages  Message[]
  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt

  @@index([userId, updatedAt])
  @@map("chat")
}

enum MessageRole {
  USER
  ASSISTANT
}

enum MessageType {
  NORMAL
  ERROR
  TOOL_CALL
}

model Message {
  id          String      @id @default(cuid())
  messageRole MessageRole @default(USER)
  messageType MessageType @default(NORMAL)
  content     String      @db.Text
  model       String?
  chatId      String
  chat        Chat        @relation(fields: [chatId], references: [id], onDelete: Cascade)
  attachments Attachment[]
  createdAt   DateTime    @default(now())
  updatedAt   DateTime    @updatedAt

  @@index([chatId, createdAt])
  @@map("message")
}


enum AttachMentType {
  IMAGE
  FILE
}

model Attachment {
  id        String   @id @default(cuid())
  messageId String
  message   Message  @relation(fields: [messageId], references: [id], onDelete: Cascade)
  type      AttachMentType    
  url       String
  name      String?
  size      Int?
  createdAt DateTime @default(now())

  @@map("attachment")
}
````

## File: public/file.svg
````
<svg fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 13.5V5.41a1 1 0 0 0-.3-.7L9.8.29A1 1 0 0 0 9.08 0H1.5v13.5A2.5 2.5 0 0 0 4 16h8a2.5 2.5 0 0 0 2.5-2.5m-1.5 0v-7H8v-5H3v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1M9.5 5V2.12L12.38 5zM5.13 5h-.62v1.25h2.12V5zm-.62 3h7.12v1.25H4.5zm.62 3h-.62v1.25h7.12V11z" clip-rule="evenodd" fill="#666" fill-rule="evenodd"/></svg>
````

## File: public/github.svg
````
<svg width="98" height="96" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#fff"/></svg>
````

## File: public/globe.svg
````
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g clip-path="url(#a)"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.27 14.1a6.5 6.5 0 0 0 3.67-3.45q-1.24.21-2.7.34-.31 1.83-.97 3.1M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.48-1.52a7 7 0 0 1-.96 0H7.5a4 4 0 0 1-.84-1.32q-.38-.89-.63-2.08a40 40 0 0 0 3.92 0q-.25 1.2-.63 2.08a4 4 0 0 1-.84 1.31zm2.94-4.76q1.66-.15 2.95-.43a7 7 0 0 0 0-2.58q-1.3-.27-2.95-.43a18 18 0 0 1 0 3.44m-1.27-3.54a17 17 0 0 1 0 3.64 39 39 0 0 1-4.3 0 17 17 0 0 1 0-3.64 39 39 0 0 1 4.3 0m1.1-1.17q1.45.13 2.69.34a6.5 6.5 0 0 0-3.67-3.44q.65 1.26.98 3.1M8.48 1.5l.01.02q.41.37.84 1.31.38.89.63 2.08a40 40 0 0 0-3.92 0q.25-1.2.63-2.08a4 4 0 0 1 .85-1.32 7 7 0 0 1 .96 0m-2.75.4a6.5 6.5 0 0 0-3.67 3.44 29 29 0 0 1 2.7-.34q.31-1.83.97-3.1M4.58 6.28q-1.66.16-2.95.43a7 7 0 0 0 0 2.58q1.3.27 2.95.43a18 18 0 0 1 0-3.44m.17 4.71q-1.45-.12-2.69-.34a6.5 6.5 0 0 0 3.67 3.44q-.65-1.27-.98-3.1" fill="#666"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></svg>
````

## File: public/logo.svg
````
<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 247.7 53" style="enable-background:new 0 0 247.7 53;" xml:space="preserve">
<style type="text/css">
	.st0{fill:#ca0277;}
	@media (prefers-color-scheme: dark) {
		.st0{fill:#E3BAD1;}
	}
</style>
<path class="st0" d="M205.6,50.3c1.9-1,3.5-2.2,4.7-3.6v4.4v0.4h0.4h7.7h0.4v-0.4V13.5v-0.4h-0.4h-7.7h-0.4v0.4v4.3
	c-1.2-1.4-2.8-2.6-4.6-3.5c-2.2-1.2-4.8-1.8-7.8-1.8c-3.3,0-6.3,0.8-9,2.5c-2.7,1.7-4.9,4-6.4,6.9l0,0c-1.6,3-2.4,6.4-2.4,10.2
	c0,3.8,0.8,7.3,2.4,10.3c1.6,3,3.7,5.4,6.4,7.1c2.7,1.7,5.7,2.6,8.9,2.6C200.6,52.1,203.3,51.5,205.6,50.3z M208.7,25.7l0.3,0.5
	c0.8,1.7,1.2,3.7,1.2,6c0,2.5-0.5,4.7-1.5,6.6c-1,1.9-2.4,3.3-4,4.2c-1.6,1-3.4,1.5-5.3,1.5c-1.9,0-3.6-0.5-5.3-1.5
	c-1.7-1-3-2.4-4-4.3c-1-1.9-1.5-4.1-1.5-6.6c0-2.5,0.5-4.7,1.5-6.5c1-1.8,2.3-3.2,4-4.1c1.6-1,3.4-1.4,5.3-1.4
	c1.9,0,3.7,0.5,5.3,1.4C206.4,22.5,207.7,23.9,208.7,25.7z"/>
<path class="st0" d="M99.6,21.4L99.6,21.4l-0.3,0.5c-1.6,3-2.4,6.5-2.4,10.4s0.8,7.4,2.4,10.4c1.6,3,3.8,5.3,6.6,7
	c2.8,1.7,6,2.5,9.6,2.5c4.5,0,8.2-1.2,11.3-3.5c3-2.3,5.1-5.4,6.2-9.3l0.1-0.5h-0.5h-8.3H124l-0.1,0.3c-0.7,1.9-1.7,3.3-3.1,4.3
	c-1.4,0.9-3.1,1.4-5.3,1.4c-3,0-5.4-1.1-7.2-3.3l0,0c-1.8-2.2-2.7-5.3-2.7-9.3c0-4,0.9-7,2.7-9.2c1.8-2.2,4.2-3.2,7.2-3.2
	c2.2,0,3.9,0.5,5.3,1.5c1.4,1,2.4,2.4,3.1,4.2l0.1,0.3h0.3h8.3h0.5l-0.1-0.5c-1-4.1-3.1-7.3-6.1-9.5c-3-2.2-6.8-3.3-11.4-3.3
	c-3.6,0-6.8,0.8-9.6,2.5l0,0C103.2,16.4,101.1,18.6,99.6,21.4z"/>
<g>
	<polygon class="st0" points="237.8,13.2 237.8,3.9 229.1,3.9 229.1,13.2 224.8,13.2 224.8,20.5 229.1,20.5 229.1,52.1 230,51.2 
		230,51.2 232,49.2 237.8,43.2 237.8,20.5 246.8,20.5 246.8,13.2 	"/>
	<path class="st0" d="M71.7,3.4H51.5l-7.1,7.2h18.8"/>
	<path class="st0" d="M166.8,14.5l-0.1-0.1c-2.3-1.3-4.9-1.9-7.7-1.9c-2.4,0-4.6,0.5-6.7,1.3c-1.6,0.7-3,1.7-4.2,2.8V0.1l-8.6,8.8
		v42.7h8.6V30.1c0-3.2,0.8-5.7,2.4-7.3c1.6-1.7,3.7-2.5,6.4-2.5s4.8,0.8,6.4,2.5c1.6,1.7,2.3,4.2,2.3,7.4v21.4h8.5V29
		c0-3.5-0.6-6.4-1.9-8.9C170.8,17.6,169,15.7,166.8,14.5z"/>
	<path class="st0" d="M43,3.4H0v0.5l0,0v3.2v3.7h3.5l0,0h11.9v40.8H24V10.7h11.8L43,3.4z"/>
</g>
<path class="st0" d="M71.9,25.4l-0.2-0.2h0c-2.2-2.3-5.3-3.7-9.1-4.2L73.4,9.8V3.4H54.8l-9.4,7.2h17.7L52.5,21.8v5.9h7
	c2.5,0,4.4,0.7,5.9,2.2c1.4,1.4,2.1,3.4,2.1,6.1c0,2.6-0.7,4.7-2.1,6.2c-1.4,1.5-3.4,2.2-5.9,2.2c-2.5,0-4.4-0.7-5.7-2
	c-1.4-1.4-2.1-3.1-2.3-5.2l0-0.5h-8.1l0,0.5c0.2,4.6,1.8,8.1,4.8,10.5c2.9,2.4,6.7,3.7,11.3,3.7c5,0,9-1.4,11.9-4.2
	c2.9-2.8,4.4-6.6,4.4-11.3C75.6,31.5,74.4,28,71.9,25.4z"/>
<rect x="84.3" y="44.2" class="st0" width="6.9" height="6.9"/>
</svg>
````

## File: public/next.svg
````
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 394 80"><path fill="#000" d="M262 0h68.5v12.7h-27.2v66.6h-13.6V12.7H262V0ZM149 0v12.7H94v20.4h44.3v12.6H94v21h55v12.6H80.5V0h68.7zm34.3 0h-17.8l63.8 79.4h17.9l-32-39.7 32-39.6h-17.9l-23 28.6-23-28.6zm18.3 56.7-9-11-27.1 33.7h17.8l18.3-22.7z"/><path fill="#000" d="M81 79.3 17 0H0v79.3h13.6V17l50.2 62.3H81Zm252.6-.4c-1 0-1.8-.4-2.5-1s-1.1-1.6-1.1-2.6.3-1.8 1-2.5 1.6-1 2.6-1 1.8.3 2.5 1a3.4 3.4 0 0 1 .6 4.3 3.7 3.7 0 0 1-3 1.8zm23.2-33.5h6v23.3c0 2.1-.4 4-1.3 5.5a9.1 9.1 0 0 1-3.8 3.5c-1.6.8-3.5 1.3-5.7 1.3-2 0-3.7-.4-5.3-1s-2.8-1.8-3.7-3.2c-.9-1.3-1.4-3-1.4-5h6c.1.8.3 1.6.7 2.2s1 1.2 1.6 1.5c.7.4 1.5.5 2.4.5 1 0 1.8-.2 2.4-.6a4 4 0 0 0 1.6-1.8c.3-.8.5-1.8.5-3V45.5zm30.9 9.1a4.4 4.4 0 0 0-2-3.3 7.5 7.5 0 0 0-4.3-1.1c-1.3 0-2.4.2-3.3.5-.9.4-1.6 1-2 1.6a3.5 3.5 0 0 0-.3 4c.3.5.7.9 1.3 1.2l1.8 1 2 .5 3.2.8c1.3.3 2.5.7 3.7 1.2a13 13 0 0 1 3.2 1.8 8.1 8.1 0 0 1 3 6.5c0 2-.5 3.7-1.5 5.1a10 10 0 0 1-4.4 3.5c-1.8.8-4.1 1.2-6.8 1.2-2.6 0-4.9-.4-6.8-1.2-2-.8-3.4-2-4.5-3.5a10 10 0 0 1-1.7-5.6h6a5 5 0 0 0 3.5 4.6c1 .4 2.2.6 3.4.6 1.3 0 2.5-.2 3.5-.6 1-.4 1.8-1 2.4-1.7a4 4 0 0 0 .8-2.4c0-.9-.2-1.6-.7-2.2a11 11 0 0 0-2.1-1.4l-3.2-1-3.8-1c-2.8-.7-5-1.7-6.6-3.2a7.2 7.2 0 0 1-2.4-5.7 8 8 0 0 1 1.7-5 10 10 0 0 1 4.3-3.5c2-.8 4-1.2 6.4-1.2 2.3 0 4.4.4 6.2 1.2 1.8.8 3.2 2 4.3 3.4 1 1.4 1.5 3 1.5 5h-5.8z"/></svg>
````

## File: public/vercel.svg
````
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1155 1000"><path d="m577.3 0 577.4 1000H0z" fill="#fff"/></svg>
````

## File: public/window.svg
````
<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 2.5h13v10a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1zM0 1h16v11.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 12.5zm3.75 4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M7 4.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m1.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5" fill="#666"/></svg>
````

## File: README.md
````markdown
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
````

## File: src/app/(auth)/layout.jsx
````javascript
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import React from 'react'

const AuthLayout = async({children}) => {
    const session = await auth.api.getSession({
        headers:await headers()
    })

    if(session){
        return redirect("/")
    }

  return (
    <div>{children}</div>
  )
}

export default AuthLayout
````

## File: src/app/(auth)/sign-in/page.jsx
````javascript
"use client";
import { Button } from "@/components/ui/button";

import { signIn } from "@/lib/auth-client";
import { Chrome, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-background  px-4 py-16 md:py-32 ">
      <div className="flex flex-row justify-center items-center gap-x-2">
        <h1 className="text-3xl font-extrabold text-foreground ">Welcome to</h1>
        <Image src="/logo.svg" alt="logo" width={142} height={142} />
      </div>
      <p className="mt-2 text-lg text-muted-foreground font-semibold">
        Sign in below (we'll increase your message limits if you do 😉)
      </p>

      <Button
        variant={"default"}
        className={
          "max-w-sm mt-5 w-full px-7 py-7 flex flex-row justify-center items-center cursor-pointer"
        }
        onClick={() =>
          signIn.social({
            provider: "github",
            callbackURL: "/",
          })
        }
      >
        <Image src={"/github.svg"} alt={"github"} width={24} height={24} />
        <span className="font-bold ml-2">Sign in with Github</span>
      </Button>
    </section>
  );
};

export default LoginPage;
````

## File: src/app/(root)/chat/[chatId]/page.jsx
````javascript
import MessageView from '@/modules/chat/components/message-view'
import React from 'react'
import ActiveChatLoader from '@/modules/chat/components/active-chat-loader'
import ChatViewWithForm from '@/modules/chat/components/chat-bot';



const Page = async ({ params }) => {
  const { chatId } = await params;

  return (
    <>
      <ActiveChatLoader chatId={chatId} />
      {/* <MessageView chatId={chatId} /> */}
      <ChatViewWithForm chatId={chatId} />
    </>
  );
};

export default Page;
````

## File: src/app/(root)/layout.jsx
````javascript
import { auth } from "@/lib/auth";
import { currentUser } from "@/modules/authentication/actions";
import { getAllChats } from "@/modules/chat/actions";
import { ChatSidebar } from "@/modules/chat/components/chat-sidebar";
import Header from "@/modules/chat/components/header";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

const Layout = async ({ children }) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = await currentUser();

  const { data: chats } = await getAllChats();


  if (!session) {
    return redirect("/sign-in");
  }
  return (
    <div className="flex h-screen overflow-hidden">
      <ChatSidebar user={user} chats={chats} />
      <main className="flex-1 overflow-hidden">
       <Header />
        {children}
      </main>
    </div>
  );
};

export default Layout;
````

## File: src/app/(root)/page.jsx
````javascript
import { ModeToggle } from '@/components/ui/mode-toggle'
import { currentUser } from '@/modules/authentication/actions'
import ChatMessageView from '@/modules/chat/components/chat-message-view'
import React from 'react'

const Home = async() => {
  const user = await currentUser()
  return (
    <>
      <ChatMessageView user={user}/>
    </>
  )
}

export default Home
````

## File: src/app/api/ai/get-models/route.js
````javascript
import { NextResponse } from 'next/server';

export async function GET(req) {
  try {
   
    const response = await fetch('https://openrouter.ai/api/v1/models', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`OpenRouter API error: ${response.status}`);
    }

    const data = await response.json();
    
    const freeModels = data.data.filter(model => {
      const promptPrice = parseFloat(model.pricing?.prompt || '0');
      const completionPrice = parseFloat(model.pricing?.completion || '0');
      return promptPrice === 0 && completionPrice === 0;
    });

    // Return formatted response with useful model information
    const formattedModels = freeModels.map(model => ({
      id: model.id,
      name: model.name,
      description: model.description,
      context_length: model.context_length,
      architecture: model.architecture,
      pricing: model.pricing,
      top_provider: model.top_provider,
    }));

    return NextResponse.json({
      models: formattedModels,
    });

  } catch (error) {
    console.error('Error fetching free models:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to fetch free models',
      },
      { status: 500 }
    );
  }
}
````

## File: src/app/api/auth/[...all]/route.js
````javascript
import { auth } from "@/lib/auth"; 
import { toNextJsHandler } from "better-auth/next-js";

export const { POST, GET } = toNextJsHandler(auth);
````

## File: src/app/api/chat/route.js
````javascript
import { convertToModelMessages, streamText } from "ai";
import { CHAT_SYSTEM_PROMPT } from "@/lib/prompt";
import db from "@/lib/db";
import { MessageRole } from "@prisma/client";
import { createOpenRouter } from "@openrouter/ai-sdk-provider";

const provider = createOpenRouter({
  apiKey: process.env.OPENROUTER_API_KEY,
});

// Helper function to extract text content
function extractTextContent(message) {
  if (message.parts) {
    return message.parts
      .filter(p => p.text)
      .map(p => p.text.trim())
      .join("\n\n");
  }
  return message.content || "";
}

export async function POST(req) {
  const { chatId, messages: newMessages, model } = await req.json();

  console.log({ chatId, newMessages, model });

  // Fetch previous messages
  const previousMessages = chatId
    ? await db.message.findMany({
        where: { chatId },
        orderBy: { createdAt: "asc" },
      })
    : [];

  // Convert Prisma messages to UIMessage format
  const uiMessages = previousMessages
    .filter(msg => msg.content?.trim() && msg.id)
    .map((msg) => {
      const content = msg.content;
      const parts = [];
      
      // Check if content has reasoning separator
      if (content.includes('[REASONING]:')) {
        const sections = content.split('\n\n---\n\n');
        
        // Extract reasoning parts
        if (sections[0]?.includes('[REASONING]:')) {
          const reasoningTexts = sections[0].split('\n\n');
          reasoningTexts.forEach(text => {
            if (text.includes('[REASONING]:')) {
              const reasoningText = text.replace('[REASONING]:', '').trim();
              if (reasoningText) {
                parts.push({ type: 'reasoning', text: reasoningText });
              }
            }
          });
        }
        
        // Extract text content
        if (sections[1]) {
          parts.push({ type: 'text', text: sections[1].trim() });
        }
      } else {
        parts.push({ type: 'text', text: content });
      }
      
      return {
        id: msg.id,
        role: msg.messageRole.toLowerCase(),
        parts: parts,
        createdAt: msg.createdAt,
      };
    });

  // Normalize newMessages to array
  const normalizedNewMessages = Array.isArray(newMessages) ? newMessages : [newMessages];

  console.log({ uiMessages, normalizedNewMessages });

  // Combine all messages
  const allUIMessages = [...uiMessages, ...normalizedNewMessages];

  // Convert to model format
  const modelMessages = convertToModelMessages(allUIMessages);

  const result = streamText({
    model: provider.chat(model),
    messages: modelMessages,
    system: CHAT_SYSTEM_PROMPT,
  });

  return result.toUIMessageStreamResponse({
    sendReasoning: true,
    sendSources: true,
    originalMessages: allUIMessages,
    onFinish: async ({ responseMessage }) => {
      try {
        console.log('🧩 RESPONSE MESSAGE:', JSON.stringify(responseMessage));

        const messagesToSave = [];

        // Save only the NEW user message (latest from normalizedNewMessages)
        const latestUserMessage = normalizedNewMessages[normalizedNewMessages.length - 1];
        
        if (latestUserMessage?.role === "user") {
          const userContent = extractTextContent(latestUserMessage);
          console.log('💬 USER MESSAGE:', userContent);
          
          messagesToSave.push({
            chatId,
            content: userContent,
            messageRole: MessageRole.USER,
            model,
            messageType: "NORMAL",
          });
        }

        // Save assistant response
        const assistantContent = extractTextContent(responseMessage);
        
        if (assistantContent) {
          console.log('🤖 ASSISTANT MESSAGE:', assistantContent.substring(0, 100));
          
          messagesToSave.push({
            chatId,
            content: assistantContent,
            messageRole: MessageRole.ASSISTANT,
            model,
            messageType: "NORMAL",
          });
        }

        // Save to database
        if (messagesToSave.length > 0) {
          await db.message.createMany({
            data: messagesToSave,
          });
          console.log(`💾 Saved ${messagesToSave.length} message(s)`);
        }
      } catch (error) {
        console.error("❌ Error saving messages:", error);
      }
    }
  });
}
````

## File: src/app/globals.css
````css
@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

:root {
  --background: #faf5fa;
  --foreground: #501854;
  --card: #faf5fa;
  --card-foreground: #501854;
  --popover: #ffffff;
  --popover-foreground: #501854;
  --primary: #a84370;
  --primary-foreground: #ffffff;
  --secondary: #f1c4e6;
  --secondary-foreground: #77347c;
  --muted: #f6e5f3;
  --muted-foreground: #834588;
  --accent: #f1c4e6;
  --accent-foreground: #77347c;
  --destructive: #ab4347;
  --destructive-foreground: #ffffff;
  --border: #efbdeb;
  --input: #e7c1dc;
  --ring: #db2777;
  --chart-1: #d926a2;
  --chart-2: #6c12b9;
  --chart-3: #274754;
  --chart-4: #e8c468;
  --chart-5: #f4a462;
  --sidebar: #f3e4f6;
  --sidebar-foreground: #ac1668;
  --sidebar-primary: #454554;
  --sidebar-primary-foreground: #faf1f7;
  --sidebar-accent: #f8f8f7;
  --sidebar-accent-foreground: #454554;
  --sidebar-border: #eceae9;
  --sidebar-ring: #db2777;
  --font-sans: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  --font-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
  --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  --radius: 0.5rem;
  --shadow-x: 0;
  --shadow-y: 1px;
  --shadow-blur: 3px;
  --shadow-spread: 0px;
  --shadow-opacity: 0.1;
  --shadow-color: oklch(0 0 0);
  --shadow-2xs: 0 1px 3px 0px hsl(0 0% 0% / 0.05);
  --shadow-xs: 0 1px 3px 0px hsl(0 0% 0% / 0.05);
  --shadow-sm: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 1px 2px -1px hsl(0 0% 0% / 0.10);
  --shadow: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 1px 2px -1px hsl(0 0% 0% / 0.10);
  --shadow-md: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 2px 4px -1px hsl(0 0% 0% / 0.10);
  --shadow-lg: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 4px 6px -1px hsl(0 0% 0% / 0.10);
  --shadow-xl: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 8px 10px -1px hsl(0 0% 0% / 0.10);
  --shadow-2xl: 0 1px 3px 0px hsl(0 0% 0% / 0.25);
  --tracking-normal: 0em;
  --spacing: 0.25rem;
}

.dark {
  --background: #221d27;
  --foreground: #d2c4de;
  --card: #2c2632;
  --card-foreground: #dbc5d2;
  --popover: #100a0e;
  --popover-foreground: #f8f1f5;
  --primary: #a3004c;
  --primary-foreground: #efc0d8;
  --secondary: #362d3d;
  --secondary-foreground: #d4c7e1;
  --muted: #28222d;
  --muted-foreground: #c2b6cf;
  --accent: #463753;
  --accent-foreground: #f8f1f5;
  --destructive: #301015;
  --destructive-foreground: #ffffff;
  --border: #3b3237;
  --input: #3e343c;
  --ring: #db2777;
  --chart-1: #a84370;
  --chart-2: #934dcb;
  --chart-3: #e88c30;
  --chart-4: #af57db;
  --chart-5: #e23670;
  --sidebar: #181117;
  --sidebar-foreground: #e0cad6;
  --sidebar-primary: #1d4ed8;
  --sidebar-primary-foreground: #ffffff;
  --sidebar-accent: #261922;
  --sidebar-accent-foreground: #f4f4f5;
  --sidebar-border: #000000;
  --sidebar-ring: #db2777;
  --font-sans: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  --font-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
  --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  --radius: 0.5rem;
  --shadow-x: 0;
  --shadow-y: 1px;
  --shadow-blur: 3px;
  --shadow-spread: 0px;
  --shadow-opacity: 0.1;
  --shadow-color: oklch(0 0 0);
  --shadow-2xs: 0 1px 3px 0px hsl(0 0% 0% / 0.05);
  --shadow-xs: 0 1px 3px 0px hsl(0 0% 0% / 0.05);
  --shadow-sm: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 1px 2px -1px hsl(0 0% 0% / 0.10);
  --shadow: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 1px 2px -1px hsl(0 0% 0% / 0.10);
  --shadow-md: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 2px 4px -1px hsl(0 0% 0% / 0.10);
  --shadow-lg: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 4px 6px -1px hsl(0 0% 0% / 0.10);
  --shadow-xl: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 8px 10px -1px hsl(0 0% 0% / 0.10);
  --shadow-2xl: 0 1px 3px 0px hsl(0 0% 0% / 0.25);
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);

  --font-sans: var(--font-sans);
  --font-mono: var(--font-mono);
  --font-serif: var(--font-serif);

  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);

  --shadow-2xs: var(--shadow-2xs);
  --shadow-xs: var(--shadow-xs);
  --shadow-sm: var(--shadow-sm);
  --shadow: var(--shadow);
  --shadow-md: var(--shadow-md);
  --shadow-lg: var(--shadow-lg);
  --shadow-xl: var(--shadow-xl);
  --shadow-2xl: var(--shadow-2xl);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}
````

## File: src/app/layout.js
````javascript
import { Poppins } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/components/providers/query-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "T3 Chat ",
  description: "Generated by create-t3-app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={` ${poppins.className} antialiased`}>
        <QueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster/>
            {children}
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
````

## File: src/components/ai-elements/actions.jsx
````javascript
"use client";;
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export const Actions = ({
  className,
  children,
  ...props
}) => (
  <div className={cn("flex items-center gap-1", className)} {...props}>
    {children}
  </div>
);

export const Action = ({
  tooltip,
  children,
  label,
  className,
  variant = "ghost",
  size = "sm",
  ...props
}) => {
  const button = (
    <Button
      className={cn(
        "relative size-9 p-1.5 text-muted-foreground hover:text-foreground",
        className
      )}
      size={size}
      type="button"
      variant={variant}
      {...props}>
      {children}
      <span className="sr-only">{label || tooltip}</span>
    </Button>
  );

  if (tooltip) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>{button}</TooltipTrigger>
          <TooltipContent>
            <p>{tooltip}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return button;
};
````

## File: src/components/ai-elements/artifact.jsx
````javascript
"use client";;
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { XIcon } from "lucide-react";

export const Artifact = ({
  className,
  ...props
}) => (
  <div
    className={cn(
      "flex flex-col overflow-hidden rounded-lg border bg-background shadow-sm",
      className
    )}
    {...props} />
);

export const ArtifactHeader = ({
  className,
  ...props
}) => (
  <div
    className={cn(
      "flex items-center justify-between border-b bg-muted/50 px-4 py-3",
      className
    )}
    {...props} />
);

export const ArtifactClose = ({
  className,
  children,
  size = "sm",
  variant = "ghost",
  ...props
}) => (
  <Button
    className={cn("size-8 p-0 text-muted-foreground hover:text-foreground", className)}
    size={size}
    type="button"
    variant={variant}
    {...props}>
    {children ?? <XIcon className="size-4" />}
    <span className="sr-only">Close</span>
  </Button>
);

export const ArtifactTitle = ({
  className,
  ...props
}) => (
  <p
    className={cn("font-medium text-foreground text-sm", className)}
    {...props} />
);

export const ArtifactDescription = ({
  className,
  ...props
}) => (
  <p className={cn("text-muted-foreground text-sm", className)} {...props} />
);

export const ArtifactActions = ({
  className,
  ...props
}) => (
  <div className={cn("flex items-center gap-1", className)} {...props} />
);

export const ArtifactAction = ({
  tooltip,
  label,
  icon: Icon,
  children,
  className,
  size = "sm",
  variant = "ghost",
  ...props
}) => {
  const button = (
    <Button
      className={cn("size-8 p-0 text-muted-foreground hover:text-foreground", className)}
      size={size}
      type="button"
      variant={variant}
      {...props}>
      {Icon ? <Icon className="size-4" /> : children}
      <span className="sr-only">{label || tooltip}</span>
    </Button>
  );

  if (tooltip) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>{button}</TooltipTrigger>
          <TooltipContent>
            <p>{tooltip}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return button;
};

export const ArtifactContent = ({
  className,
  ...props
}) => (
  <div className={cn("flex-1 overflow-auto p-4", className)} {...props} />
);
````

## File: src/components/ai-elements/branch.jsx
````javascript
"use client";;
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { createContext, useContext, useEffect, useState } from "react";

const BranchContext = createContext(null);

const useBranch = () => {
  const context = useContext(BranchContext);

  if (!context) {
    throw new Error("Branch components must be used within Branch");
  }

  return context;
};

export const Branch = ({
  defaultBranch = 0,
  onBranchChange,
  className,
  ...props
}) => {
  const [currentBranch, setCurrentBranch] = useState(defaultBranch);
  const [branches, setBranches] = useState([]);

  const handleBranchChange = (newBranch) => {
    setCurrentBranch(newBranch);
    onBranchChange?.(newBranch);
  };

  const goToPrevious = () => {
    const newBranch =
      currentBranch > 0 ? currentBranch - 1 : branches.length - 1;
    handleBranchChange(newBranch);
  };

  const goToNext = () => {
    const newBranch =
      currentBranch < branches.length - 1 ? currentBranch + 1 : 0;
    handleBranchChange(newBranch);
  };

  const contextValue = {
    currentBranch,
    totalBranches: branches.length,
    goToPrevious,
    goToNext,
    branches,
    setBranches,
  };

  return (
    <BranchContext.Provider value={contextValue}>
      <div className={cn("grid w-full gap-2 [&>div]:pb-0", className)} {...props} />
    </BranchContext.Provider>
  );
};

export const BranchMessages = ({
  children,
  ...props
}) => {
  const { currentBranch, setBranches, branches } = useBranch();
  const childrenArray = Array.isArray(children) ? children : [children];

  // Use useEffect to update branches when they change
  useEffect(() => {
    if (branches.length !== childrenArray.length) {
      setBranches(childrenArray);
    }
  }, [childrenArray, branches, setBranches]);

  return childrenArray.map((branch, index) => (
    <div
      className={cn(
        "grid gap-2 overflow-hidden [&>div]:pb-0",
        index === currentBranch ? "block" : "hidden"
      )}
      key={branch.key}
      {...props}>
      {branch}
    </div>
  ));
};

export const BranchSelector = ({
  className,
  from,
  ...props
}) => {
  const { totalBranches } = useBranch();

  // Don't render if there's only one branch
  if (totalBranches <= 1) {
    return null;
  }

  return (
    <div
      className={cn(
        "flex items-center gap-2 self-end px-10",
        from === "assistant" ? "justify-start" : "justify-end",
        className
      )}
      {...props} />
  );
};

export const BranchPrevious = ({
  className,
  children,
  ...props
}) => {
  const { goToPrevious, totalBranches } = useBranch();

  return (
    <Button
      aria-label="Previous branch"
      className={cn(
        "size-7 shrink-0 rounded-full text-muted-foreground transition-colors",
        "hover:bg-accent hover:text-foreground",
        "disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      disabled={totalBranches <= 1}
      onClick={goToPrevious}
      size="icon"
      type="button"
      variant="ghost"
      {...props}>
      {children ?? <ChevronLeftIcon size={14} />}
    </Button>
  );
};

export const BranchNext = ({
  className,
  children,
  ...props
}) => {
  const { goToNext, totalBranches } = useBranch();

  return (
    <Button
      aria-label="Next branch"
      className={cn(
        "size-7 shrink-0 rounded-full text-muted-foreground transition-colors",
        "hover:bg-accent hover:text-foreground",
        "disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      disabled={totalBranches <= 1}
      onClick={goToNext}
      size="icon"
      type="button"
      variant="ghost"
      {...props}>
      {children ?? <ChevronRightIcon size={14} />}
    </Button>
  );
};

export const BranchPage = ({
  className,
  ...props
}) => {
  const { currentBranch, totalBranches } = useBranch();

  return (
    <span
      className={cn("font-medium text-muted-foreground text-xs tabular-nums", className)}
      {...props}>
      {currentBranch + 1}of {totalBranches}
    </span>
  );
};
````

## File: src/components/ai-elements/chain-of-thought.jsx
````javascript
"use client";;
import { useControllableState } from "@radix-ui/react-use-controllable-state";
import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { BrainIcon, ChevronDownIcon, DotIcon } from "lucide-react";
import { createContext, memo, useContext, useMemo } from "react";

const ChainOfThoughtContext = createContext(null);

const useChainOfThought = () => {
  const context = useContext(ChainOfThoughtContext);
  if (!context) {
    throw new Error("ChainOfThought components must be used within ChainOfThought");
  }
  return context;
};

export const ChainOfThought = memo(({
  className,
  open,
  defaultOpen = false,
  onOpenChange,
  children,
  ...props
}) => {
  const [isOpen, setIsOpen] = useControllableState({
    prop: open,
    defaultProp: defaultOpen,
    onChange: onOpenChange,
  });

  const chainOfThoughtContext = useMemo(() => ({ isOpen, setIsOpen }), [isOpen, setIsOpen]);

  return (
    <ChainOfThoughtContext.Provider value={chainOfThoughtContext}>
      <div className={cn("not-prose max-w-prose space-y-4", className)} {...props}>
        {children}
      </div>
    </ChainOfThoughtContext.Provider>
  );
});

export const ChainOfThoughtHeader = memo(({
  className,
  children,
  ...props
}) => {
  const { isOpen, setIsOpen } = useChainOfThought();

  return (
    <Collapsible onOpenChange={setIsOpen} open={isOpen}>
      <CollapsibleTrigger
        className={cn(
          "flex w-full items-center gap-2 text-muted-foreground text-sm transition-colors hover:text-foreground",
          className
        )}
        {...props}>
        <BrainIcon className="size-4" />
        <span className="flex-1 text-left">
          {children ?? "Chain of Thought"}
        </span>
        <ChevronDownIcon
          className={cn("size-4 transition-transform", isOpen ? "rotate-180" : "rotate-0")} />
      </CollapsibleTrigger>
    </Collapsible>
  );
});

export const ChainOfThoughtStep = memo(({
  className,
  icon: Icon = DotIcon,
  label,
  description,
  status = "complete",
  children,
  ...props
}) => {
  const statusStyles = {
    complete: "text-muted-foreground",
    active: "text-foreground",
    pending: "text-muted-foreground/50",
  };

  return (
    <div
      className={cn(
        "flex gap-2 text-sm",
        statusStyles[status],
        "fade-in-0 slide-in-from-top-2 animate-in",
        className
      )}
      {...props}>
      <div className="relative mt-0.5">
        <Icon className="size-4" />
        <div className="-mx-px absolute top-7 bottom-0 left-1/2 w-px bg-border" />
      </div>
      <div className="flex-1 space-y-2">
        <div>{label}</div>
        {description && (
          <div className="text-muted-foreground text-xs">{description}</div>
        )}
        {children}
      </div>
    </div>
  );
});

export const ChainOfThoughtSearchResults = memo(({
  className,
  ...props
}) => (
  <div className={cn("flex items-center gap-2", className)} {...props} />
));

export const ChainOfThoughtSearchResult = memo(({
  className,
  children,
  ...props
}) => (
  <Badge
    className={cn("gap-1 px-2 py-0.5 font-normal text-xs", className)}
    variant="secondary"
    {...props}>
    {children}
  </Badge>
));

export const ChainOfThoughtContent = memo(({
  className,
  children,
  ...props
}) => {
  const { isOpen } = useChainOfThought();

  return (
    <Collapsible open={isOpen}>
      <CollapsibleContent
        className={cn(
          "mt-2 space-y-3",
          "data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-top-2 data-[state=open]:slide-in-from-top-2 text-popover-foreground outline-none data-[state=closed]:animate-out data-[state=open]:animate-in",
          className
        )}
        {...props}>
        {children}
      </CollapsibleContent>
    </Collapsible>
  );
});

export const ChainOfThoughtImage = memo(({
  className,
  children,
  caption,
  ...props
}) => (
  <div className={cn("mt-2 space-y-2", className)} {...props}>
    <div
      className="relative flex max-h-[22rem] items-center justify-center overflow-hidden rounded-lg bg-muted p-3">
      {children}
    </div>
    {caption && <p className="text-muted-foreground text-xs">{caption}</p>}
  </div>
));

ChainOfThought.displayName = "ChainOfThought";
ChainOfThoughtHeader.displayName = "ChainOfThoughtHeader";
ChainOfThoughtStep.displayName = "ChainOfThoughtStep";
ChainOfThoughtSearchResults.displayName = "ChainOfThoughtSearchResults";
ChainOfThoughtSearchResult.displayName = "ChainOfThoughtSearchResult";
ChainOfThoughtContent.displayName = "ChainOfThoughtContent";
ChainOfThoughtImage.displayName = "ChainOfThoughtImage";
````

## File: src/components/ai-elements/code-block.jsx
````javascript
"use client";;
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckIcon, CopyIcon } from "lucide-react";
import { createContext, useContext, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlockContext = createContext({
  code: "",
});

export const CodeBlock = ({
  code,
  language,
  showLineNumbers = false,
  className,
  children,
  ...props
}) => (
  <CodeBlockContext.Provider value={{ code }}>
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-md border bg-background text-foreground",
        className
      )}
      {...props}>
      <div className="relative">
        <SyntaxHighlighter
          className="overflow-hidden dark:hidden"
          codeTagProps={{
            className: "font-mono text-sm",
          }}
          customStyle={{
            margin: 0,
            padding: "1rem",
            fontSize: "0.875rem",
            background: "hsl(var(--background))",
            color: "hsl(var(--foreground))",
          }}
          language={language}
          lineNumberStyle={{
            color: "hsl(var(--muted-foreground))",
            paddingRight: "1rem",
            minWidth: "2.5rem",
          }}
          showLineNumbers={showLineNumbers}
          style={oneLight}>
          {code}
        </SyntaxHighlighter>
        <SyntaxHighlighter
          className="hidden overflow-hidden dark:block"
          codeTagProps={{
            className: "font-mono text-sm",
          }}
          customStyle={{
            margin: 0,
            padding: "1rem",
            fontSize: "0.875rem",
            background: "hsl(var(--background))",
            color: "hsl(var(--foreground))",
          }}
          language={language}
          lineNumberStyle={{
            color: "hsl(var(--muted-foreground))",
            paddingRight: "1rem",
            minWidth: "2.5rem",
          }}
          showLineNumbers={showLineNumbers}
          style={oneDark}>
          {code}
        </SyntaxHighlighter>
        {children && (
          <div className="absolute top-2 right-2 flex items-center gap-2">
            {children}
          </div>
        )}
      </div>
    </div>
  </CodeBlockContext.Provider>
);

export const CodeBlockCopyButton = ({
  onCopy,
  onError,
  timeout = 2000,
  children,
  className,
  ...props
}) => {
  const [isCopied, setIsCopied] = useState(false);
  const { code } = useContext(CodeBlockContext);

  const copyToClipboard = async () => {
    if (typeof window === "undefined" || !navigator.clipboard.writeText) {
      onError?.(new Error("Clipboard API not available"));
      return;
    }

    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      onCopy?.();
      setTimeout(() => setIsCopied(false), timeout);
    } catch (error) {
      onError?.(error);
    }
  };

  const Icon = isCopied ? CheckIcon : CopyIcon;

  return (
    <Button
      className={cn("shrink-0", className)}
      onClick={copyToClipboard}
      size="icon"
      variant="ghost"
      {...props}>
      {children ?? <Icon size={14} />}
    </Button>
  );
};
````

## File: src/components/ai-elements/context.jsx
````javascript
"use client";;
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { createContext, useContext } from "react";
import { estimateCost } from "tokenlens";

const PERCENT_MAX = 100;
const ICON_RADIUS = 10;
const ICON_VIEWBOX = 24;
const ICON_CENTER = 12;
const ICON_STROKE_WIDTH = 2;

const ContextContext = createContext(null);

const useContextValue = () => {
  const context = useContext(ContextContext);

  if (!context) {
    throw new Error("Context components must be used within Context");
  }

  return context;
};

export const Context = ({
  usedTokens,
  maxTokens,
  usage,
  modelId,
  ...props
}) => (
  <ContextContext.Provider
    value={{
      usedTokens,
      maxTokens,
      usage,
      modelId,
    }}>
    <HoverCard closeDelay={0} openDelay={0} {...props} />
  </ContextContext.Provider>
);

const ContextIcon = () => {
  const { usedTokens, maxTokens } = useContextValue();
  const circumference = 2 * Math.PI * ICON_RADIUS;
  const usedPercent = usedTokens / maxTokens;
  const dashOffset = circumference * (1 - usedPercent);

  return (
    <svg
      aria-label="Model context usage"
      height="20"
      role="img"
      style={{ color: "currentcolor" }}
      viewBox={`0 0 ${ICON_VIEWBOX} ${ICON_VIEWBOX}`}
      width="20">
      <circle
        cx={ICON_CENTER}
        cy={ICON_CENTER}
        fill="none"
        opacity="0.25"
        r={ICON_RADIUS}
        stroke="currentColor"
        strokeWidth={ICON_STROKE_WIDTH} />
      <circle
        cx={ICON_CENTER}
        cy={ICON_CENTER}
        fill="none"
        opacity="0.7"
        r={ICON_RADIUS}
        stroke="currentColor"
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={dashOffset}
        strokeLinecap="round"
        strokeWidth={ICON_STROKE_WIDTH}
        style={{ transformOrigin: "center", transform: "rotate(-90deg)" }} />
    </svg>
  );
};

export const ContextTrigger = ({
  children,
  ...props
}) => {
  const { usedTokens, maxTokens } = useContextValue();
  const usedPercent = usedTokens / maxTokens;
  const renderedPercent = new Intl.NumberFormat("en-US", {
    style: "percent",
    maximumFractionDigits: 1,
  }).format(usedPercent);

  return (
    <HoverCardTrigger asChild>
      {children ?? (
        <Button type="button" variant="ghost" {...props}>
          <span className="font-medium text-muted-foreground">
            {renderedPercent}
          </span>
          <ContextIcon />
        </Button>
      )}
    </HoverCardTrigger>
  );
};

export const ContextContent = ({
  className,
  ...props
}) => (
  <HoverCardContent
    className={cn("min-w-[240px] divide-y overflow-hidden p-0", className)}
    {...props} />
);

export const ContextContentHeader = ({
  children,
  className,
  ...props
}) => {
  const { usedTokens, maxTokens } = useContextValue();
  const usedPercent = usedTokens / maxTokens;
  const displayPct = new Intl.NumberFormat("en-US", {
    style: "percent",
    maximumFractionDigits: 1,
  }).format(usedPercent);
  const used = new Intl.NumberFormat("en-US", {
    notation: "compact",
  }).format(usedTokens);
  const total = new Intl.NumberFormat("en-US", {
    notation: "compact",
  }).format(maxTokens);

  return (
    <div className={cn("w-full space-y-2 p-3", className)} {...props}>
      {children ?? (
        <>
          <div className="flex items-center justify-between gap-3 text-xs">
            <p>{displayPct}</p>
            <p className="font-mono text-muted-foreground">
              {used} / {total}
            </p>
          </div>
          <div className="space-y-2">
            <Progress className="bg-muted" value={usedPercent * PERCENT_MAX} />
          </div>
        </>
      )}
    </div>
  );
};

export const ContextContentBody = ({
  children,
  className,
  ...props
}) => (
  <div className={cn("w-full p-3", className)} {...props}>
    {children}
  </div>
);

export const ContextContentFooter = ({
  children,
  className,
  ...props
}) => {
  const { modelId, usage } = useContextValue();
  const costUSD = modelId
    ? estimateCost({
        modelId,
        usage: {
          input: usage?.inputTokens ?? 0,
          output: usage?.outputTokens ?? 0,
        },
      }).totalUSD
    : undefined;
  const totalCost = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(costUSD ?? 0);

  return (
    <div
      className={cn(
        "flex w-full items-center justify-between gap-3 bg-secondary p-3 text-xs",
        className
      )}
      {...props}>
      {children ?? (
        <>
          <span className="text-muted-foreground">Total cost</span>
          <span>{totalCost}</span>
        </>
      )}
    </div>
  );
};

export const ContextInputUsage = ({
  className,
  children,
  ...props
}) => {
  const { usage, modelId } = useContextValue();
  const inputTokens = usage?.inputTokens ?? 0;

  if (children) {
    return children;
  }

  if (!inputTokens) {
    return null;
  }

  const inputCost = modelId
    ? estimateCost({
        modelId,
        usage: { input: inputTokens, output: 0 },
      }).totalUSD
    : undefined;
  const inputCostText = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(inputCost ?? 0);

  return (
    <div
      className={cn("flex items-center justify-between text-xs", className)}
      {...props}>
      <span className="text-muted-foreground">Input</span>
      <TokensWithCost costText={inputCostText} tokens={inputTokens} />
    </div>
  );
};

export const ContextOutputUsage = ({
  className,
  children,
  ...props
}) => {
  const { usage, modelId } = useContextValue();
  const outputTokens = usage?.outputTokens ?? 0;

  if (children) {
    return children;
  }

  if (!outputTokens) {
    return null;
  }

  const outputCost = modelId
    ? estimateCost({
        modelId,
        usage: { input: 0, output: outputTokens },
      }).totalUSD
    : undefined;
  const outputCostText = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(outputCost ?? 0);

  return (
    <div
      className={cn("flex items-center justify-between text-xs", className)}
      {...props}>
      <span className="text-muted-foreground">Output</span>
      <TokensWithCost costText={outputCostText} tokens={outputTokens} />
    </div>
  );
};

export const ContextReasoningUsage = ({
  className,
  children,
  ...props
}) => {
  const { usage, modelId } = useContextValue();
  const reasoningTokens = usage?.reasoningTokens ?? 0;

  if (children) {
    return children;
  }

  if (!reasoningTokens) {
    return null;
  }

  const reasoningCost = modelId
    ? estimateCost({
        modelId,
        usage: { reasoningTokens },
      }).totalUSD
    : undefined;
  const reasoningCostText = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(reasoningCost ?? 0);

  return (
    <div
      className={cn("flex items-center justify-between text-xs", className)}
      {...props}>
      <span className="text-muted-foreground">Reasoning</span>
      <TokensWithCost costText={reasoningCostText} tokens={reasoningTokens} />
    </div>
  );
};

export const ContextCacheUsage = ({
  className,
  children,
  ...props
}) => {
  const { usage, modelId } = useContextValue();
  const cacheTokens = usage?.cachedInputTokens ?? 0;

  if (children) {
    return children;
  }

  if (!cacheTokens) {
    return null;
  }

  const cacheCost = modelId
    ? estimateCost({
        modelId,
        usage: { cacheReads: cacheTokens, input: 0, output: 0 },
      }).totalUSD
    : undefined;
  const cacheCostText = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(cacheCost ?? 0);

  return (
    <div
      className={cn("flex items-center justify-between text-xs", className)}
      {...props}>
      <span className="text-muted-foreground">Cache</span>
      <TokensWithCost costText={cacheCostText} tokens={cacheTokens} />
    </div>
  );
};

const TokensWithCost = ({
  tokens,
  costText
}) => (
  <span>
    {tokens === undefined
      ? "—"
      : new Intl.NumberFormat("en-US", {
          notation: "compact",
        }).format(tokens)}
    {costText ? (
      <span className="ml-2 text-muted-foreground">• {costText}</span>
    ) : null}
  </span>
);
````

## File: src/components/ai-elements/conversation.jsx
````javascript
"use client";;
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowDownIcon } from "lucide-react";
import { useCallback } from "react";
import { StickToBottom, useStickToBottomContext } from "use-stick-to-bottom";

export const Conversation = ({
  className,
  ...props
}) => (
  <StickToBottom
    className={cn("relative flex-1 overflow-y-auto", className)}
    initial="smooth"
    resize="smooth"
    role="log"
    {...props} />
);

export const ConversationContent = ({
  className,
  ...props
}) => (
  <StickToBottom.Content className={cn("p-4", className)} {...props} />
);

export const ConversationEmptyState = ({
  className,
  title = "No messages yet",
  description = "Start a conversation to see messages here",
  icon,
  children,
  ...props
}) => (
  <div
    className={cn(
      "flex size-full flex-col items-center justify-center gap-3 p-8 text-center",
      className
    )}
    {...props}>
    {children ?? (
      <>
        {icon && <div className="text-muted-foreground">{icon}</div>}
        <div className="space-y-1">
          <h3 className="font-medium text-sm">{title}</h3>
          {description && (
            <p className="text-muted-foreground text-sm">{description}</p>
          )}
        </div>
      </>
    )}
  </div>
);

export const ConversationScrollButton = ({
  className,
  ...props
}) => {
  const { isAtBottom, scrollToBottom } = useStickToBottomContext();

  const handleScrollToBottom = useCallback(() => {
    scrollToBottom();
  }, [scrollToBottom]);

  return (!isAtBottom && (<Button
    className={cn("absolute bottom-4 left-[50%] translate-x-[-50%] rounded-full", className)}
    onClick={handleScrollToBottom}
    size="icon"
    type="button"
    variant="outline"
    {...props}>
    <ArrowDownIcon className="size-4" />
  </Button>));
};
````

## File: src/components/ai-elements/image.jsx
````javascript
/** biome-ignore-all lint/performance/noImgElement: "ai-elements is framework agnostic" */
/** biome-ignore-all lint/nursery/useImageSize: "size will be handled by props" */

import { cn } from "@/lib/utils";

export const Image = ({
  base64,
  uint8Array,
  mediaType,
  ...props
}) => (
  <img
    {...props}
    alt={props.alt}
    className={cn("h-auto max-w-full overflow-hidden rounded-md", props.className)}
    src={`data:${mediaType};base64,${base64}`} />
);
````

## File: src/components/ai-elements/inline-citation.jsx
````javascript
"use client";;
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { cn } from "@/lib/utils";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { createContext, useCallback, useContext, useEffect, useState } from "react";

export const InlineCitation = ({
  className,
  ...props
}) => (
  <span className={cn("group inline items-center gap-1", className)} {...props} />
);

export const InlineCitationText = ({
  className,
  ...props
}) => (
  <span
    className={cn("transition-colors group-hover:bg-accent", className)}
    {...props} />
);

export const InlineCitationCard = (props) => (
  <HoverCard closeDelay={0} openDelay={0} {...props} />
);

export const InlineCitationCardTrigger = ({
  sources,
  className,
  ...props
}) => (
  <HoverCardTrigger asChild>
    <Badge
      className={cn("ml-1 rounded-full", className)}
      variant="secondary"
      {...props}>
      {sources.length ? (
        <>
          {new URL(sources[0]).hostname}{" "}
          {sources.length > 1 && `+${sources.length - 1}`}
        </>
      ) : (
        "unknown"
      )}
    </Badge>
  </HoverCardTrigger>
);

export const InlineCitationCardBody = ({
  className,
  ...props
}) => (
  <HoverCardContent className={cn("relative w-80 p-0", className)} {...props} />
);

const CarouselApiContext = createContext(undefined);

const useCarouselApi = () => {
  const context = useContext(CarouselApiContext);
  return context;
};

export const InlineCitationCarousel = ({
  className,
  children,
  ...props
}) => {
  const [api, setApi] = useState();

  return (
    <CarouselApiContext.Provider value={api}>
      <Carousel className={cn("w-full", className)} setApi={setApi} {...props}>
        {children}
      </Carousel>
    </CarouselApiContext.Provider>
  );
};

export const InlineCitationCarouselContent = (
  props
) => <CarouselContent {...props} />;

export const InlineCitationCarouselItem = ({
  className,
  ...props
}) => (
  <CarouselItem className={cn("w-full space-y-2 p-4 pl-8", className)} {...props} />
);

export const InlineCitationCarouselHeader = ({
  className,
  ...props
}) => (
  <div
    className={cn(
      "flex items-center justify-between gap-2 rounded-t-md bg-secondary p-2",
      className
    )}
    {...props} />
);

export const InlineCitationCarouselIndex = ({
  children,
  className,
  ...props
}) => {
  const api = useCarouselApi();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div
      className={cn(
        "flex flex-1 items-center justify-end px-3 py-1 text-muted-foreground text-xs",
        className
      )}
      {...props}>
      {children ?? `${current}/${count}`}
    </div>
  );
};

export const InlineCitationCarouselPrev = ({
  className,
  ...props
}) => {
  const api = useCarouselApi();

  const handleClick = useCallback(() => {
    if (api) {
      api.scrollPrev();
    }
  }, [api]);

  return (
    <button
      aria-label="Previous"
      className={cn("shrink-0", className)}
      onClick={handleClick}
      type="button"
      {...props}>
      <ArrowLeftIcon className="size-4 text-muted-foreground" />
    </button>
  );
};

export const InlineCitationCarouselNext = ({
  className,
  ...props
}) => {
  const api = useCarouselApi();

  const handleClick = useCallback(() => {
    if (api) {
      api.scrollNext();
    }
  }, [api]);

  return (
    <button
      aria-label="Next"
      className={cn("shrink-0", className)}
      onClick={handleClick}
      type="button"
      {...props}>
      <ArrowRightIcon className="size-4 text-muted-foreground" />
    </button>
  );
};

export const InlineCitationSource = ({
  title,
  url,
  description,
  className,
  children,
  ...props
}) => (
  <div className={cn("space-y-1", className)} {...props}>
    {title && (
      <h4 className="truncate font-medium text-sm leading-tight">{title}</h4>
    )}
    {url && (
      <p className="truncate break-all text-muted-foreground text-xs">{url}</p>
    )}
    {description && (
      <p className="line-clamp-3 text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    )}
    {children}
  </div>
);

export const InlineCitationQuote = ({
  children,
  className,
  ...props
}) => (
  <blockquote
    className={cn(
      "border-muted border-l-2 pl-3 text-muted-foreground text-sm italic",
      className
    )}
    {...props}>
    {children}
  </blockquote>
);
````

## File: src/components/ai-elements/loader.jsx
````javascript
import { cn } from "@/lib/utils";

const LoaderIcon = ({
  size = 16
}) => (
  <svg
    height={size}
    strokeLinejoin="round"
    style={{ color: "currentcolor" }}
    viewBox="0 0 16 16"
    width={size}>
    <title>Loader</title>
    <g clipPath="url(#clip0_2393_1490)">
      <path d="M8 0V4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 16V12" opacity="0.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M3.29773 1.52783L5.64887 4.7639"
        opacity="0.9"
        stroke="currentColor"
        strokeWidth="1.5" />
      <path
        d="M12.7023 1.52783L10.3511 4.7639"
        opacity="0.1"
        stroke="currentColor"
        strokeWidth="1.5" />
      <path
        d="M12.7023 14.472L10.3511 11.236"
        opacity="0.4"
        stroke="currentColor"
        strokeWidth="1.5" />
      <path
        d="M3.29773 14.472L5.64887 11.236"
        opacity="0.6"
        stroke="currentColor"
        strokeWidth="1.5" />
      <path
        d="M15.6085 5.52783L11.8043 6.7639"
        opacity="0.2"
        stroke="currentColor"
        strokeWidth="1.5" />
      <path
        d="M0.391602 10.472L4.19583 9.23598"
        opacity="0.7"
        stroke="currentColor"
        strokeWidth="1.5" />
      <path
        d="M15.6085 10.4722L11.8043 9.2361"
        opacity="0.3"
        stroke="currentColor"
        strokeWidth="1.5" />
      <path
        d="M0.391602 5.52783L4.19583 6.7639"
        opacity="0.8"
        stroke="currentColor"
        strokeWidth="1.5" />
    </g>
    <defs>
      <clipPath id="clip0_2393_1490">
        <rect fill="white" height="16" width="16" />
      </clipPath>
    </defs>
  </svg>
);

export const Loader = ({
  className,
  size = 16,
  ...props
}) => (
  <div
    className={cn("inline-flex animate-spin items-center justify-center", className)}
    {...props}>
    <LoaderIcon size={size} />
  </div>
);
````

## File: src/components/ai-elements/message.jsx
````javascript
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

export const Message = ({
  className,
  from,
  ...props
}) => (
  <div
    className={cn(
      "group flex w-full items-end justify-end gap-2 py-4",
      from === "user" ? "is-user" : "is-assistant flex-row-reverse justify-end",
      className
    )}
    {...props} />
);

const messageContentVariants = cva("is-user:dark flex flex-col gap-2 overflow-hidden rounded-lg text-sm", {
  variants: {
    variant: {
      contained: [
        "max-w-[80%] px-4 py-3",
        "group-[.is-user]:bg-primary group-[.is-user]:text-primary-foreground",
        "group-[.is-assistant]:bg-secondary group-[.is-assistant]:text-foreground",
      ],
      flat: [
        "group-[.is-user]:max-w-[80%] group-[.is-user]:bg-secondary group-[.is-user]:px-4 group-[.is-user]:py-3 group-[.is-user]:text-foreground",
        "group-[.is-assistant]:text-foreground",
      ],
    },
  },
  defaultVariants: {
    variant: "contained",
  },
});

export const MessageContent = ({
  children,
  className,
  variant,
  ...props
}) => (
  <div className={cn(messageContentVariants({ variant, className }))} {...props}>
    {children}
  </div>
);

export const MessageAvatar = ({
  src,
  name,
  className,
  ...props
}) => (
  <Avatar className={cn("size-8 ring-1 ring-border", className)} {...props}>
    <AvatarImage alt="" className="mt-0 mb-0" src={src} />
    <AvatarFallback>{name?.slice(0, 2) || "ME"}</AvatarFallback>
  </Avatar>
);
````

## File: src/components/ai-elements/open-in-chat.jsx
````javascript
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import {
  ChevronDownIcon,
  ExternalLinkIcon,
  MessageCircleIcon,
} from "lucide-react";
import { createContext, useContext } from "react";

const providers = {
  github: {
    title: "Open in GitHub",
    createUrl: (url) => url,
    icon: (
      <svg fill="currentColor" role="img" viewBox="0 0 24 24">
        <title>GitHub</title>
        <path
          d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  scira: {
    title: "Open in Scira",
    createUrl: (q) =>
      `https://scira.ai/?${new URLSearchParams({
        q,
      })}`,
    icon: (
      <svg
        fill="none"
        height="934"
        viewBox="0 0 910 934"
        width="910"
        xmlns="http://www.w3.org/2000/svg">
        <title>Scira AI</title>
        <path
          d="M647.664 197.775C569.13 189.049 525.5 145.419 516.774 66.8849C508.048 145.419 464.418 189.049 385.884 197.775C464.418 206.501 508.048 250.131 516.774 328.665C525.5 250.131 569.13 206.501 647.664 197.775Z"
          fill="currentColor"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="8" />
        <path
          d="M516.774 304.217C510.299 275.491 498.208 252.087 480.335 234.214C462.462 216.341 439.058 204.251 410.333 197.775C439.059 191.3 462.462 179.209 480.335 161.336C498.208 143.463 510.299 120.06 516.774 91.334C523.25 120.059 535.34 143.463 553.213 161.336C571.086 179.209 594.49 191.3 623.216 197.775C594.49 204.251 571.086 216.341 553.213 234.214C535.34 252.087 523.25 275.491 516.774 304.217Z"
          fill="currentColor"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="8" />
        <path
          d="M857.5 508.116C763.259 497.644 710.903 445.288 700.432 351.047C689.961 445.288 637.605 497.644 543.364 508.116C637.605 518.587 689.961 570.943 700.432 665.184C710.903 570.943 763.259 518.587 857.5 508.116Z"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="20" />
        <path
          d="M700.432 615.957C691.848 589.05 678.575 566.357 660.383 548.165C642.191 529.973 619.499 516.7 592.593 508.116C619.499 499.533 642.191 486.258 660.383 468.066C678.575 449.874 691.848 427.181 700.432 400.274C709.015 427.181 722.289 449.874 740.481 468.066C758.673 486.258 781.365 499.533 808.271 508.116C781.365 516.7 758.673 529.973 740.481 548.165C722.289 566.357 709.015 589.05 700.432 615.957Z"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="20" />
        <path
          d="M889.949 121.237C831.049 114.692 798.326 81.9698 791.782 23.0692C785.237 81.9698 752.515 114.692 693.614 121.237C752.515 127.781 785.237 160.504 791.782 219.404C798.326 160.504 831.049 127.781 889.949 121.237Z"
          fill="currentColor"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="8" />
        <path
          d="M791.782 196.795C786.697 176.937 777.869 160.567 765.16 147.858C752.452 135.15 736.082 126.322 716.226 121.237C736.082 116.152 752.452 107.324 765.16 94.6152C777.869 81.9065 786.697 65.5368 791.782 45.6797C796.867 65.5367 805.695 81.9066 818.403 94.6152C831.112 107.324 847.481 116.152 867.338 121.237C847.481 126.322 831.112 135.15 818.403 147.858C805.694 160.567 796.867 176.937 791.782 196.795Z"
          fill="currentColor"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="8" />
        <path
          d="M760.632 764.337C720.719 814.616 669.835 855.1 611.872 882.692C553.91 910.285 490.404 924.255 426.213 923.533C362.022 922.812 298.846 907.419 241.518 878.531C184.19 849.643 134.228 808.026 95.4548 756.863C56.6815 705.7 30.1238 646.346 17.8129 583.343C5.50207 520.339 7.76433 455.354 24.4266 393.359C41.089 331.364 71.7099 274.001 113.947 225.658C156.184 177.315 208.919 139.273 268.117 114.442"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="30" />
      </svg>
    ),
  },
  chatgpt: {
    title: "Open in ChatGPT",
    createUrl: (prompt) =>
      `https://chatgpt.com/?${new URLSearchParams({
        hints: "search",
        prompt,
      })}`,
    icon: (
      <svg
        fill="currentColor"
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <title>OpenAI</title>
        <path
          d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
      </svg>
    ),
  },
  claude: {
    title: "Open in Claude",
    createUrl: (q) =>
      `https://claude.ai/new?${new URLSearchParams({
        q,
      })}`,
    icon: (
      <svg
        fill="currentColor"
        role="img"
        viewBox="0 0 12 12"
        xmlns="http://www.w3.org/2000/svg">
        <title>Claude</title>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.3545 7.9775L4.7145 6.654L4.7545 6.539L4.7145 6.475H4.6L4.205 6.451L2.856 6.4145L1.6865 6.366L0.5535 6.305L0.268 6.2445L0 5.892L0.0275 5.716L0.2675 5.5555L0.6105 5.5855L1.3705 5.637L2.5095 5.716L3.3355 5.7645L4.56 5.892H4.7545L4.782 5.8135L4.715 5.7645L4.6635 5.716L3.4845 4.918L2.2085 4.074L1.5405 3.588L1.1785 3.3425L0.9965 3.1115L0.9175 2.6075L1.2455 2.2465L1.686 2.2765L1.7985 2.307L2.245 2.65L3.199 3.388L4.4445 4.3045L4.627 4.4565L4.6995 4.405L4.709 4.3685L4.627 4.2315L3.9495 3.0085L3.2265 1.7635L2.9045 1.2475L2.8195 0.938C2.78711 0.819128 2.76965 0.696687 2.7675 0.5735L3.1415 0.067L3.348 0L3.846 0.067L4.056 0.249L4.366 0.956L4.867 2.0705L5.6445 3.5855L5.8725 4.0345L5.994 4.4505L6.0395 4.578H6.1185V4.505L6.1825 3.652L6.301 2.6045L6.416 1.257L6.456 0.877L6.644 0.422L7.0175 0.176L7.3095 0.316L7.5495 0.6585L7.516 0.8805L7.373 1.806L7.0935 3.2575L6.9115 4.2285H7.0175L7.139 4.1075L7.6315 3.4545L8.4575 2.4225L8.8225 2.0125L9.2475 1.5605L9.521 1.345H10.0375L10.4175 1.9095L10.2475 2.4925L9.7155 3.166L9.275 3.737L8.643 4.587L8.248 5.267L8.2845 5.322L8.3785 5.312L9.8065 5.009L10.578 4.869L11.4985 4.7115L11.915 4.9055L11.9605 5.103L11.7965 5.5065L10.812 5.7495L9.6575 5.9805L7.938 6.387L7.917 6.402L7.9415 6.4325L8.716 6.5055L9.047 6.5235H9.858L11.368 6.636L11.763 6.897L12 7.216L11.9605 7.4585L11.353 7.7685L10.533 7.574L8.6185 7.119L7.9625 6.9545H7.8715V7.0095L8.418 7.5435L9.421 8.4485L10.6755 9.6135L10.739 9.9025L10.578 10.13L10.408 10.1055L9.3055 9.277L8.88 8.9035L7.917 8.0935H7.853V8.1785L8.075 8.503L9.2475 10.2635L9.3085 10.8035L9.2235 10.98L8.9195 11.0865L8.5855 11.0255L7.8985 10.063L7.191 8.9795L6.6195 8.008L6.5495 8.048L6.2125 11.675L6.0545 11.86L5.69 12L5.3865 11.7695L5.2255 11.396L5.3865 10.658L5.581 9.696L5.7385 8.931L5.8815 7.981L5.9665 7.665L5.9605 7.644L5.8905 7.653L5.1735 8.6365L4.0835 10.109L3.2205 11.0315L3.0135 11.1135L2.655 10.9285L2.6885 10.5975L2.889 10.303L4.083 8.785L4.803 7.844L5.268 7.301L5.265 7.222H5.2375L2.066 9.28L1.501 9.353L1.2575 9.125L1.288 8.752L1.4035 8.6305L2.3575 7.9745L2.3545 7.9775Z" />
      </svg>
    ),
  },
  t3: {
    title: "Open in T3 Chat",
    createUrl: (q) =>
      `https://t3.chat/new?${new URLSearchParams({
        q,
      })}`,
    icon: <MessageCircleIcon />,
  },
  v0: {
    title: "Open in v0",
    createUrl: (q) =>
      `https://v0.app?${new URLSearchParams({
        q,
      })}`,
    icon: (
      <svg
        fill="currentColor"
        viewBox="0 0 147 70"
        xmlns="http://www.w3.org/2000/svg">
        <title>v0</title>
        <path
          d="M56 50.2031V14H70V60.1562C70 65.5928 65.5928 70 60.1562 70C57.5605 70 54.9982 68.9992 53.1562 67.1573L0 14H19.7969L56 50.2031Z" />
        <path
          d="M147 56H133V23.9531L100.953 56H133V70H96.6875C85.8144 70 77 61.1856 77 50.3125V14H91V46.1562L123.156 14H91V0H127.312C138.186 0 147 8.81439 147 19.6875V56Z" />
      </svg>
    ),
  },
};

const OpenInContext = createContext(undefined);

const useOpenInContext = () => {
  const context = useContext(OpenInContext);
  if (!context) {
    throw new Error("OpenIn components must be used within an OpenIn provider");
  }
  return context;
};

export const OpenIn = ({
  query,
  ...props
}) => (
  <OpenInContext.Provider value={{ query }}>
    <DropdownMenu {...props} />
  </OpenInContext.Provider>
);

export const OpenInContent = ({
  className,
  ...props
}) => (
  <DropdownMenuContent align="start" className={cn("w-[240px]", className)} {...props} />
);

export const OpenInItem = (props) => (
  <DropdownMenuItem {...props} />
);

export const OpenInLabel = (props) => (
  <DropdownMenuLabel {...props} />
);

export const OpenInSeparator = (props) => (
  <DropdownMenuSeparator {...props} />
);

export const OpenInTrigger = ({
  children,
  ...props
}) => (
  <DropdownMenuTrigger {...props} asChild>
    {children ?? (
      <Button type="button" variant="outline">
        Open in chat
        <ChevronDownIcon className="ml-2 size-4" />
      </Button>
    )}
  </DropdownMenuTrigger>
);

export const OpenInChatGPT = (props) => {
  const { query } = useOpenInContext();
  return (
    <DropdownMenuItem asChild {...props}>
      <a
        className="flex items-center gap-2"
        href={providers.chatgpt.createUrl(query)}
        rel="noopener"
        target="_blank">
        <span className="shrink-0">{providers.chatgpt.icon}</span>
        <span className="flex-1">{providers.chatgpt.title}</span>
        <ExternalLinkIcon className="size-4 shrink-0" />
      </a>
    </DropdownMenuItem>
  );
};

export const OpenInClaude = (props) => {
  const { query } = useOpenInContext();
  return (
    <DropdownMenuItem asChild {...props}>
      <a
        className="flex items-center gap-2"
        href={providers.claude.createUrl(query)}
        rel="noopener"
        target="_blank">
        <span className="shrink-0">{providers.claude.icon}</span>
        <span className="flex-1">{providers.claude.title}</span>
        <ExternalLinkIcon className="size-4 shrink-0" />
      </a>
    </DropdownMenuItem>
  );
};

export const OpenInT3 = (props) => {
  const { query } = useOpenInContext();
  return (
    <DropdownMenuItem asChild {...props}>
      <a
        className="flex items-center gap-2"
        href={providers.t3.createUrl(query)}
        rel="noopener"
        target="_blank">
        <span className="shrink-0">{providers.t3.icon}</span>
        <span className="flex-1">{providers.t3.title}</span>
        <ExternalLinkIcon className="size-4 shrink-0" />
      </a>
    </DropdownMenuItem>
  );
};

export const OpenInScira = (props) => {
  const { query } = useOpenInContext();
  return (
    <DropdownMenuItem asChild {...props}>
      <a
        className="flex items-center gap-2"
        href={providers.scira.createUrl(query)}
        rel="noopener"
        target="_blank">
        <span className="shrink-0">{providers.scira.icon}</span>
        <span className="flex-1">{providers.scira.title}</span>
        <ExternalLinkIcon className="size-4 shrink-0" />
      </a>
    </DropdownMenuItem>
  );
};

export const OpenInv0 = (props) => {
  const { query } = useOpenInContext();
  return (
    <DropdownMenuItem asChild {...props}>
      <a
        className="flex items-center gap-2"
        href={providers.v0.createUrl(query)}
        rel="noopener"
        target="_blank">
        <span className="shrink-0">{providers.v0.icon}</span>
        <span className="flex-1">{providers.v0.title}</span>
        <ExternalLinkIcon className="size-4 shrink-0" />
      </a>
    </DropdownMenuItem>
  );
};
````

## File: src/components/ai-elements/prompt-input.jsx
````javascript
/** biome-ignore-all lint/performance/noImgElement: "AI Elements is framework agnostic" */

"use client";;
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import {
  ImageIcon,
  Loader2Icon,
  PaperclipIcon,
  PlusIcon,
  SendIcon,
  SquareIcon,
  XIcon,
} from "lucide-react";
import { nanoid } from "nanoid";
import {
  Children,
  createContext,
  Fragment,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

const AttachmentsContext = createContext(null);

export const usePromptInputAttachments = () => {
  const context = useContext(AttachmentsContext);

  if (!context) {
    throw new Error("usePromptInputAttachments must be used within a PromptInput");
  }

  return context;
};

export function PromptInputAttachment({
  data,
  className,
  ...props
}) {
  const attachments = usePromptInputAttachments();

  return (
    <div
      className={cn("group relative h-14 w-14 rounded-md border", className)}
      key={data.id}
      {...props}>
      {data.mediaType?.startsWith("image/") && data.url ? (
        <img
          alt={data.filename || "attachment"}
          className="size-full rounded-md object-cover"
          height={56}
          src={data.url}
          width={56} />
      ) : (
        <div
          className="flex size-full items-center justify-center text-muted-foreground">
          <PaperclipIcon className="size-4" />
        </div>
      )}
      <Button
        aria-label="Remove attachment"
        className="-right-1.5 -top-1.5 absolute h-6 w-6 rounded-full opacity-0 group-hover:opacity-100"
        onClick={() => attachments.remove(data.id)}
        size="icon"
        type="button"
        variant="outline">
        <XIcon className="h-3 w-3" />
      </Button>
    </div>
  );
}

export function PromptInputAttachments({
  className,
  children,
  ...props
}) {
  const attachments = usePromptInputAttachments();
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    const el = contentRef.current;
    if (!el) {
      return;
    }
    const ro = new ResizeObserver(() => {
      setHeight(el.getBoundingClientRect().height);
    });
    ro.observe(el);
    setHeight(el.getBoundingClientRect().height);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      aria-live="polite"
      className={cn("overflow-hidden transition-[height] duration-200 ease-out", className)}
      style={{ height: attachments.files.length ? height : 0 }}
      {...props}>
      <div className="flex flex-wrap gap-2 p-3 pt-3" ref={contentRef}>
        {attachments.files.map((file) => (
          <Fragment key={file.id}>{children(file)}</Fragment>
        ))}
      </div>
    </div>
  );
}

export const PromptInputActionAddAttachments = ({
  label = "Add photos or files",
  ...props
}) => {
  const attachments = usePromptInputAttachments();

  return (
    <DropdownMenuItem
      {...props}
      onSelect={(e) => {
        e.preventDefault();
        attachments.openFileDialog();
      }}>
      <ImageIcon className="mr-2 size-4" /> {label}
    </DropdownMenuItem>
  );
};

export const PromptInput = ({
  className,
  accept,
  multiple,
  globalDrop,
  syncHiddenInput,
  maxFiles,
  maxFileSize,
  onError,
  onSubmit,
  children,
  ...props
}) => {
  const [items, setItems] = useState([]);
  const inputRef = useRef(null);
  const anchorRef = useRef(null);
  const formRef = useRef(null);

  // Find nearest form to scope drag & drop
  useEffect(() => {
    const root = anchorRef.current?.closest("form");
    if (root instanceof HTMLFormElement) {
      formRef.current = root;
    }
  }, []);

  const openFileDialog = useCallback(() => {
    inputRef.current?.click();
  }, []);

  const matchesAccept = useCallback((f) => {
    if (!accept || accept.trim() === "") {
      return true;
    }
    // Simple check: if accept includes "image/*", filter to images; otherwise allow.
    if (accept.includes("image/*")) {
      return f.type.startsWith("image/");
    }
    return true;
  }, [accept]);

  const add = useCallback((files) => {
    const incoming = Array.from(files);
    const accepted = incoming.filter((f) => matchesAccept(f));
    if (accepted.length === 0) {
      onError?.({
        code: "accept",
        message: "No files match the accepted types.",
      });
      return;
    }
    const withinSize = (f) =>
      maxFileSize ? f.size <= maxFileSize : true;
    const sized = accepted.filter(withinSize);
    if (sized.length === 0 && accepted.length > 0) {
      onError?.({
        code: "max_file_size",
        message: "All files exceed the maximum size.",
      });
      return;
    }
    setItems((prev) => {
      const capacity =
        typeof maxFiles === "number"
          ? Math.max(0, maxFiles - prev.length)
          : undefined;
      const capped =
        typeof capacity === "number" ? sized.slice(0, capacity) : sized;
      if (typeof capacity === "number" && sized.length > capacity) {
        onError?.({
          code: "max_files",
          message: "Too many files. Some were not added.",
        });
      }
      const next = [];
      for (const file of capped) {
        next.push({
          id: nanoid(),
          type: "file",
          url: URL.createObjectURL(file),
          mediaType: file.type,
          filename: file.name,
        });
      }
      return prev.concat(next);
    });
  }, [matchesAccept, maxFiles, maxFileSize, onError]);

  const remove = useCallback((id) => {
    setItems((prev) => {
      const found = prev.find((file) => file.id === id);
      if (found?.url) {
        URL.revokeObjectURL(found.url);
      }
      return prev.filter((file) => file.id !== id);
    });
  }, []);

  const clear = useCallback(() => {
    setItems((prev) => {
      for (const file of prev) {
        if (file.url) {
          URL.revokeObjectURL(file.url);
        }
      }
      return [];
    });
  }, []);

  // Note: File input cannot be programmatically set for security reasons
  // The syncHiddenInput prop is no longer functional
  useEffect(() => {
    if (syncHiddenInput && inputRef.current) {
      // Clear the input when items are cleared
      if (items.length === 0) {
        inputRef.current.value = "";
      }
    }
  }, [items, syncHiddenInput]);

  // Attach drop handlers on nearest form and document (opt-in)
  useEffect(() => {
    const form = formRef.current;
    if (!form) {
      return;
    }
    const onDragOver = (e) => {
      if (e.dataTransfer?.types?.includes("Files")) {
        e.preventDefault();
      }
    };
    const onDrop = (e) => {
      if (e.dataTransfer?.types?.includes("Files")) {
        e.preventDefault();
      }
      if (e.dataTransfer?.files && e.dataTransfer.files.length > 0) {
        add(e.dataTransfer.files);
      }
    };
    form.addEventListener("dragover", onDragOver);
    form.addEventListener("drop", onDrop);
    return () => {
      form.removeEventListener("dragover", onDragOver);
      form.removeEventListener("drop", onDrop);
    };
  }, [add]);

  useEffect(() => {
    if (!globalDrop) {
      return;
    }
    const onDragOver = (e) => {
      if (e.dataTransfer?.types?.includes("Files")) {
        e.preventDefault();
      }
    };
    const onDrop = (e) => {
      if (e.dataTransfer?.types?.includes("Files")) {
        e.preventDefault();
      }
      if (e.dataTransfer?.files && e.dataTransfer.files.length > 0) {
        add(e.dataTransfer.files);
      }
    };
    document.addEventListener("dragover", onDragOver);
    document.addEventListener("drop", onDrop);
    return () => {
      document.removeEventListener("dragover", onDragOver);
      document.removeEventListener("drop", onDrop);
    };
  }, [add, globalDrop]);

  const handleChange = (event) => {
    if (event.currentTarget.files) {
      add(event.currentTarget.files);
    }
  };

  const convertBlobUrlToDataUrl = async url => {
    const response = await fetch(url);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const text = (formData.get("message")) || "";

    // Convert blob URLs to data URLs asynchronously
    Promise.all(items.map(async ({ id, ...item }) => {
      if (item.url && item.url.startsWith("blob:")) {
        return {
          ...item,
          url: await convertBlobUrlToDataUrl(item.url),
        };
      }
      return item;
    })).then((files) => {
      onSubmit({ text, files }, event);
      clear();
    });
  };

  const ctx = useMemo(() => ({
    files: items.map((item) => ({ ...item, id: item.id })),
    add,
    remove,
    clear,
    openFileDialog,
    fileInputRef: inputRef,
  }), [items, add, remove, clear, openFileDialog]);

  return (
    <AttachmentsContext.Provider value={ctx}>
      <span aria-hidden="true" className="hidden" ref={anchorRef} />
      <input
        accept={accept}
        className="hidden"
        multiple={multiple}
        onChange={handleChange}
        ref={inputRef}
        type="file" />
      <form
        className={cn(
          "w-full divide-y overflow-hidden rounded-xl border bg-background shadow-sm",
          className
        )}
        onSubmit={handleSubmit}
        {...props}>
        {children}
      </form>
    </AttachmentsContext.Provider>
  );
};

export const PromptInputBody = ({
  className,
  ...props
}) => (
  <div className={cn(className, "flex flex-col")} {...props} />
);

export const PromptInputTextarea = ({
  onChange,
  className,
  placeholder = "What would you like to know?",
  ...props
}) => {
  const attachments = usePromptInputAttachments();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      // Don't submit if IME composition is in progress
      if (e.nativeEvent.isComposing) {
        return;
      }

      if (e.shiftKey) {
        // Allow newline
        return;
      }

      // Submit on Enter (without Shift)
      e.preventDefault();
      const form = e.currentTarget.form;
      if (form) {
        form.requestSubmit();
      }
    }
  };

  const handlePaste = (event) => {
    const items = event.clipboardData?.items;

    if (!items) {
      return;
    }

    const files = [];

    for (const item of items) {
      if (item.kind === "file") {
        const file = item.getAsFile();
        if (file) {
          files.push(file);
        }
      }
    }

    if (files.length > 0) {
      event.preventDefault();
      attachments.add(files);
    }
  };

  return (
    <Textarea
      className={cn(
        "w-full resize-none rounded-none border-none p-3 shadow-none outline-none ring-0",
        "field-sizing-content bg-transparent dark:bg-transparent",
        "max-h-48 min-h-16",
        "focus-visible:ring-0",
        className
      )}
      name="message"
      onChange={(e) => {
        onChange?.(e);
      }}
      onKeyDown={handleKeyDown}
      onPaste={handlePaste}
      placeholder={placeholder}
      {...props} />
  );
};

export const PromptInputToolbar = ({
  className,
  ...props
}) => (
  <div
    className={cn("flex items-center justify-between p-1", className)}
    {...props} />
);

export const PromptInputTools = ({
  className,
  ...props
}) => (
  <div
    className={cn(
      "flex items-center gap-1",
      "[&_button:first-child]:rounded-bl-xl",
      className
    )}
    {...props} />
);

export const PromptInputButton = ({
  variant = "ghost",
  className,
  size,
  ...props
}) => {
  const newSize =
    (size ?? Children.count(props.children) > 1) ? "default" : "icon";

  return (
    <Button
      className={cn(
        "shrink-0 gap-1.5 rounded-lg",
        variant === "ghost" && "text-muted-foreground",
        newSize === "default" && "px-3",
        className
      )}
      size={newSize}
      type="button"
      variant={variant}
      {...props} />
  );
};

export const PromptInputActionMenu = (props) => (
  <DropdownMenu {...props} />
);

export const PromptInputActionMenuTrigger = ({
  className,
  children,
  ...props
}) => (
  <DropdownMenuTrigger asChild>
    <PromptInputButton className={className} {...props}>
      {children ?? <PlusIcon className="size-4" />}
    </PromptInputButton>
  </DropdownMenuTrigger>
);

export const PromptInputActionMenuContent = ({
  className,
  ...props
}) => (
  <DropdownMenuContent align="start" className={cn(className)} {...props} />
);

export const PromptInputActionMenuItem = ({
  className,
  ...props
}) => (
  <DropdownMenuItem className={cn(className)} {...props} />
);

export const PromptInputSubmit = ({
  className,
  variant = "default",
  size = "icon",
  status,
  children,
  ...props
}) => {
  let Icon = <SendIcon className="size-4" />;

  if (status === "submitted") {
    Icon = <Loader2Icon className="size-4 animate-spin" />;
  } else if (status === "streaming") {
    Icon = <SquareIcon className="size-4" />;
  } else if (status === "error") {
    Icon = <XIcon className="size-4" />;
  }

  return (
    <Button
      aria-label="Submit"
      className={cn("gap-1.5 rounded-lg", className)}
      size={size}
      type="submit"
      variant={variant}
      {...props}>
      {children ?? Icon}
    </Button>
  );
};

export const PromptInputModelSelect = (props) => (
  <Select {...props} />
);

export const PromptInputModelSelectTrigger = ({
  className,
  ...props
}) => (
  <SelectTrigger
    className={cn(
      "border-none bg-transparent font-medium text-muted-foreground shadow-none transition-colors",
      'hover:bg-accent hover:text-foreground [&[aria-expanded="true"]]:bg-accent [&[aria-expanded="true"]]:text-foreground',
      className
    )}
    {...props} />
);

export const PromptInputModelSelectContent = ({
  className,
  ...props
}) => (
  <SelectContent className={cn(className)} {...props} />
);

export const PromptInputModelSelectItem = ({
  className,
  ...props
}) => (
  <SelectItem className={cn(className)} {...props} />
);

export const PromptInputModelSelectValue = ({
  className,
  ...props
}) => (
  <SelectValue className={cn(className)} {...props} />
);
````

## File: src/components/ai-elements/reasoning.jsx
````javascript
"use client";;
import { useControllableState } from "@radix-ui/react-use-controllable-state";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { BrainIcon, ChevronDownIcon } from "lucide-react";
import { createContext, memo, useContext, useEffect, useState } from "react";
import { Response } from "./response";

const ReasoningContext = createContext(null);

const useReasoning = () => {
  const context = useContext(ReasoningContext);
  if (!context) {
    throw new Error("Reasoning components must be used within Reasoning");
  }
  return context;
};

const AUTO_CLOSE_DELAY = 1000;
const MS_IN_S = 1000;

export const Reasoning = memo(({
  className,
  isStreaming = false,
  open,
  defaultOpen = true,
  onOpenChange,
  duration: durationProp,
  children,
  ...props
}) => {
  const [isOpen, setIsOpen] = useControllableState({
    prop: open,
    defaultProp: defaultOpen,
    onChange: onOpenChange,
  });
  const [duration, setDuration] = useControllableState({
    prop: durationProp,
    defaultProp: 0,
  });

  const [hasAutoClosed, setHasAutoClosed] = useState(false);
  const [startTime, setStartTime] = useState(null);

  // Track duration when streaming starts and ends
  useEffect(() => {
    if (isStreaming) {
      if (startTime === null) {
        setStartTime(Date.now());
      }
    } else if (startTime !== null) {
      setDuration(Math.ceil((Date.now() - startTime) / MS_IN_S));
      setStartTime(null);
    }
  }, [isStreaming, startTime, setDuration]);

  // Auto-open when streaming starts, auto-close when streaming ends (once only)
  useEffect(() => {
    if (defaultOpen && !isStreaming && isOpen && !hasAutoClosed) {
      // Add a small delay before closing to allow user to see the content
      const timer = setTimeout(() => {
        setIsOpen(false);
        setHasAutoClosed(true);
      }, AUTO_CLOSE_DELAY);

      return () => clearTimeout(timer);
    }
  }, [isStreaming, isOpen, defaultOpen, setIsOpen, hasAutoClosed]);

  const handleOpenChange = (newOpen) => {
    setIsOpen(newOpen);
  };

  return (
    <ReasoningContext.Provider value={{ isStreaming, isOpen, setIsOpen, duration }}>
      <Collapsible
        className={cn("not-prose mb-4", className)}
        onOpenChange={handleOpenChange}
        open={isOpen}
        {...props}>
        {children}
      </Collapsible>
    </ReasoningContext.Provider>
  );
});

const getThinkingMessage = (isStreaming, duration) => {
  if (isStreaming || duration === 0) {
    return <p>Thinking...</p>;
  }
  if (duration === undefined) {
    return <p>Thought for a few seconds</p>;
  }
  return <p>Thought for {duration} seconds</p>;
};

export const ReasoningTrigger = memo(({
  className,
  children,
  ...props
}) => {
  const { isStreaming, isOpen, duration } = useReasoning();

  return (
    <CollapsibleTrigger
      className={cn(
        "flex w-full items-center gap-2 text-muted-foreground text-sm transition-colors hover:text-foreground",
        className
      )}
      {...props}>
      {children ?? (
        <>
          <BrainIcon className="size-4" />
          {getThinkingMessage(isStreaming, duration)}
          <ChevronDownIcon
            className={cn("size-4 transition-transform", isOpen ? "rotate-180" : "rotate-0")} />
        </>
      )}
    </CollapsibleTrigger>
  );
});

export const ReasoningContent = memo(({
  className,
  children,
  ...props
}) => (
  <CollapsibleContent
    className={cn(
      "mt-4 text-sm",
      "data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-top-2 data-[state=open]:slide-in-from-top-2 text-muted-foreground outline-none data-[state=closed]:animate-out data-[state=open]:animate-in",
      className
    )}
    {...props}>
    <Response className="grid gap-2">{children}</Response>
  </CollapsibleContent>
));

Reasoning.displayName = "Reasoning";
ReasoningTrigger.displayName = "ReasoningTrigger";
ReasoningContent.displayName = "ReasoningContent";
````

## File: src/components/ai-elements/response.jsx
````javascript
"use client";;
import { cn } from "@/lib/utils";
import { memo } from "react";
import { Streamdown } from "streamdown";

export const Response = memo(({
  className,
  ...props
}) => (
  <Streamdown
    className={cn("size-full [&>*:first-child]:mt-0 [&>*:last-child]:mb-0", className)}
    {...props} />
), (prevProps, nextProps) => prevProps.children === nextProps.children);

Response.displayName = "Response";
````

## File: src/components/ai-elements/sources.jsx
````javascript
"use client";;
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { BookIcon, ChevronDownIcon } from "lucide-react";

export const Sources = ({
  className,
  ...props
}) => (
  <Collapsible
    className={cn("not-prose mb-4 text-primary text-xs", className)}
    {...props} />
);

export const SourcesTrigger = ({
  className,
  count,
  children,
  ...props
}) => (
  <CollapsibleTrigger className={cn("flex items-center gap-2", className)} {...props}>
    {children ?? (
      <>
        <p className="font-medium">Used {count} sources</p>
        <ChevronDownIcon className="h-4 w-4" />
      </>
    )}
  </CollapsibleTrigger>
);

export const SourcesContent = ({
  className,
  ...props
}) => (
  <CollapsibleContent
    className={cn(
      "mt-3 flex w-fit flex-col gap-2",
      "data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-top-2 data-[state=open]:slide-in-from-top-2 outline-none data-[state=closed]:animate-out data-[state=open]:animate-in",
      className
    )}
    {...props} />
);

export const Source = ({
  href,
  title,
  children,
  ...props
}) => (
  <a
    className="flex items-center gap-2"
    href={href}
    rel="noreferrer"
    target="_blank"
    {...props}>
    {children ?? (
      <>
        <BookIcon className="h-4 w-4" />
        <span className="block font-medium">{title}</span>
      </>
    )}
  </a>
);
````

## File: src/components/ai-elements/suggestion.jsx
````javascript
"use client";;
import { Button } from "@/components/ui/button";
import {
  ScrollArea,
  ScrollBar,
} from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

export const Suggestions = ({
  className,
  children,
  ...props
}) => (
  <ScrollArea className="w-full overflow-x-auto whitespace-nowrap" {...props}>
    <div className={cn("flex w-max flex-nowrap items-center gap-2", className)}>
      {children}
    </div>
    <ScrollBar className="hidden" orientation="horizontal" />
  </ScrollArea>
);

export const Suggestion = ({
  suggestion,
  onClick,
  className,
  variant = "outline",
  size = "sm",
  children,
  ...props
}) => {
  const handleClick = () => {
    onClick?.(suggestion);
  };

  return (
    <Button
      className={cn("cursor-pointer rounded-full px-4", className)}
      onClick={handleClick}
      size={size}
      type="button"
      variant={variant}
      {...props}>
      {children || suggestion}
    </Button>
  );
};
````

## File: src/components/ai-elements/task.jsx
````javascript
"use client";;
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { ChevronDownIcon, SearchIcon } from "lucide-react";

export const TaskItemFile = ({
  children,
  className,
  ...props
}) => (
  <div
    className={cn(
      "inline-flex items-center gap-1 rounded-md border bg-secondary px-1.5 py-0.5 text-foreground text-xs",
      className
    )}
    {...props}>
    {children}
  </div>
);

export const TaskItem = ({
  children,
  className,
  ...props
}) => (
  <div className={cn("text-muted-foreground text-sm", className)} {...props}>
    {children}
  </div>
);

export const Task = ({
  defaultOpen = true,
  className,
  ...props
}) => (
  <Collapsible className={cn(className)} defaultOpen={defaultOpen} {...props} />
);

export const TaskTrigger = ({
  children,
  className,
  title,
  ...props
}) => (
  <CollapsibleTrigger asChild className={cn("group", className)} {...props}>
    {children ?? (
      <div
        className="flex w-full cursor-pointer items-center gap-2 text-muted-foreground text-sm transition-colors hover:text-foreground">
        <SearchIcon className="size-4" />
        <p className="text-sm">{title}</p>
        <ChevronDownIcon
          className="size-4 transition-transform group-data-[state=open]:rotate-180" />
      </div>
    )}
  </CollapsibleTrigger>
);

export const TaskContent = ({
  children,
  className,
  ...props
}) => (
  <CollapsibleContent
    className={cn(
      "data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-top-2 data-[state=open]:slide-in-from-top-2 text-popover-foreground outline-none data-[state=closed]:animate-out data-[state=open]:animate-in",
      className
    )}
    {...props}>
    <div className="mt-4 space-y-2 border-muted border-l-2 pl-4">
      {children}
    </div>
  </CollapsibleContent>
);
````

## File: src/components/ai-elements/tool.jsx
````javascript
"use client";;
import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import {
  CheckCircleIcon,
  ChevronDownIcon,
  CircleIcon,
  ClockIcon,
  WrenchIcon,
  XCircleIcon,
} from "lucide-react";
import { isValidElement } from "react";
import { CodeBlock } from "./code-block";

export const Tool = ({
  className,
  ...props
}) => (
  <Collapsible
    className={cn("not-prose mb-4 w-full rounded-md border", className)}
    {...props} />
);

const getStatusBadge = (status) => {
  const labels = {
    "input-streaming": "Pending",
    "input-available": "Running",
    "output-available": "Completed",
    "output-error": "Error"
  };

  const icons = {
    "input-streaming": <CircleIcon className="size-4" />,
    "input-available": <ClockIcon className="size-4 animate-pulse" />,
    "output-available": <CheckCircleIcon className="size-4 text-green-600" />,
    "output-error": <XCircleIcon className="size-4 text-red-600" />
  };

  return (
    <Badge className="gap-1.5 rounded-full text-xs" variant="secondary">
      {icons[status]}
      {labels[status]}
    </Badge>
  );
};

export const ToolHeader = ({
  className,
  title,
  type,
  state,
  ...props
}) => (
  <CollapsibleTrigger
    className={cn("flex w-full items-center justify-between gap-4 p-3", className)}
    {...props}>
    <div className="flex items-center gap-2">
      <WrenchIcon className="size-4 text-muted-foreground" />
      <span className="font-medium text-sm">
        {title ?? type.split("-").slice(1).join("-")}
      </span>
      {getStatusBadge(state)}
    </div>
    <ChevronDownIcon
      className="size-4 text-muted-foreground transition-transform group-data-[state=open]:rotate-180" />
  </CollapsibleTrigger>
);

export const ToolContent = ({
  className,
  ...props
}) => (
  <CollapsibleContent
    className={cn(
      "data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-top-2 data-[state=open]:slide-in-from-top-2 text-popover-foreground outline-none data-[state=closed]:animate-out data-[state=open]:animate-in",
      className
    )}
    {...props} />
);

export const ToolInput = ({
  className,
  input,
  ...props
}) => (
  <div className={cn("space-y-2 overflow-hidden p-4", className)} {...props}>
    <h4
      className="font-medium text-muted-foreground text-xs uppercase tracking-wide">
      Parameters
    </h4>
    <div className="rounded-md bg-muted/50">
      <CodeBlock code={JSON.stringify(input, null, 2)} language="json" />
    </div>
  </div>
);

export const ToolOutput = ({
  className,
  output,
  errorText,
  ...props
}) => {
  if (!(output || errorText)) {
    return null;
  }

  let Output = <div>{output}</div>;

  if (typeof output === "object" && !isValidElement(output)) {
    Output = (
      <CodeBlock code={JSON.stringify(output, null, 2)} language="json" />
    );
  } else if (typeof output === "string") {
    Output = <CodeBlock code={output} language="json" />;
  }

  return (
    <div className={cn("space-y-2 p-4", className)} {...props}>
      <h4
        className="font-medium text-muted-foreground text-xs uppercase tracking-wide">
        {errorText ? "Error" : "Result"}
      </h4>
      <div
        className={cn("overflow-x-auto rounded-md text-xs [&_table]:w-full", errorText
          ? "bg-destructive/10 text-destructive"
          : "bg-muted/50 text-foreground")}>
        {errorText && <div>{errorText}</div>}
        {Output}
      </div>
    </div>
  );
};
````

## File: src/components/ai-elements/web-preview.jsx
````javascript
"use client";;
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "lucide-react";
import { createContext, useContext, useEffect, useState } from "react";

const WebPreviewContext = createContext(null);

const useWebPreview = () => {
  const context = useContext(WebPreviewContext);
  if (!context) {
    throw new Error("WebPreview components must be used within a WebPreview");
  }
  return context;
};

export const WebPreview = ({
  className,
  children,
  defaultUrl = "",
  onUrlChange,
  ...props
}) => {
  const [url, setUrl] = useState(defaultUrl);
  const [consoleOpen, setConsoleOpen] = useState(false);

  const handleUrlChange = (newUrl) => {
    setUrl(newUrl);
    onUrlChange?.(newUrl);
  };

  const contextValue = {
    url,
    setUrl: handleUrlChange,
    consoleOpen,
    setConsoleOpen,
  };

  return (
    <WebPreviewContext.Provider value={contextValue}>
      <div
        className={cn("flex size-full flex-col rounded-lg border bg-card", className)}
        {...props}>
        {children}
      </div>
    </WebPreviewContext.Provider>
  );
};

export const WebPreviewNavigation = ({
  className,
  children,
  ...props
}) => (
  <div
    className={cn("flex items-center gap-1 border-b p-2", className)}
    {...props}>
    {children}
  </div>
);

export const WebPreviewNavigationButton = ({
  onClick,
  disabled,
  tooltip,
  children,
  ...props
}) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          className="h-8 w-8 p-0 hover:text-foreground"
          disabled={disabled}
          onClick={onClick}
          size="sm"
          variant="ghost"
          {...props}>
          {children}
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>{tooltip}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

export const WebPreviewUrl = ({
  value,
  onChange,
  onKeyDown,
  ...props
}) => {
  const { url, setUrl } = useWebPreview();
  const [inputValue, setInputValue] = useState(url);

  // Sync input value with context URL when it changes externally
  useEffect(() => {
    setInputValue(url);
  }, [url]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
    onChange?.(event);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const target = event.target;
      setUrl(target.value);
    }
    onKeyDown?.(event);
  };

  return (
    <Input
      className="h-8 flex-1 text-sm"
      onChange={onChange ?? handleChange}
      onKeyDown={handleKeyDown}
      placeholder="Enter URL..."
      value={value ?? inputValue}
      {...props} />
  );
};

export const WebPreviewBody = ({
  className,
  loading,
  src,
  ...props
}) => {
  const { url } = useWebPreview();

  return (
    <div className="flex-1">
      <iframe
        className={cn("size-full", className)}
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-presentation"
        src={(src ?? url) || undefined}
        title="Preview"
        {...props} />
      {loading}
    </div>
  );
};

export const WebPreviewConsole = ({
  className,
  logs = [],
  children,
  ...props
}) => {
  const { consoleOpen, setConsoleOpen } = useWebPreview();

  return (
    <Collapsible
      className={cn("border-t bg-muted/50 font-mono text-sm", className)}
      onOpenChange={setConsoleOpen}
      open={consoleOpen}
      {...props}>
      <CollapsibleTrigger asChild>
        <Button
          className="flex w-full items-center justify-between p-4 text-left font-medium hover:bg-muted/50"
          variant="ghost">
          Console
          <ChevronDownIcon
            className={cn("h-4 w-4 transition-transform duration-200", consoleOpen && "rotate-180")} />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent
        className={cn(
          "px-4 pb-4",
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 outline-none data-[state=closed]:animate-out data-[state=open]:animate-in"
        )}>
        <div className="max-h-48 space-y-1 overflow-y-auto">
          {logs.length === 0 ? (
            <p className="text-muted-foreground">No console output</p>
          ) : (
            logs.map((log, index) => (
              <div
                className={cn(
                  "text-xs",
                  log.level === "error" && "text-destructive",
                  log.level === "warn" && "text-yellow-600",
                  log.level === "log" && "text-foreground"
                )}
                key={`${log.timestamp.getTime()}-${index}`}>
                <span className="text-muted-foreground">
                  {log.timestamp.toLocaleTimeString()}
                </span>{" "}
                {log.message}
              </div>
            ))
          )}
          {children}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};
````

## File: src/components/providers/query-provider.jsx
````javascript
"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";


export function QueryProvider({ children }) {
    const [client] = useState(() => new QueryClient())

    return (
        <QueryClientProvider client={client}>
            {children}
        </QueryClientProvider>
    )
}
````

## File: src/components/providers/theme-provider.jsx
````javascript
"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({
  children,
  ...props
}) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
````

## File: src/components/ui/accordion.jsx
````javascript
"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Accordion({
  ...props
}) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b last:border-b-0", className)}
      {...props} />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
          className
        )}
        {...props}>
        {children}
        <ChevronDownIcon
          className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
      {...props}>
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
````

## File: src/components/ui/alert-dialog.jsx
````javascript
"use client"

import * as React from "react"
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

function AlertDialog({
  ...props
}) {
  return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />;
}

function AlertDialogTrigger({
  ...props
}) {
  return (<AlertDialogPrimitive.Trigger data-slot="alert-dialog-trigger" {...props} />);
}

function AlertDialogPortal({
  ...props
}) {
  return (<AlertDialogPrimitive.Portal data-slot="alert-dialog-portal" {...props} />);
}

function AlertDialogOverlay({
  className,
  ...props
}) {
  return (
    <AlertDialogPrimitive.Overlay
      data-slot="alert-dialog-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props} />
  );
}

function AlertDialogContent({
  className,
  ...props
}) {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Content
        data-slot="alert-dialog-content"
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        )}
        {...props} />
    </AlertDialogPortal>
  );
}

function AlertDialogHeader({
  className,
  ...props
}) {
  return (
    <div
      data-slot="alert-dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props} />
  );
}

function AlertDialogFooter({
  className,
  ...props
}) {
  return (
    <div
      data-slot="alert-dialog-footer"
      className={cn("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className)}
      {...props} />
  );
}

function AlertDialogTitle({
  className,
  ...props
}) {
  return (
    <AlertDialogPrimitive.Title
      data-slot="alert-dialog-title"
      className={cn("text-lg font-semibold", className)}
      {...props} />
  );
}

function AlertDialogDescription({
  className,
  ...props
}) {
  return (
    <AlertDialogPrimitive.Description
      data-slot="alert-dialog-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props} />
  );
}

function AlertDialogAction({
  className,
  ...props
}) {
  return (<AlertDialogPrimitive.Action className={cn(buttonVariants(), className)} {...props} />);
}

function AlertDialogCancel({
  className,
  ...props
}) {
  return (
    <AlertDialogPrimitive.Cancel
      className={cn(buttonVariants({ variant: "outline" }), className)}
      {...props} />
  );
}

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
}
````

## File: src/components/ui/alert.jsx
````javascript
import * as React from "react"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        destructive:
          "text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Alert({
  className,
  variant,
  ...props
}) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props} />
  );
}

function AlertTitle({
  className,
  ...props
}) {
  return (
    <div
      data-slot="alert-title"
      className={cn("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", className)}
      {...props} />
  );
}

function AlertDescription({
  className,
  ...props
}) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",
        className
      )}
      {...props} />
  );
}

export { Alert, AlertTitle, AlertDescription }
````

## File: src/components/ui/aspect-ratio.jsx
````javascript
"use client"

import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio"

function AspectRatio({
  ...props
}) {
  return <AspectRatioPrimitive.Root data-slot="aspect-ratio" {...props} />;
}

export { AspectRatio }
````

## File: src/components/ui/avatar.jsx
````javascript
"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

function Avatar({
  className,
  ...props
}) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn("relative flex size-8 shrink-0 overflow-hidden rounded-full", className)}
      {...props} />
  );
}

function AvatarImage({
  className,
  ...props
}) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      {...props} />
  );
}

function AvatarFallback({
  className,
  ...props
}) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className
      )}
      {...props} />
  );
}

export { Avatar, AvatarImage, AvatarFallback }
````

## File: src/components/ui/badge.jsx
````javascript
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props} />
  );
}

export { Badge, badgeVariants }
````

## File: src/components/ui/breadcrumb.jsx
````javascript
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { ChevronRight, MoreHorizontal } from "lucide-react"

import { cn } from "@/lib/utils"

function Breadcrumb({
  ...props
}) {
  return <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />;
}

function BreadcrumbList({
  className,
  ...props
}) {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={cn(
        "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
        className
      )}
      {...props} />
  );
}

function BreadcrumbItem({
  className,
  ...props
}) {
  return (
    <li
      data-slot="breadcrumb-item"
      className={cn("inline-flex items-center gap-1.5", className)}
      {...props} />
  );
}

function BreadcrumbLink({
  asChild,
  className,
  ...props
}) {
  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      data-slot="breadcrumb-link"
      className={cn("hover:text-foreground transition-colors", className)}
      {...props} />
  );
}

function BreadcrumbPage({
  className,
  ...props
}) {
  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn("text-foreground font-normal", className)}
      {...props} />
  );
}

function BreadcrumbSeparator({
  children,
  className,
  ...props
}) {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={cn("[&>svg]:size-3.5", className)}
      {...props}>
      {children ?? <ChevronRight />}
    </li>
  );
}

function BreadcrumbEllipsis({
  className,
  ...props
}) {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}>
      <MoreHorizontal className="size-4" />
      <span className="sr-only">More</span>
    </span>
  );
}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
}
````

## File: src/components/ui/button-group.jsx
````javascript
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"

const buttonGroupVariants = cva(
  "flex w-fit items-stretch [&>*]:focus-visible:z-10 [&>*]:focus-visible:relative [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md has-[>[data-slot=button-group]]:gap-2",
  {
    variants: {
      orientation: {
        horizontal:
          "[&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none",
        vertical:
          "flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
    },
  }
)

function ButtonGroup({
  className,
  orientation,
  ...props
}) {
  return (
    <div
      role="group"
      data-slot="button-group"
      data-orientation={orientation}
      className={cn(buttonGroupVariants({ orientation }), className)}
      {...props} />
  );
}

function ButtonGroupText({
  className,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "div"

  return (
    <Comp
      className={cn(
        "bg-muted flex items-center gap-2 rounded-md border px-4 text-sm font-medium shadow-xs [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props} />
  );
}

function ButtonGroupSeparator({
  className,
  orientation = "vertical",
  ...props
}) {
  return (
    <Separator
      data-slot="button-group-separator"
      orientation={orientation}
      className={cn(
        "bg-input relative !m-0 self-stretch data-[orientation=vertical]:h-auto",
        className
      )}
      {...props} />
  );
}

export {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
  buttonGroupVariants,
}
````

## File: src/components/ui/button.jsx
````javascript
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props} />
  );
}

export { Button, buttonVariants }
````

## File: src/components/ui/calendar.jsx
````javascript
"use client"

import * as React from "react"
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react"
import { DayPicker, getDefaultClassNames } from "react-day-picker";

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  formatters,
  components,
  ...props
}) {
  const defaultClassNames = getDefaultClassNames()

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "bg-background group/calendar p-3 [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className
      )}
      captionLayout={captionLayout}
      formatters={{
        formatMonthDropdown: (date) =>
          date.toLocaleString("default", { month: "short" }),
        ...formatters,
      }}
      classNames={{
        root: cn("w-fit", defaultClassNames.root),
        months: cn("flex gap-4 flex-col md:flex-row relative", defaultClassNames.months),
        month: cn("flex flex-col w-full gap-4", defaultClassNames.month),
        nav: cn(
          "flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between",
          defaultClassNames.nav
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          defaultClassNames.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          defaultClassNames.button_next
        ),
        month_caption: cn(
          "flex items-center justify-center h-(--cell-size) w-full px-(--cell-size)",
          defaultClassNames.month_caption
        ),
        dropdowns: cn(
          "w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5",
          defaultClassNames.dropdowns
        ),
        dropdown_root: cn(
          "relative has-focus:border-ring border border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] rounded-md",
          defaultClassNames.dropdown_root
        ),
        dropdown: cn("absolute bg-popover inset-0 opacity-0", defaultClassNames.dropdown),
        caption_label: cn("select-none font-medium", captionLayout === "label"
          ? "text-sm"
          : "rounded-md pl-2 pr-1 flex items-center gap-1 text-sm h-8 [&>svg]:text-muted-foreground [&>svg]:size-3.5", defaultClassNames.caption_label),
        table: "w-full border-collapse",
        weekdays: cn("flex", defaultClassNames.weekdays),
        weekday: cn(
          "text-muted-foreground rounded-md flex-1 font-normal text-[0.8rem] select-none",
          defaultClassNames.weekday
        ),
        week: cn("flex w-full mt-2", defaultClassNames.week),
        week_number_header: cn("select-none w-(--cell-size)", defaultClassNames.week_number_header),
        week_number: cn(
          "text-[0.8rem] select-none text-muted-foreground",
          defaultClassNames.week_number
        ),
        day: cn(
          "relative w-full h-full p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md group/day aspect-square select-none",
          defaultClassNames.day
        ),
        range_start: cn("rounded-l-md bg-accent", defaultClassNames.range_start),
        range_middle: cn("rounded-none", defaultClassNames.range_middle),
        range_end: cn("rounded-r-md bg-accent", defaultClassNames.range_end),
        today: cn(
          "bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none",
          defaultClassNames.today
        ),
        outside: cn(
          "text-muted-foreground aria-selected:text-muted-foreground",
          defaultClassNames.outside
        ),
        disabled: cn("text-muted-foreground opacity-50", defaultClassNames.disabled),
        hidden: cn("invisible", defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => {
          return (<div data-slot="calendar" ref={rootRef} className={cn(className)} {...props} />);
        },
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === "left") {
            return (<ChevronLeftIcon className={cn("size-4", className)} {...props} />);
          }

          if (orientation === "right") {
            return (<ChevronRightIcon className={cn("size-4", className)} {...props} />);
          }

          return (<ChevronDownIcon className={cn("size-4", className)} {...props} />);
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div
                className="flex size-(--cell-size) items-center justify-center text-center">
                {children}
              </div>
            </td>
          );
        },
        ...components,
      }}
      {...props} />
  );
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}) {
  const defaultClassNames = getDefaultClassNames()

  const ref = React.useRef(null)
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus()
  }, [modifiers.focused])

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      data-day={day.date.toLocaleDateString()}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(
        "data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 dark:hover:text-accent-foreground flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] data-[range-end=true]:rounded-md data-[range-end=true]:rounded-r-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md data-[range-start=true]:rounded-l-md [&>span]:text-xs [&>span]:opacity-70",
        defaultClassNames.day,
        className
      )}
      {...props} />
  );
}

export { Calendar, CalendarDayButton }
````

## File: src/components/ui/card.jsx
````javascript
import * as React from "react"

import { cn } from "@/lib/utils"

function Card({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      )}
      {...props} />
  );
}

function CardHeader({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props} />
  );
}

function CardTitle({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props} />
  );
}

function CardDescription({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props} />
  );
}

function CardAction({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props} />
  );
}

function CardContent({
  className,
  ...props
}) {
  return (<div data-slot="card-content" className={cn("px-6", className)} {...props} />);
}

function CardFooter({
  className,
  ...props
}) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props} />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
````

## File: src/components/ui/carousel.jsx
````javascript
"use client";
import * as React from "react"
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const CarouselContext = React.createContext(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }

  return context
}

function Carousel({
  orientation = "horizontal",
  opts,
  setApi,
  plugins,
  className,
  children,
  ...props
}) {
  const [carouselRef, api] = useEmblaCarousel({
    ...opts,
    axis: orientation === "horizontal" ? "x" : "y",
  }, plugins)
  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)

  const onSelect = React.useCallback((api) => {
    if (!api) return
    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())
  }, [])

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev()
  }, [api])

  const scrollNext = React.useCallback(() => {
    api?.scrollNext()
  }, [api])

  const handleKeyDown = React.useCallback((event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault()
      scrollPrev()
    } else if (event.key === "ArrowRight") {
      event.preventDefault()
      scrollNext()
    }
  }, [scrollPrev, scrollNext])

  React.useEffect(() => {
    if (!api || !setApi) return
    setApi(api)
  }, [api, setApi])

  React.useEffect(() => {
    if (!api) return
    onSelect(api)
    api.on("reInit", onSelect)
    api.on("select", onSelect)

    return () => {
      api?.off("select", onSelect)
    };
  }, [api, onSelect])

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api: api,
        opts,
        orientation:
          orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}>
      <div
        onKeyDownCapture={handleKeyDown}
        className={cn("relative", className)}
        role="region"
        aria-roledescription="carousel"
        data-slot="carousel"
        {...props}>
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

function CarouselContent({
  className,
  ...props
}) {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div
      ref={carouselRef}
      className="overflow-hidden"
      data-slot="carousel-content">
      <div
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        {...props} />
    </div>
  );
}

function CarouselItem({
  className,
  ...props
}) {
  const { orientation } = useCarousel()

  return (
    <div
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props} />
  );
}

function CarouselPrevious({
  className,
  variant = "outline",
  size = "icon",
  ...props
}) {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

  return (
    <Button
      data-slot="carousel-previous"
      variant={variant}
      size={size}
      className={cn("absolute size-8 rounded-full", orientation === "horizontal"
        ? "top-1/2 -left-12 -translate-y-1/2"
        : "-top-12 left-1/2 -translate-x-1/2 rotate-90", className)}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}>
      <ArrowLeft />
      <span className="sr-only">Previous slide</span>
    </Button>
  );
}

function CarouselNext({
  className,
  variant = "outline",
  size = "icon",
  ...props
}) {
  const { orientation, scrollNext, canScrollNext } = useCarousel()

  return (
    <Button
      data-slot="carousel-next"
      variant={variant}
      size={size}
      className={cn("absolute size-8 rounded-full", orientation === "horizontal"
        ? "top-1/2 -right-12 -translate-y-1/2"
        : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", className)}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}>
      <ArrowRight />
      <span className="sr-only">Next slide</span>
    </Button>
  );
}

export { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext };
````

## File: src/components/ui/chart.jsx
````javascript
"use client";
import * as React from "react"
import * as RechartsPrimitive from "recharts"

import { cn } from "@/lib/utils"

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = {
  light: "",
  dark: ".dark"
}

const ChartContext = React.createContext(null)

function useChart() {
  const context = React.useContext(ChartContext)

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />")
  }

  return context
}

function ChartContainer({
  id,
  className,
  children,
  config,
  ...props
}) {
  const uniqueId = React.useId()
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-slot="chart"
        data-chart={chartId}
        className={cn(
          "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex aspect-video justify-center text-xs [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden",
          className
        )}
        {...props}>
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
}

const ChartStyle = ({
  id,
  config
}) => {
  const colorConfig = Object.entries(config).filter(([, config]) => config.theme || config.color)

  if (!colorConfig.length) {
    return null
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
.map(([key, itemConfig]) => {
const color =
  itemConfig.theme?.[theme] ||
  itemConfig.color
return color ? `  --color-${key}: ${color};` : null
})
.join("\n")}
}
`)
          .join("\n"),
      }} />
  );
}

const ChartTooltip = RechartsPrimitive.Tooltip

function ChartTooltipContent({
  active,
  payload,
  className,
  indicator = "dot",
  hideLabel = false,
  hideIndicator = false,
  label,
  labelFormatter,
  labelClassName,
  formatter,
  color,
  nameKey,
  labelKey
}) {
  const { config } = useChart()

  const tooltipLabel = React.useMemo(() => {
    if (hideLabel || !payload?.length) {
      return null
    }

    const [item] = payload
    const key = `${labelKey || item?.dataKey || item?.name || "value"}`
    const itemConfig = getPayloadConfigFromPayload(config, item, key)
    const value =
      !labelKey && typeof label === "string"
        ? config[label]?.label || label
        : itemConfig?.label

    if (labelFormatter) {
      return (
        <div className={cn("font-medium", labelClassName)}>
          {labelFormatter(value, payload)}
        </div>
      );
    }

    if (!value) {
      return null
    }

    return <div className={cn("font-medium", labelClassName)}>{value}</div>;
  }, [
    label,
    labelFormatter,
    payload,
    hideLabel,
    labelClassName,
    config,
    labelKey,
  ])

  if (!active || !payload?.length) {
    return null
  }

  const nestLabel = payload.length === 1 && indicator !== "dot"

  return (
    <div
      className={cn(
        "border-border/50 bg-background grid min-w-[8rem] items-start gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs shadow-xl",
        className
      )}>
      {!nestLabel ? tooltipLabel : null}
      <div className="grid gap-1.5">
        {payload
          .filter((item) => item.type !== "none")
          .map((item, index) => {
            const key = `${nameKey || item.name || item.dataKey || "value"}`
            const itemConfig = getPayloadConfigFromPayload(config, item, key)
            const indicatorColor = color || item.payload.fill || item.color

            return (
              <div
                key={item.dataKey}
                className={cn(
                  "[&>svg]:text-muted-foreground flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5",
                  indicator === "dot" && "items-center"
                )}>
                {formatter && item?.value !== undefined && item.name ? (
                  formatter(item.value, item.name, item, index, item.payload)
                ) : (
                  <>
                    {itemConfig?.icon ? (
                      <itemConfig.icon />
                    ) : (
                      !hideIndicator && (
                        <div
                          className={cn("shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)", {
                            "h-2.5 w-2.5": indicator === "dot",
                            "w-1": indicator === "line",
                            "w-0 border-[1.5px] border-dashed bg-transparent":
                              indicator === "dashed",
                            "my-0.5": nestLabel && indicator === "dashed",
                          })}
                          style={
                            {
                              "--color-bg": indicatorColor,
                              "--color-border": indicatorColor
                            }
                          } />
                      )
                    )}
                    <div
                      className={cn(
                        "flex flex-1 justify-between leading-none",
                        nestLabel ? "items-end" : "items-center"
                      )}>
                      <div className="grid gap-1.5">
                        {nestLabel ? tooltipLabel : null}
                        <span className="text-muted-foreground">
                          {itemConfig?.label || item.name}
                        </span>
                      </div>
                      {item.value && (
                        <span className="text-foreground font-mono font-medium tabular-nums">
                          {item.value.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
}

const ChartLegend = RechartsPrimitive.Legend

function ChartLegendContent({
  className,
  hideIcon = false,
  payload,
  verticalAlign = "bottom",
  nameKey
}) {
  const { config } = useChart()

  if (!payload?.length) {
    return null
  }

  return (
    <div
      className={cn(
        "flex items-center justify-center gap-4",
        verticalAlign === "top" ? "pb-3" : "pt-3",
        className
      )}>
      {payload
        .filter((item) => item.type !== "none")
        .map((item) => {
          const key = `${nameKey || item.dataKey || "value"}`
          const itemConfig = getPayloadConfigFromPayload(config, item, key)

          return (
            <div
              key={item.value}
              className={cn(
                "[&>svg]:text-muted-foreground flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3"
              )}>
              {itemConfig?.icon && !hideIcon ? (
                <itemConfig.icon />
              ) : (
                <div
                  className="h-2 w-2 shrink-0 rounded-[2px]"
                  style={{
                    backgroundColor: item.color,
                  }} />
              )}
              {itemConfig?.label}
            </div>
          );
        })}
    </div>
  );
}

// Helper to extract item config from a payload.
function getPayloadConfigFromPayload(
  config,
  payload,
  key
) {
  if (typeof payload !== "object" || payload === null) {
    return undefined
  }

  const payloadPayload =
    "payload" in payload &&
    typeof payload.payload === "object" &&
    payload.payload !== null
      ? payload.payload
      : undefined

  let configLabelKey = key

  if (
    key in payload &&
    typeof payload[key] === "string"
  ) {
    configLabelKey = payload[key]
  } else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key] === "string"
  ) {
    configLabelKey = payloadPayload[key]
  }

  return configLabelKey in config
    ? config[configLabelKey]
    : config[key];
}

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
}
````

## File: src/components/ui/checkbox.jsx
````javascript
"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { CheckIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Checkbox({
  className,
  ...props
}) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}>
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-current transition-none">
        <CheckIcon className="size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox }
````

## File: src/components/ui/collapsible.jsx
````javascript
"use client"

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"

function Collapsible({
  ...props
}) {
  return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />;
}

function CollapsibleTrigger({
  ...props
}) {
  return (<CollapsiblePrimitive.CollapsibleTrigger data-slot="collapsible-trigger" {...props} />);
}

function CollapsibleContent({
  ...props
}) {
  return (<CollapsiblePrimitive.CollapsibleContent data-slot="collapsible-content" {...props} />);
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
````

## File: src/components/ui/command.jsx
````javascript
"use client"

import * as React from "react"
import { Command as CommandPrimitive } from "cmdk"
import { SearchIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

function Command({
  className,
  ...props
}) {
  return (
    <CommandPrimitive
      data-slot="command"
      className={cn(
        "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
        className
      )}
      {...props} />
  );
}

function CommandDialog({
  title = "Command Palette",
  description = "Search for a command to run...",
  children,
  className,
  showCloseButton = true,
  ...props
}) {
  return (
    <Dialog {...props}>
      <DialogHeader className="sr-only">
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <DialogContent
        className={cn("overflow-hidden p-0", className)}
        showCloseButton={showCloseButton}>
        <Command
          className="[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
}

function CommandInput({
  className,
  ...props
}) {
  return (
    <div
      data-slot="command-input-wrapper"
      className="flex h-9 items-center gap-2 border-b px-3">
      <SearchIcon className="size-4 shrink-0 opacity-50" />
      <CommandPrimitive.Input
        data-slot="command-input"
        className={cn(
          "placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props} />
    </div>
  );
}

function CommandList({
  className,
  ...props
}) {
  return (
    <CommandPrimitive.List
      data-slot="command-list"
      className={cn("max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto", className)}
      {...props} />
  );
}

function CommandEmpty({
  ...props
}) {
  return (<CommandPrimitive.Empty data-slot="command-empty" className="py-6 text-center text-sm" {...props} />);
}

function CommandGroup({
  className,
  ...props
}) {
  return (
    <CommandPrimitive.Group
      data-slot="command-group"
      className={cn(
        "text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium",
        className
      )}
      {...props} />
  );
}

function CommandSeparator({
  className,
  ...props
}) {
  return (
    <CommandPrimitive.Separator
      data-slot="command-separator"
      className={cn("bg-border -mx-1 h-px", className)}
      {...props} />
  );
}

function CommandItem({
  className,
  ...props
}) {
  return (
    <CommandPrimitive.Item
      data-slot="command-item"
      className={cn(
        "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props} />
  );
}

function CommandShortcut({
  className,
  ...props
}) {
  return (
    <span
      data-slot="command-shortcut"
      className={cn("text-muted-foreground ml-auto text-xs tracking-widest", className)}
      {...props} />
  );
}

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
}
````

## File: src/components/ui/context-menu.jsx
````javascript
"use client"

import * as React from "react"
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu"
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function ContextMenu({
  ...props
}) {
  return <ContextMenuPrimitive.Root data-slot="context-menu" {...props} />;
}

function ContextMenuTrigger({
  ...props
}) {
  return (<ContextMenuPrimitive.Trigger data-slot="context-menu-trigger" {...props} />);
}

function ContextMenuGroup({
  ...props
}) {
  return (<ContextMenuPrimitive.Group data-slot="context-menu-group" {...props} />);
}

function ContextMenuPortal({
  ...props
}) {
  return (<ContextMenuPrimitive.Portal data-slot="context-menu-portal" {...props} />);
}

function ContextMenuSub({
  ...props
}) {
  return <ContextMenuPrimitive.Sub data-slot="context-menu-sub" {...props} />;
}

function ContextMenuRadioGroup({
  ...props
}) {
  return (<ContextMenuPrimitive.RadioGroup data-slot="context-menu-radio-group" {...props} />);
}

function ContextMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}) {
  return (
    <ContextMenuPrimitive.SubTrigger
      data-slot="context-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}>
      {children}
      <ChevronRightIcon className="ml-auto" />
    </ContextMenuPrimitive.SubTrigger>
  );
}

function ContextMenuSubContent({
  className,
  ...props
}) {
  return (
    <ContextMenuPrimitive.SubContent
      data-slot="context-menu-sub-content"
      className={cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        className
      )}
      {...props} />
  );
}

function ContextMenuContent({
  className,
  ...props
}) {
  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Content
        data-slot="context-menu-content"
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-context-menu-content-available-height) min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
          className
        )}
        {...props} />
    </ContextMenuPrimitive.Portal>
  );
}

function ContextMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return (
    <ContextMenuPrimitive.Item
      data-slot="context-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props} />
  );
}

function ContextMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}) {
  return (
    <ContextMenuPrimitive.CheckboxItem
      data-slot="context-menu-checkbox-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      checked={checked}
      {...props}>
      <span
        className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.CheckboxItem>
  );
}

function ContextMenuRadioItem({
  className,
  children,
  ...props
}) {
  return (
    <ContextMenuPrimitive.RadioItem
      data-slot="context-menu-radio-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}>
      <span
        className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <CircleIcon className="size-2 fill-current" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.RadioItem>
  );
}

function ContextMenuLabel({
  className,
  inset,
  ...props
}) {
  return (
    <ContextMenuPrimitive.Label
      data-slot="context-menu-label"
      data-inset={inset}
      className={cn(
        "text-foreground px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        className
      )}
      {...props} />
  );
}

function ContextMenuSeparator({
  className,
  ...props
}) {
  return (
    <ContextMenuPrimitive.Separator
      data-slot="context-menu-separator"
      className={cn("bg-border -mx-1 my-1 h-px", className)}
      {...props} />
  );
}

function ContextMenuShortcut({
  className,
  ...props
}) {
  return (
    <span
      data-slot="context-menu-shortcut"
      className={cn("text-muted-foreground ml-auto text-xs tracking-widest", className)}
      {...props} />
  );
}

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
}
````

## File: src/components/ui/delete-chat-modal.jsx
````javascript
"use client";

import Modal from "@/components/ui/modal";
import { useDeleteChat } from "@/modules/chat/hooks/chat";

import React from "react";
import { toast } from "sonner";

const DeleteChatModal = ({
  isModalOpen,
  setIsModalOpen,
  chatId,
}) => {
  const { mutateAsync, isPending } = useDeleteChat(chatId);

  const handleDelete = async () => {
    try {
      await mutateAsync();
      toast.success("Chat deleted successfully");
      setIsModalOpen(false);
    } catch (err) {
      toast.error("Failed to delete Chat");
      console.error("Failed to delete Chat:", err);
    }
  };

  return (
    <Modal
      title="Delete Chat"
      description="Are you sure you want to delete this Chat? This action cannot be undone."
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      onSubmit={handleDelete}
      submitText={isPending ? "Deleting..." : "Delete"}
      submitVariant="destructive"
    >
      <p className="text-sm text-zinc-500">
        Once deleted, all requests and data in this Chat will be permanently removed.
      </p>
    </Modal>
  );
};

export default DeleteChatModal;
````

## File: src/components/ui/dialog.jsx
````javascript
"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { XIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Dialog({
  ...props
}) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}

function DialogTrigger({
  ...props
}) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

function DialogPortal({
  ...props
}) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}

function DialogClose({
  ...props
}) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}

function DialogOverlay({
  className,
  ...props
}) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props} />
  );
}

function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}) {
  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        )}
        {...props}>
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close
            data-slot="dialog-close"
            className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4">
            <XIcon />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  );
}

function DialogHeader({
  className,
  ...props
}) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props} />
  );
}

function DialogFooter({
  className,
  ...props
}) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className)}
      {...props} />
  );
}

function DialogTitle({
  className,
  ...props
}) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("text-lg leading-none font-semibold", className)}
      {...props} />
  );
}

function DialogDescription({
  className,
  ...props
}) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props} />
  );
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
}
````

## File: src/components/ui/drawer.jsx
````javascript
"use client"

import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"

import { cn } from "@/lib/utils"

function Drawer({
  ...props
}) {
  return <DrawerPrimitive.Root data-slot="drawer" {...props} />;
}

function DrawerTrigger({
  ...props
}) {
  return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />;
}

function DrawerPortal({
  ...props
}) {
  return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />;
}

function DrawerClose({
  ...props
}) {
  return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />;
}

function DrawerOverlay({
  className,
  ...props
}) {
  return (
    <DrawerPrimitive.Overlay
      data-slot="drawer-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props} />
  );
}

function DrawerContent({
  className,
  children,
  ...props
}) {
  return (
    <DrawerPortal data-slot="drawer-portal">
      <DrawerOverlay />
      <DrawerPrimitive.Content
        data-slot="drawer-content"
        className={cn(
          "group/drawer-content bg-background fixed z-50 flex h-auto flex-col",
          "data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg data-[vaul-drawer-direction=top]:border-b",
          "data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg data-[vaul-drawer-direction=bottom]:border-t",
          "data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=right]:sm:max-w-sm",
          "data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=left]:sm:max-w-sm",
          className
        )}
        {...props}>
        <div
          className="bg-muted mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block" />
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  );
}

function DrawerHeader({
  className,
  ...props
}) {
  return (
    <div
      data-slot="drawer-header"
      className={cn(
        "flex flex-col gap-0.5 p-4 group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:gap-1.5 md:text-left",
        className
      )}
      {...props} />
  );
}

function DrawerFooter({
  className,
  ...props
}) {
  return (
    <div
      data-slot="drawer-footer"
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props} />
  );
}

function DrawerTitle({
  className,
  ...props
}) {
  return (
    <DrawerPrimitive.Title
      data-slot="drawer-title"
      className={cn("text-foreground font-semibold", className)}
      {...props} />
  );
}

function DrawerDescription({
  className,
  ...props
}) {
  return (
    <DrawerPrimitive.Description
      data-slot="drawer-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props} />
  );
}

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
}
````

## File: src/components/ui/dropdown-menu.jsx
````javascript
"use client"

import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function DropdownMenu({
  ...props
}) {
  return <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />;
}

function DropdownMenuPortal({
  ...props
}) {
  return (<DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />);
}

function DropdownMenuTrigger({
  ...props
}) {
  return (<DropdownMenuPrimitive.Trigger data-slot="dropdown-menu-trigger" {...props} />);
}

function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        data-slot="dropdown-menu-content"
        sideOffset={sideOffset}
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
          className
        )}
        {...props} />
    </DropdownMenuPrimitive.Portal>
  );
}

function DropdownMenuGroup({
  ...props
}) {
  return (<DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />);
}

function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return (
    <DropdownMenuPrimitive.Item
      data-slot="dropdown-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props} />
  );
}

function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      checked={checked}
      {...props}>
      <span
        className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  );
}

function DropdownMenuRadioGroup({
  ...props
}) {
  return (<DropdownMenuPrimitive.RadioGroup data-slot="dropdown-menu-radio-group" {...props} />);
}

function DropdownMenuRadioItem({
  className,
  children,
  ...props
}) {
  return (
    <DropdownMenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}>
      <span
        className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CircleIcon className="size-2 fill-current" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  );
}

function DropdownMenuLabel({
  className,
  inset,
  ...props
}) {
  return (
    <DropdownMenuPrimitive.Label
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cn("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", className)}
      {...props} />
  );
}

function DropdownMenuSeparator({
  className,
  ...props
}) {
  return (
    <DropdownMenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className={cn("bg-border -mx-1 my-1 h-px", className)}
      {...props} />
  );
}

function DropdownMenuShortcut({
  className,
  ...props
}) {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={cn("text-muted-foreground ml-auto text-xs tracking-widest", className)}
      {...props} />
  );
}

function DropdownMenuSub({
  ...props
}) {
  return <DropdownMenuPrimitive.Sub data-slot="dropdown-menu-sub" {...props} />;
}

function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}) {
  return (
    <DropdownMenuPrimitive.SubTrigger
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}>
      {children}
      <ChevronRightIcon className="ml-auto size-4" />
    </DropdownMenuPrimitive.SubTrigger>
  );
}

function DropdownMenuSubContent({
  className,
  ...props
}) {
  return (
    <DropdownMenuPrimitive.SubContent
      data-slot="dropdown-menu-sub-content"
      className={cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        className
      )}
      {...props} />
  );
}

export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
}
````

## File: src/components/ui/empty.jsx
````javascript
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

function Empty({
  className,
  ...props
}) {
  return (
    <div
      data-slot="empty"
      className={cn(
        "flex min-w-0 flex-1 flex-col items-center justify-center gap-6 rounded-lg border-dashed p-6 text-center text-balance md:p-12",
        className
      )}
      {...props} />
  );
}

function EmptyHeader({
  className,
  ...props
}) {
  return (
    <div
      data-slot="empty-header"
      className={cn("flex max-w-sm flex-col items-center gap-2 text-center", className)}
      {...props} />
  );
}

const emptyMediaVariants = cva(
  "flex shrink-0 items-center justify-center mb-2 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        icon: "bg-muted text-foreground flex size-10 shrink-0 items-center justify-center rounded-lg [&_svg:not([class*='size-'])]:size-6",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function EmptyMedia({
  className,
  variant = "default",
  ...props
}) {
  return (
    <div
      data-slot="empty-icon"
      data-variant={variant}
      className={cn(emptyMediaVariants({ variant, className }))}
      {...props} />
  );
}

function EmptyTitle({
  className,
  ...props
}) {
  return (
    <div
      data-slot="empty-title"
      className={cn("text-lg font-medium tracking-tight", className)}
      {...props} />
  );
}

function EmptyDescription({
  className,
  ...props
}) {
  return (
    <div
      data-slot="empty-description"
      className={cn(
        "text-muted-foreground [&>a:hover]:text-primary text-sm/relaxed [&>a]:underline [&>a]:underline-offset-4",
        className
      )}
      {...props} />
  );
}

function EmptyContent({
  className,
  ...props
}) {
  return (
    <div
      data-slot="empty-content"
      className={cn(
        "flex w-full max-w-sm min-w-0 flex-col items-center gap-4 text-sm text-balance",
        className
      )}
      {...props} />
  );
}

export {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
  EmptyMedia,
}
````

## File: src/components/ui/field.jsx
````javascript
"use client"

import { useMemo } from "react"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

function FieldSet({
  className,
  ...props
}) {
  return (
    <fieldset
      data-slot="field-set"
      className={cn(
        "flex flex-col gap-6",
        "has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3",
        className
      )}
      {...props} />
  );
}

function FieldLegend({
  className,
  variant = "legend",
  ...props
}) {
  return (
    <legend
      data-slot="field-legend"
      data-variant={variant}
      className={cn(
        "mb-3 font-medium",
        "data-[variant=legend]:text-base",
        "data-[variant=label]:text-sm",
        className
      )}
      {...props} />
  );
}

function FieldGroup({
  className,
  ...props
}) {
  return (
    <div
      data-slot="field-group"
      className={cn(
        "group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 [&>[data-slot=field-group]]:gap-4",
        className
      )}
      {...props} />
  );
}

const fieldVariants = cva("group/field flex w-full gap-3 data-[invalid=true]:text-destructive", {
  variants: {
    orientation: {
      vertical: ["flex-col [&>*]:w-full [&>.sr-only]:w-auto"],
      horizontal: [
        "flex-row items-center",
        "[&>[data-slot=field-label]]:flex-auto",
        "has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
      ],
      responsive: [
        "flex-col [&>*]:w-full [&>.sr-only]:w-auto @md/field-group:flex-row @md/field-group:items-center @md/field-group:[&>*]:w-auto",
        "@md/field-group:[&>[data-slot=field-label]]:flex-auto",
        "@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
      ],
    },
  },
  defaultVariants: {
    orientation: "vertical",
  },
})

function Field({
  className,
  orientation = "vertical",
  ...props
}) {
  return (
    <div
      role="group"
      data-slot="field"
      data-orientation={orientation}
      className={cn(fieldVariants({ orientation }), className)}
      {...props} />
  );
}

function FieldContent({
  className,
  ...props
}) {
  return (
    <div
      data-slot="field-content"
      className={cn("group/field-content flex flex-1 flex-col gap-1.5 leading-snug", className)}
      {...props} />
  );
}

function FieldLabel({
  className,
  ...props
}) {
  return (
    <Label
      data-slot="field-label"
      className={cn(
        "group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50",
        "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border [&>*]:data-[slot=field]:p-4",
        "has-data-[state=checked]:bg-primary/5 has-data-[state=checked]:border-primary dark:has-data-[state=checked]:bg-primary/10",
        className
      )}
      {...props} />
  );
}

function FieldTitle({
  className,
  ...props
}) {
  return (
    <div
      data-slot="field-label"
      className={cn(
        "flex w-fit items-center gap-2 text-sm leading-snug font-medium group-data-[disabled=true]/field:opacity-50",
        className
      )}
      {...props} />
  );
}

function FieldDescription({
  className,
  ...props
}) {
  return (
    <p
      data-slot="field-description"
      className={cn(
        "text-muted-foreground text-sm leading-normal font-normal group-has-[[data-orientation=horizontal]]/field:text-balance",
        "last:mt-0 nth-last-2:-mt-1 [[data-variant=legend]+&]:-mt-1.5",
        "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
        className
      )}
      {...props} />
  );
}

function FieldSeparator({
  children,
  className,
  ...props
}) {
  return (
    <div
      data-slot="field-separator"
      data-content={!!children}
      className={cn(
        "relative -my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2",
        className
      )}
      {...props}>
      <Separator className="absolute inset-0 top-1/2" />
      {children && (
        <span
          className="bg-background text-muted-foreground relative mx-auto block w-fit px-2"
          data-slot="field-separator-content">
          {children}
        </span>
      )}
    </div>
  );
}

function FieldError({
  className,
  children,
  errors,
  ...props
}) {
  const content = useMemo(() => {
    if (children) {
      return children
    }

    if (!errors) {
      return null
    }

    if (errors?.length === 1 && errors[0]?.message) {
      return errors[0].message
    }

    return (
      <ul className="ml-4 flex list-disc flex-col gap-1">
        {errors.map((error, index) =>
          error?.message && <li key={index}>{error.message}</li>)}
      </ul>
    );
  }, [children, errors])

  if (!content) {
    return null
  }

  return (
    <div
      role="alert"
      data-slot="field-error"
      className={cn("text-destructive text-sm font-normal", className)}
      {...props}>
      {content}
    </div>
  );
}

export {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldContent,
  FieldTitle,
}
````

## File: src/components/ui/form.jsx
````javascript
"use client";
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { Controller, FormProvider, useFormContext, useFormState } from "react-hook-form";

import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"

const Form = FormProvider

const FormFieldContext = React.createContext({})

const FormField = (
  {
    ...props
  }
) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
}

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext)
  const itemContext = React.useContext(FormItemContext)
  const { getFieldState } = useFormContext()
  const formState = useFormState({ name: fieldContext.name })
  const fieldState = getFieldState(fieldContext.name, formState)

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>")
  }

  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  }
}

const FormItemContext = React.createContext({})

function FormItem({
  className,
  ...props
}) {
  const id = React.useId()

  return (
    <FormItemContext.Provider value={{ id }}>
      <div data-slot="form-item" className={cn("grid gap-2", className)} {...props} />
    </FormItemContext.Provider>
  );
}

function FormLabel({
  className,
  ...props
}) {
  const { error, formItemId } = useFormField()

  return (
    <Label
      data-slot="form-label"
      data-error={!!error}
      className={cn("data-[error=true]:text-destructive", className)}
      htmlFor={formItemId}
      {...props} />
  );
}

function FormControl({
  ...props
}) {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

  return (
    <Slot
      data-slot="form-control"
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props} />
  );
}

function FormDescription({
  className,
  ...props
}) {
  const { formDescriptionId } = useFormField()

  return (
    <p
      data-slot="form-description"
      id={formDescriptionId}
      className={cn("text-muted-foreground text-sm", className)}
      {...props} />
  );
}

function FormMessage({
  className,
  ...props
}) {
  const { error, formMessageId } = useFormField()
  const body = error ? String(error?.message ?? "") : props.children

  if (!body) {
    return null
  }

  return (
    <p
      data-slot="form-message"
      id={formMessageId}
      className={cn("text-destructive text-sm", className)}
      {...props}>
      {body}
    </p>
  );
}

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
}
````

## File: src/components/ui/hover-card.jsx
````javascript
"use client"

import * as React from "react"
import * as HoverCardPrimitive from "@radix-ui/react-hover-card"

import { cn } from "@/lib/utils"

function HoverCard({
  ...props
}) {
  return <HoverCardPrimitive.Root data-slot="hover-card" {...props} />;
}

function HoverCardTrigger({
  ...props
}) {
  return (<HoverCardPrimitive.Trigger data-slot="hover-card-trigger" {...props} />);
}

function HoverCardContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}) {
  return (
    <HoverCardPrimitive.Portal data-slot="hover-card-portal">
      <HoverCardPrimitive.Content
        data-slot="hover-card-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
          className
        )}
        {...props} />
    </HoverCardPrimitive.Portal>
  );
}

export { HoverCard, HoverCardTrigger, HoverCardContent }
````

## File: src/components/ui/input-group.jsx
````javascript
"use client"

import * as React from "react"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

function InputGroup({
  className,
  ...props
}) {
  return (
    <div
      data-slot="input-group"
      role="group"
      className={cn(
        "group/input-group border-input dark:bg-input/30 relative flex w-full items-center rounded-md border shadow-xs transition-[color,box-shadow] outline-none",
        "h-9 has-[>textarea]:h-auto",
        // Variants based on alignment.
        "has-[>[data-align=inline-start]]:[&>input]:pl-2",
        "has-[>[data-align=inline-end]]:[&>input]:pr-2",
        "has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>input]:pb-3",
        "has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3",
        // Focus state.
        "has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot=input-group-control]:focus-visible]:ring-[3px]",
        // Error state.
        "has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[[data-slot][aria-invalid=true]]:border-destructive dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40",
        className
      )}
      {...props} />
  );
}

const inputGroupAddonVariants = cva(
  "text-muted-foreground flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium select-none [&>svg:not([class*='size-'])]:size-4 [&>kbd]:rounded-[calc(var(--radius)-5px)] group-data-[disabled=true]/input-group:opacity-50",
  {
    variants: {
      align: {
        "inline-start":
          "order-first pl-3 has-[>button]:ml-[-0.45rem] has-[>kbd]:ml-[-0.35rem]",
        "inline-end":
          "order-last pr-3 has-[>button]:mr-[-0.45rem] has-[>kbd]:mr-[-0.35rem]",
        "block-start":
          "order-first w-full justify-start px-3 pt-3 [.border-b]:pb-3 group-has-[>input]/input-group:pt-2.5",
        "block-end":
          "order-last w-full justify-start px-3 pb-3 [.border-t]:pt-3 group-has-[>input]/input-group:pb-2.5",
      },
    },
    defaultVariants: {
      align: "inline-start",
    },
  }
)

function InputGroupAddon({
  className,
  align = "inline-start",
  ...props
}) {
  return (
    <div
      role="group"
      data-slot="input-group-addon"
      data-align={align}
      className={cn(inputGroupAddonVariants({ align }), className)}
      onClick={(e) => {
        if ((e.target).closest("button")) {
          return
        }
        e.currentTarget.parentElement?.querySelector("input")?.focus()
      }}
      {...props} />
  );
}

const inputGroupButtonVariants = cva("text-sm shadow-none flex gap-2 items-center", {
  variants: {
    size: {
      xs: "h-6 gap-1 px-2 rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-3.5 has-[>svg]:px-2",
      sm: "h-8 px-2.5 gap-1.5 rounded-md has-[>svg]:px-2.5",
      "icon-xs":
        "size-6 rounded-[calc(var(--radius)-5px)] p-0 has-[>svg]:p-0",
      "icon-sm": "size-8 p-0 has-[>svg]:p-0",
    },
  },
  defaultVariants: {
    size: "xs",
  },
})

function InputGroupButton({
  className,
  type = "button",
  variant = "ghost",
  size = "xs",
  ...props
}) {
  return (
    <Button
      type={type}
      data-size={size}
      variant={variant}
      className={cn(inputGroupButtonVariants({ size }), className)}
      {...props} />
  );
}

function InputGroupText({
  className,
  ...props
}) {
  return (
    <span
      className={cn(
        "text-muted-foreground flex items-center gap-2 text-sm [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props} />
  );
}

function InputGroupInput({
  className,
  ...props
}) {
  return (
    <Input
      data-slot="input-group-control"
      className={cn(
        "flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0 dark:bg-transparent",
        className
      )}
      {...props} />
  );
}

function InputGroupTextarea({
  className,
  ...props
}) {
  return (
    <Textarea
      data-slot="input-group-control"
      className={cn(
        "flex-1 resize-none rounded-none border-0 bg-transparent py-3 shadow-none focus-visible:ring-0 dark:bg-transparent",
        className
      )}
      {...props} />
  );
}

export {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupInput,
  InputGroupTextarea,
}
````

## File: src/components/ui/input-otp.jsx
````javascript
"use client"

import * as React from "react"
import { OTPInput, OTPInputContext } from "input-otp"
import { MinusIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function InputOTP({
  className,
  containerClassName,
  ...props
}) {
  return (
    <OTPInput
      data-slot="input-otp"
      containerClassName={cn("flex items-center gap-2 has-disabled:opacity-50", containerClassName)}
      className={cn("disabled:cursor-not-allowed", className)}
      {...props} />
  );
}

function InputOTPGroup({
  className,
  ...props
}) {
  return (
    <div
      data-slot="input-otp-group"
      className={cn("flex items-center", className)}
      {...props} />
  );
}

function InputOTPSlot({
  index,
  className,
  ...props
}) {
  const inputOTPContext = React.useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {}

  return (
    <div
      data-slot="input-otp-slot"
      data-active={isActive}
      className={cn(
        "data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive dark:bg-input/30 border-input relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]",
        className
      )}
      {...props}>
      {char}
      {hasFakeCaret && (
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="animate-caret-blink bg-foreground h-4 w-px duration-1000" />
        </div>
      )}
    </div>
  );
}

function InputOTPSeparator({
  ...props
}) {
  return (
    <div data-slot="input-otp-separator" role="separator" {...props}>
      <MinusIcon />
    </div>
  );
}

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
````

## File: src/components/ui/input.jsx
````javascript
import * as React from "react"

import { cn } from "@/lib/utils"

function Input({
  className,
  type,
  ...props
}) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props} />
  );
}

export { Input }
````

## File: src/components/ui/item.jsx
````javascript
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"

function ItemGroup({
  className,
  ...props
}) {
  return (
    <div
      role="list"
      data-slot="item-group"
      className={cn("group/item-group flex flex-col", className)}
      {...props} />
  );
}

function ItemSeparator({
  className,
  ...props
}) {
  return (
    <Separator
      data-slot="item-separator"
      orientation="horizontal"
      className={cn("my-0", className)}
      {...props} />
  );
}

const itemVariants = cva(
  "group/item flex items-center border border-transparent text-sm rounded-md transition-colors [a]:hover:bg-accent/50 [a]:transition-colors duration-100 flex-wrap outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border-border",
        muted: "bg-muted/50",
      },
      size: {
        default: "p-4 gap-4 ",
        sm: "py-3 px-4 gap-2.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Item({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "div"
  return (
    <Comp
      data-slot="item"
      data-variant={variant}
      data-size={size}
      className={cn(itemVariants({ variant, size, className }))}
      {...props} />
  );
}

const itemMediaVariants = cva(
  "flex shrink-0 items-center justify-center gap-2 group-has-[[data-slot=item-description]]/item:self-start [&_svg]:pointer-events-none group-has-[[data-slot=item-description]]/item:translate-y-0.5",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        icon: "size-8 border rounded-sm bg-muted [&_svg:not([class*='size-'])]:size-4",
        image:
          "size-10 rounded-sm overflow-hidden [&_img]:size-full [&_img]:object-cover",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function ItemMedia({
  className,
  variant = "default",
  ...props
}) {
  return (
    <div
      data-slot="item-media"
      data-variant={variant}
      className={cn(itemMediaVariants({ variant, className }))}
      {...props} />
  );
}

function ItemContent({
  className,
  ...props
}) {
  return (
    <div
      data-slot="item-content"
      className={cn(
        "flex flex-1 flex-col gap-1 [&+[data-slot=item-content]]:flex-none",
        className
      )}
      {...props} />
  );
}

function ItemTitle({
  className,
  ...props
}) {
  return (
    <div
      data-slot="item-title"
      className={cn(
        "flex w-fit items-center gap-2 text-sm leading-snug font-medium",
        className
      )}
      {...props} />
  );
}

function ItemDescription({
  className,
  ...props
}) {
  return (
    <p
      data-slot="item-description"
      className={cn(
        "text-muted-foreground line-clamp-2 text-sm leading-normal font-normal text-balance",
        "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
        className
      )}
      {...props} />
  );
}

function ItemActions({
  className,
  ...props
}) {
  return (
    <div
      data-slot="item-actions"
      className={cn("flex items-center gap-2", className)}
      {...props} />
  );
}

function ItemHeader({
  className,
  ...props
}) {
  return (
    <div
      data-slot="item-header"
      className={cn("flex basis-full items-center justify-between gap-2", className)}
      {...props} />
  );
}

function ItemFooter({
  className,
  ...props
}) {
  return (
    <div
      data-slot="item-footer"
      className={cn("flex basis-full items-center justify-between gap-2", className)}
      {...props} />
  );
}

export {
  Item,
  ItemMedia,
  ItemContent,
  ItemActions,
  ItemGroup,
  ItemSeparator,
  ItemTitle,
  ItemDescription,
  ItemHeader,
  ItemFooter,
}
````

## File: src/components/ui/kbd.jsx
````javascript
import { cn } from "@/lib/utils"

function Kbd({
  className,
  ...props
}) {
  return (
    <kbd
      data-slot="kbd"
      className={cn(
        "bg-muted text-muted-foreground pointer-events-none inline-flex h-5 w-fit min-w-5 items-center justify-center gap-1 rounded-sm px-1 font-sans text-xs font-medium select-none",
        "[&_svg:not([class*='size-'])]:size-3",
        "[[data-slot=tooltip-content]_&]:bg-background/20 [[data-slot=tooltip-content]_&]:text-background dark:[[data-slot=tooltip-content]_&]:bg-background/10",
        className
      )}
      {...props} />
  );
}

function KbdGroup({
  className,
  ...props
}) {
  return (
    <kbd
      data-slot="kbd-group"
      className={cn("inline-flex items-center gap-1", className)}
      {...props} />
  );
}

export { Kbd, KbdGroup }
````

## File: src/components/ui/label.jsx
````javascript
"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"

import { cn } from "@/lib/utils"

function Label({
  className,
  ...props
}) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      )}
      {...props} />
  );
}

export { Label }
````

## File: src/components/ui/menubar.jsx
````javascript
"use client"

import * as React from "react"
import * as MenubarPrimitive from "@radix-ui/react-menubar"
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Menubar({
  className,
  ...props
}) {
  return (
    <MenubarPrimitive.Root
      data-slot="menubar"
      className={cn(
        "bg-background flex h-9 items-center gap-1 rounded-md border p-1 shadow-xs",
        className
      )}
      {...props} />
  );
}

function MenubarMenu({
  ...props
}) {
  return <MenubarPrimitive.Menu data-slot="menubar-menu" {...props} />;
}

function MenubarGroup({
  ...props
}) {
  return <MenubarPrimitive.Group data-slot="menubar-group" {...props} />;
}

function MenubarPortal({
  ...props
}) {
  return <MenubarPrimitive.Portal data-slot="menubar-portal" {...props} />;
}

function MenubarRadioGroup({
  ...props
}) {
  return (<MenubarPrimitive.RadioGroup data-slot="menubar-radio-group" {...props} />);
}

function MenubarTrigger({
  className,
  ...props
}) {
  return (
    <MenubarPrimitive.Trigger
      data-slot="menubar-trigger"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex items-center rounded-sm px-2 py-1 text-sm font-medium outline-hidden select-none",
        className
      )}
      {...props} />
  );
}

function MenubarContent({
  className,
  align = "start",
  alignOffset = -4,
  sideOffset = 8,
  ...props
}) {
  return (
    <MenubarPortal>
      <MenubarPrimitive.Content
        data-slot="menubar-content"
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[12rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-md",
          className
        )}
        {...props} />
    </MenubarPortal>
  );
}

function MenubarItem({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return (
    <MenubarPrimitive.Item
      data-slot="menubar-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props} />
  );
}

function MenubarCheckboxItem({
  className,
  children,
  checked,
  ...props
}) {
  return (
    <MenubarPrimitive.CheckboxItem
      data-slot="menubar-checkbox-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      checked={checked}
      {...props}>
      <span
        className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <MenubarPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.CheckboxItem>
  );
}

function MenubarRadioItem({
  className,
  children,
  ...props
}) {
  return (
    <MenubarPrimitive.RadioItem
      data-slot="menubar-radio-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}>
      <span
        className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <MenubarPrimitive.ItemIndicator>
          <CircleIcon className="size-2 fill-current" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.RadioItem>
  );
}

function MenubarLabel({
  className,
  inset,
  ...props
}) {
  return (
    <MenubarPrimitive.Label
      data-slot="menubar-label"
      data-inset={inset}
      className={cn("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", className)}
      {...props} />
  );
}

function MenubarSeparator({
  className,
  ...props
}) {
  return (
    <MenubarPrimitive.Separator
      data-slot="menubar-separator"
      className={cn("bg-border -mx-1 my-1 h-px", className)}
      {...props} />
  );
}

function MenubarShortcut({
  className,
  ...props
}) {
  return (
    <span
      data-slot="menubar-shortcut"
      className={cn("text-muted-foreground ml-auto text-xs tracking-widest", className)}
      {...props} />
  );
}

function MenubarSub({
  ...props
}) {
  return <MenubarPrimitive.Sub data-slot="menubar-sub" {...props} />;
}

function MenubarSubTrigger({
  className,
  inset,
  children,
  ...props
}) {
  return (
    <MenubarPrimitive.SubTrigger
      data-slot="menubar-sub-trigger"
      data-inset={inset}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none data-[inset]:pl-8",
        className
      )}
      {...props}>
      {children}
      <ChevronRightIcon className="ml-auto h-4 w-4" />
    </MenubarPrimitive.SubTrigger>
  );
}

function MenubarSubContent({
  className,
  ...props
}) {
  return (
    <MenubarPrimitive.SubContent
      data-slot="menubar-sub-content"
      className={cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        className
      )}
      {...props} />
  );
}

export {
  Menubar,
  MenubarPortal,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarGroup,
  MenubarSeparator,
  MenubarLabel,
  MenubarItem,
  MenubarShortcut,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
}
````

## File: src/components/ui/modal.jsx
````javascript
import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'



const Modal= ({
  children,
  title,
  description,
  isOpen,
  onClose,
  onSubmit,
  submitText = 'Submit',
  cancelText = 'Cancel',
  showFooter = true,
  submitVariant = "default",
  size,
  className = ''
}) => {
  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit()
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className={`${size} ${className}`}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && (
            <DialogDescription>
              {description}
            </DialogDescription>
          )}
        </DialogHeader>
        
        <div className="py-4">
          {children}
        </div>

        {showFooter && (
          <DialogFooter>
            <Button
              variant="outline"
              onClick={onClose}
            >
              {cancelText}
            </Button>
            {onSubmit && (
              <Button
                className='bg-primary text-primary-foreground hover:bg-primary/90'
                onClick={handleSubmit}
              >
                {submitText}
              </Button>
            )}
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  )
}

export default Modal
````

## File: src/components/ui/mode-toggle.jsx
````javascript
"use client"

import * as React from "react"
import { Moon, Sun, Sunrise, Sunset } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { setTheme , theme} = useTheme()

  return (
 <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
    {
        theme === "light" ? <Sunset className="size-5"/> : <Sunrise size={"size-5"} />
    }
 </Button>
  )
}
````

## File: src/components/ui/navigation-menu.jsx
````javascript
import * as React from "react"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { cva } from "class-variance-authority"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function NavigationMenu({
  className,
  children,
  viewport = true,
  ...props
}) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      data-viewport={viewport}
      className={cn(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        className
      )}
      {...props}>
      {children}
      {viewport && <NavigationMenuViewport />}
    </NavigationMenuPrimitive.Root>
  );
}

function NavigationMenuList({
  className,
  ...props
}) {
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={cn("group flex flex-1 list-none items-center justify-center gap-1", className)}
      {...props} />
  );
}

function NavigationMenuItem({
  className,
  ...props
}) {
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={cn("relative", className)}
      {...props} />
  );
}

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
)

function NavigationMenuTrigger({
  className,
  children,
  ...props
}) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(navigationMenuTriggerStyle(), "group", className)}
      {...props}>
      {children}{" "}
      <ChevronDownIcon
        className="relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180"
        aria-hidden="true" />
    </NavigationMenuPrimitive.Trigger>
  );
}

function NavigationMenuContent({
  className,
  ...props
}) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={cn(
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto",
        "group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
        className
      )}
      {...props} />
  );
}

function NavigationMenuViewport({
  className,
  ...props
}) {
  return (
    <div
      className={cn("absolute top-full left-0 isolate z-50 flex justify-center")}>
      <NavigationMenuPrimitive.Viewport
        data-slot="navigation-menu-viewport"
        className={cn(
          "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--radix-navigation-menu-viewport-width)]",
          className
        )}
        {...props} />
    </div>
  );
}

function NavigationMenuLink({
  className,
  ...props
}) {
  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      className={cn(
        "data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props} />
  );
}

function NavigationMenuIndicator({
  className,
  ...props
}) {
  return (
    <NavigationMenuPrimitive.Indicator
      data-slot="navigation-menu-indicator"
      className={cn(
        "data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden",
        className
      )}
      {...props}>
      <div
        className="bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md" />
    </NavigationMenuPrimitive.Indicator>
  );
}

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
}
````

## File: src/components/ui/pagination.jsx
````javascript
import * as React from "react"
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button";

function Pagination({
  className,
  ...props
}) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props} />
  );
}

function PaginationContent({
  className,
  ...props
}) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn("flex flex-row items-center gap-1", className)}
      {...props} />
  );
}

function PaginationItem({
  ...props
}) {
  return <li data-slot="pagination-item" {...props} />;
}

function PaginationLink({
  className,
  isActive,
  size = "icon",
  ...props
}) {
  return (
    <a
      aria-current={isActive ? "page" : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      className={cn(buttonVariants({
        variant: isActive ? "outline" : "ghost",
        size,
      }), className)}
      {...props} />
  );
}

function PaginationPrevious({
  className,
  ...props
}) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size="default"
      className={cn("gap-1 px-2.5 sm:pl-2.5", className)}
      {...props}>
      <ChevronLeftIcon />
      <span className="hidden sm:block">Previous</span>
    </PaginationLink>
  );
}

function PaginationNext({
  className,
  ...props
}) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      size="default"
      className={cn("gap-1 px-2.5 sm:pr-2.5", className)}
      {...props}>
      <span className="hidden sm:block">Next</span>
      <ChevronRightIcon />
    </PaginationLink>
  );
}

function PaginationEllipsis({
  className,
  ...props
}) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}>
      <MoreHorizontalIcon className="size-4" />
      <span className="sr-only">More pages</span>
    </span>
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
}
````

## File: src/components/ui/popover.jsx
````javascript
"use client"

import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"

import { cn } from "@/lib/utils"

function Popover({
  ...props
}) {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />;
}

function PopoverTrigger({
  ...props
}) {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />;
}

function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
          className
        )}
        {...props} />
    </PopoverPrimitive.Portal>
  );
}

function PopoverAnchor({
  ...props
}) {
  return <PopoverPrimitive.Anchor data-slot="popover-anchor" {...props} />;
}

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor }
````

## File: src/components/ui/progress.jsx
````javascript
"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

function Progress({
  className,
  value,
  ...props
}) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
        className
      )}
      {...props}>
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="bg-primary h-full w-full flex-1 transition-all"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }} />
    </ProgressPrimitive.Root>
  );
}

export { Progress }
````

## File: src/components/ui/radio-group.jsx
````javascript
"use client"

import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { CircleIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function RadioGroup({
  className,
  ...props
}) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("grid gap-3", className)}
      {...props} />
  );
}

function RadioGroupItem({
  className,
  ...props
}) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}>
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="relative flex items-center justify-center">
        <CircleIcon
          className="fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
}

export { RadioGroup, RadioGroupItem }
````

## File: src/components/ui/resizable.jsx
````javascript
"use client"

import * as React from "react"
import { GripVerticalIcon } from "lucide-react"
import * as ResizablePrimitive from "react-resizable-panels"

import { cn } from "@/lib/utils"

function ResizablePanelGroup({
  className,
  ...props
}) {
  return (
    <ResizablePrimitive.PanelGroup
      data-slot="resizable-panel-group"
      className={cn(
        "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
        className
      )}
      {...props} />
  );
}

function ResizablePanel({
  ...props
}) {
  return <ResizablePrimitive.Panel data-slot="resizable-panel" {...props} />;
}

function ResizableHandle({
  withHandle,
  className,
  ...props
}) {
  return (
    <ResizablePrimitive.PanelResizeHandle
      data-slot="resizable-handle"
      className={cn(
        "bg-border focus-visible:ring-ring relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:translate-x-0 data-[panel-group-direction=vertical]:after:-translate-y-1/2 [&[data-panel-group-direction=vertical]>div]:rotate-90",
        className
      )}
      {...props}>
      {withHandle && (
        <div
          className="bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border">
          <GripVerticalIcon className="size-2.5" />
        </div>
      )}
    </ResizablePrimitive.PanelResizeHandle>
  );
}

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
````

## File: src/components/ui/scroll-area.jsx
````javascript
"use client"

import * as React from "react"
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"

import { cn } from "@/lib/utils"

function ScrollArea({
  className,
  children,
  ...props
}) {
  return (
    <ScrollAreaPrimitive.Root data-slot="scroll-area" className={cn("relative", className)} {...props}>
      <ScrollAreaPrimitive.Viewport
        data-slot="scroll-area-viewport"
        className="focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1">
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  );
}

function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}) {
  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      className={cn(
        "flex touch-none p-px transition-colors select-none",
        orientation === "vertical" &&
          "h-full w-2.5 border-l border-l-transparent",
        orientation === "horizontal" &&
          "h-2.5 flex-col border-t border-t-transparent",
        className
      )}
      {...props}>
      <ScrollAreaPrimitive.ScrollAreaThumb
        data-slot="scroll-area-thumb"
        className="bg-border relative flex-1 rounded-full" />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  );
}

export { ScrollArea, ScrollBar }
````

## File: src/components/ui/select.jsx
````javascript
"use client"

import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Select({
  ...props
}) {
  return <SelectPrimitive.Root data-slot="select" {...props} />;
}

function SelectGroup({
  ...props
}) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />;
}

function SelectValue({
  ...props
}) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />;
}

function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}>
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="size-4 opacity-50" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
}

function SelectContent({
  className,
  children,
  position = "popper",
  align = "center",
  ...props
}) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
          position === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          className
        )}
        position={position}
        align={align}
        {...props}>
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn("p-1", position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1")}>
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
}

function SelectLabel({
  className,
  ...props
}) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn("text-muted-foreground px-2 py-1.5 text-xs", className)}
      {...props} />
  );
}

function SelectItem({
  className,
  children,
  ...props
}) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      )}
      {...props}>
      <span className="absolute right-2 flex size-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
}

function SelectSeparator({
  className,
  ...props
}) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn("bg-border pointer-events-none -mx-1 my-1 h-px", className)}
      {...props} />
  );
}

function SelectScrollUpButton({
  className,
  ...props
}) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn("flex cursor-default items-center justify-center py-1", className)}
      {...props}>
      <ChevronUpIcon className="size-4" />
    </SelectPrimitive.ScrollUpButton>
  );
}

function SelectScrollDownButton({
  className,
  ...props
}) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn("flex cursor-default items-center justify-center py-1", className)}
      {...props}>
      <ChevronDownIcon className="size-4" />
    </SelectPrimitive.ScrollDownButton>
  );
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}
````

## File: src/components/ui/separator.jsx
````javascript
"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      )}
      {...props} />
  );
}

export { Separator }
````

## File: src/components/ui/sheet.jsx
````javascript
"use client"

import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { XIcon } from "lucide-react"

import { cn } from "@/lib/utils"

function Sheet({
  ...props
}) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />;
}

function SheetTrigger({
  ...props
}) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />;
}

function SheetClose({
  ...props
}) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />;
}

function SheetPortal({
  ...props
}) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />;
}

function SheetOverlay({
  className,
  ...props
}) {
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props} />
  );
}

function SheetContent({
  className,
  children,
  side = "right",
  ...props
}) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          side === "right" &&
            "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          side === "left" &&
            "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          side === "top" &&
            "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          side === "bottom" &&
            "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
          className
        )}
        {...props}>
        {children}
        <SheetPrimitive.Close
          className="ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none">
          <XIcon className="size-4" />
          <span className="sr-only">Close</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPortal>
  );
}

function SheetHeader({
  className,
  ...props
}) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("flex flex-col gap-1.5 p-4", className)}
      {...props} />
  );
}

function SheetFooter({
  className,
  ...props
}) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props} />
  );
}

function SheetTitle({
  className,
  ...props
}) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn("text-foreground font-semibold", className)}
      {...props} />
  );
}

function SheetDescription({
  className,
  ...props
}) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props} />
  );
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
````

## File: src/components/ui/sidebar.jsx
````javascript
"use client";
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";
import { PanelLeftIcon } from "lucide-react"

import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const SIDEBAR_COOKIE_NAME = "sidebar_state"
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
const SIDEBAR_WIDTH = "16rem"
const SIDEBAR_WIDTH_MOBILE = "18rem"
const SIDEBAR_WIDTH_ICON = "3rem"
const SIDEBAR_KEYBOARD_SHORTCUT = "b"

const SidebarContext = React.createContext(null)

function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.")
  }

  return context
}

function SidebarProvider({
  defaultOpen = true,
  open: openProp,
  onOpenChange: setOpenProp,
  className,
  style,
  children,
  ...props
}) {
  const isMobile = useIsMobile()
  const [openMobile, setOpenMobile] = React.useState(false)

  // This is the internal state of the sidebar.
  // We use openProp and setOpenProp for control from outside the component.
  const [_open, _setOpen] = React.useState(defaultOpen)
  const open = openProp ?? _open
  const setOpen = React.useCallback((value) => {
    const openState = typeof value === "function" ? value(open) : value
    if (setOpenProp) {
      setOpenProp(openState)
    } else {
      _setOpen(openState)
    }

    // This sets the cookie to keep the sidebar state.
    document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
  }, [setOpenProp, open])

  // Helper to toggle the sidebar.
  const toggleSidebar = React.useCallback(() => {
    return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open);
  }, [isMobile, setOpen, setOpenMobile])

  // Adds a keyboard shortcut to toggle the sidebar.
  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (
        event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
        (event.metaKey || event.ctrlKey)
      ) {
        event.preventDefault()
        toggleSidebar()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleSidebar])

  // We add a state so that we can do data-state="expanded" or "collapsed".
  // This makes it easier to style the sidebar with Tailwind classes.
  const state = open ? "expanded" : "collapsed"

  const contextValue = React.useMemo(() => ({
    state,
    open,
    setOpen,
    isMobile,
    openMobile,
    setOpenMobile,
    toggleSidebar,
  }), [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar])

  return (
    <SidebarContext.Provider value={contextValue}>
      <TooltipProvider delayDuration={0}>
        <div
          data-slot="sidebar-wrapper"
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH,
              "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
              ...style
            }
          }
          className={cn(
            "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full",
            className
          )}
          {...props}>
          {children}
        </div>
      </TooltipProvider>
    </SidebarContext.Provider>
  );
}

function Sidebar({
  side = "left",
  variant = "sidebar",
  collapsible = "offcanvas",
  className,
  children,
  ...props
}) {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar()

  if (collapsible === "none") {
    return (
      <div
        data-slot="sidebar"
        className={cn(
          "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
          className
        )}
        {...props}>
        {children}
      </div>
    );
  }

  if (isMobile) {
    return (
      <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
        <SheetContent
          data-sidebar="sidebar"
          data-slot="sidebar"
          data-mobile="true"
          className="bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden"
          style={
            {
              "--sidebar-width": SIDEBAR_WIDTH_MOBILE
            }
          }
          side={side}>
          <SheetHeader className="sr-only">
            <SheetTitle>Sidebar</SheetTitle>
            <SheetDescription>Displays the mobile sidebar.</SheetDescription>
          </SheetHeader>
          <div className="flex h-full w-full flex-col">{children}</div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <div
      className="group peer text-sidebar-foreground hidden md:block"
      data-state={state}
      data-collapsible={state === "collapsed" ? collapsible : ""}
      data-variant={variant}
      data-side={side}
      data-slot="sidebar">
      {/* This is what handles the sidebar gap on desktop */}
      <div
        data-slot="sidebar-gap"
        className={cn(
          "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
          "group-data-[collapsible=offcanvas]:w-0",
          "group-data-[side=right]:rotate-180",
          variant === "floating" || variant === "inset"
            ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]"
            : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
        )} />
      <div
        data-slot="sidebar-container"
        className={cn(
          "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
          side === "left"
            ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
            : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          variant === "floating" || variant === "inset"
            ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]"
            : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
          className
        )}
        {...props}>
        <div
          data-sidebar="sidebar"
          data-slot="sidebar-inner"
          className="bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm">
          {children}
        </div>
      </div>
    </div>
  );
}

function SidebarTrigger({
  className,
  onClick,
  ...props
}) {
  const { toggleSidebar } = useSidebar()

  return (
    <Button
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      variant="ghost"
      size="icon"
      className={cn("size-7", className)}
      onClick={(event) => {
        onClick?.(event)
        toggleSidebar()
      }}
      {...props}>
      <PanelLeftIcon />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
}

function SidebarRail({
  className,
  ...props
}) {
  const { toggleSidebar } = useSidebar()

  return (
    <button
      data-sidebar="rail"
      data-slot="sidebar-rail"
      aria-label="Toggle Sidebar"
      tabIndex={-1}
      onClick={toggleSidebar}
      title="Toggle Sidebar"
      className={cn(
        "hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] sm:flex",
        "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        className
      )}
      {...props} />
  );
}

function SidebarInset({
  className,
  ...props
}) {
  return (
    <main
      data-slot="sidebar-inset"
      className={cn(
        "bg-background relative flex w-full flex-1 flex-col",
        "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2",
        className
      )}
      {...props} />
  );
}

function SidebarInput({
  className,
  ...props
}) {
  return (
    <Input
      data-slot="sidebar-input"
      data-sidebar="input"
      className={cn("bg-background h-8 w-full shadow-none", className)}
      {...props} />
  );
}

function SidebarHeader({
  className,
  ...props
}) {
  return (
    <div
      data-slot="sidebar-header"
      data-sidebar="header"
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props} />
  );
}

function SidebarFooter({
  className,
  ...props
}) {
  return (
    <div
      data-slot="sidebar-footer"
      data-sidebar="footer"
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props} />
  );
}

function SidebarSeparator({
  className,
  ...props
}) {
  return (
    <Separator
      data-slot="sidebar-separator"
      data-sidebar="separator"
      className={cn("bg-sidebar-border mx-2 w-auto", className)}
      {...props} />
  );
}

function SidebarContent({
  className,
  ...props
}) {
  return (
    <div
      data-slot="sidebar-content"
      data-sidebar="content"
      className={cn(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        className
      )}
      {...props} />
  );
}

function SidebarGroup({
  className,
  ...props
}) {
  return (
    <div
      data-slot="sidebar-group"
      data-sidebar="group"
      className={cn("relative flex w-full min-w-0 flex-col p-2", className)}
      {...props} />
  );
}

function SidebarGroupLabel({
  className,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "div"

  return (
    <Comp
      data-slot="sidebar-group-label"
      data-sidebar="group-label"
      className={cn(
        "text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        className
      )}
      {...props} />
  );
}

function SidebarGroupAction({
  className,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="sidebar-group-action"
      data-sidebar="group-action"
      className={cn(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props} />
  );
}

function SidebarGroupContent({
  className,
  ...props
}) {
  return (
    <div
      data-slot="sidebar-group-content"
      data-sidebar="group-content"
      className={cn("w-full text-sm", className)}
      {...props} />
  );
}

function SidebarMenu({
  className,
  ...props
}) {
  return (
    <ul
      data-slot="sidebar-menu"
      data-sidebar="menu"
      className={cn("flex w-full min-w-0 flex-col gap-1", className)}
      {...props} />
  );
}

function SidebarMenuItem({
  className,
  ...props
}) {
  return (
    <li
      data-slot="sidebar-menu-item"
      data-sidebar="menu-item"
      className={cn("group/menu-item relative", className)}
      {...props} />
  );
}

const sidebarMenuButtonVariants = cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline:
          "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function SidebarMenuButton({
  asChild = false,
  isActive = false,
  variant = "default",
  size = "default",
  tooltip,
  className,
  ...props
}) {
  const Comp = asChild ? Slot : "button"
  const { isMobile, state } = useSidebar()

  const button = (
    <Comp
      data-slot="sidebar-menu-button"
      data-sidebar="menu-button"
      data-size={size}
      data-active={isActive}
      className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
      {...props} />
  )

  if (!tooltip) {
    return button
  }

  if (typeof tooltip === "string") {
    tooltip = {
      children: tooltip,
    }
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent
        side="right"
        align="center"
        hidden={state !== "collapsed" || isMobile}
        {...tooltip} />
    </Tooltip>
  );
}

function SidebarMenuAction({
  className,
  asChild = false,
  showOnHover = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="sidebar-menu-action"
      data-sidebar="menu-action"
      className={cn(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        showOnHover &&
          "peer-data-[active=true]/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0",
        className
      )}
      {...props} />
  );
}

function SidebarMenuBadge({
  className,
  ...props
}) {
  return (
    <div
      data-slot="sidebar-menu-badge"
      data-sidebar="menu-badge"
      className={cn(
        "text-sidebar-foreground pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums select-none",
        "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props} />
  );
}

function SidebarMenuSkeleton({
  className,
  showIcon = false,
  ...props
}) {
  // Random width between 50 to 90%.
  const width = React.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`;
  }, [])

  return (
    <div
      data-slot="sidebar-menu-skeleton"
      data-sidebar="menu-skeleton"
      className={cn("flex h-8 items-center gap-2 rounded-md px-2", className)}
      {...props}>
      {showIcon && (
        <Skeleton className="size-4 rounded-md" data-sidebar="menu-skeleton-icon" />
      )}
      <Skeleton
        className="h-4 max-w-(--skeleton-width) flex-1"
        data-sidebar="menu-skeleton-text"
        style={
          {
            "--skeleton-width": width
          }
        } />
    </div>
  );
}

function SidebarMenuSub({
  className,
  ...props
}) {
  return (
    <ul
      data-slot="sidebar-menu-sub"
      data-sidebar="menu-sub"
      className={cn(
        "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props} />
  );
}

function SidebarMenuSubItem({
  className,
  ...props
}) {
  return (
    <li
      data-slot="sidebar-menu-sub-item"
      data-sidebar="menu-sub-item"
      className={cn("group/menu-sub-item relative", className)}
      {...props} />
  );
}

function SidebarMenuSubButton({
  asChild = false,
  size = "md",
  isActive = false,
  className,
  ...props
}) {
  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      data-slot="sidebar-menu-sub-button"
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={cn(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props} />
  );
}

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
}
````

## File: src/components/ui/skeleton.jsx
````javascript
import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-accent animate-pulse rounded-md", className)}
      {...props} />
  );
}

export { Skeleton }
````

## File: src/components/ui/slider.jsx
````javascript
"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}) {
  const _values = React.useMemo(() =>
    Array.isArray(value)
      ? value
      : Array.isArray(defaultValue)
        ? defaultValue
        : [min, max], [value, defaultValue, min, max])

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cn(
        "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        className
      )}
      {...props}>
      <SliderPrimitive.Track
        data-slot="slider-track"
        className={cn(
          "bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
        )}>
        <SliderPrimitive.Range
          data-slot="slider-range"
          className={cn(
            "bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
          )} />
      </SliderPrimitive.Track>
      {Array.from({ length: _values.length }, (_, index) => (
        <SliderPrimitive.Thumb
          data-slot="slider-thumb"
          key={index}
          className="border-primary ring-ring/50 block size-4 shrink-0 rounded-full border bg-white shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50" />
      ))}
    </SliderPrimitive.Root>
  );
}

export { Slider }
````

## File: src/components/ui/sonner.jsx
````javascript
"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner";

const Toaster = ({
  ...props
}) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme}
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)"
        }
      }
      {...props} />
  );
}

export { Toaster }
````

## File: src/components/ui/spinner.jsx
````javascript
import { Loader2Icon } from "lucide-react"

import { cn } from "@/lib/utils"

function Spinner({
  className,
  ...props
}) {
  return (
    <Loader2Icon
      role="status"
      aria-label="Loading"
      className={cn("size-4 animate-spin", className)}
      {...props} />
  );
}

export { Spinner }
````

## File: src/components/ui/switch.jsx
````javascript
"use client"

import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

function Switch({
  className,
  ...props
}) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}>
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
        )} />
    </SwitchPrimitive.Root>
  );
}

export { Switch }
````

## File: src/components/ui/table.jsx
````javascript
"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

function Table({
  className,
  ...props
}) {
  return (
    <div data-slot="table-container" className="relative w-full overflow-x-auto">
      <table
        data-slot="table"
        className={cn("w-full caption-bottom text-sm", className)}
        {...props} />
    </div>
  );
}

function TableHeader({
  className,
  ...props
}) {
  return (
    <thead
      data-slot="table-header"
      className={cn("[&_tr]:border-b", className)}
      {...props} />
  );
}

function TableBody({
  className,
  ...props
}) {
  return (
    <tbody
      data-slot="table-body"
      className={cn("[&_tr:last-child]:border-0", className)}
      {...props} />
  );
}

function TableFooter({
  className,
  ...props
}) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0", className)}
      {...props} />
  );
}

function TableRow({
  className,
  ...props
}) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
        className
      )}
      {...props} />
  );
}

function TableHead({
  className,
  ...props
}) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...props} />
  );
}

function TableCell({
  className,
  ...props
}) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...props} />
  );
}

function TableCaption({
  className,
  ...props
}) {
  return (
    <caption
      data-slot="table-caption"
      className={cn("text-muted-foreground mt-4 text-sm", className)}
      {...props} />
  );
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}
````

## File: src/components/ui/tabs.jsx
````javascript
"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

function Tabs({
  className,
  ...props
}) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props} />
  );
}

function TabsList({
  className,
  ...props
}) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
        className
      )}
      {...props} />
  );
}

function TabsTrigger({
  className,
  ...props
}) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props} />
  );
}

function TabsContent({
  className,
  ...props
}) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props} />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
````

## File: src/components/ui/textarea.jsx
````javascript
import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({
  className,
  ...props
}) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      {...props} />
  );
}

export { Textarea }
````

## File: src/components/ui/toggle-group.jsx
````javascript
"use client";
import * as React from "react"
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group"

import { cn } from "@/lib/utils"
import { toggleVariants } from "@/components/ui/toggle"

const ToggleGroupContext = React.createContext({
  size: "default",
  variant: "default",
})

function ToggleGroup({
  className,
  variant,
  size,
  children,
  ...props
}) {
  return (
    <ToggleGroupPrimitive.Root
      data-slot="toggle-group"
      data-variant={variant}
      data-size={size}
      className={cn(
        "group/toggle-group flex w-fit items-center rounded-md data-[variant=outline]:shadow-xs",
        className
      )}
      {...props}>
      <ToggleGroupContext.Provider value={{ variant, size }}>
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  );
}

function ToggleGroupItem({
  className,
  children,
  variant,
  size,
  ...props
}) {
  const context = React.useContext(ToggleGroupContext)

  return (
    <ToggleGroupPrimitive.Item
      data-slot="toggle-group-item"
      data-variant={context.variant || variant}
      data-size={context.size || size}
      className={cn(toggleVariants({
        variant: context.variant || variant,
        size: context.size || size,
      }), "min-w-0 flex-1 shrink-0 rounded-none shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l", className)}
      {...props}>
      {children}
    </ToggleGroupPrimitive.Item>
  );
}

export { ToggleGroup, ToggleGroupItem }
````

## File: src/components/ui/toggle.jsx
````javascript
"use client"

import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium hover:bg-muted hover:text-muted-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none transition-[color,box-shadow] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive whitespace-nowrap",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-9 px-2 min-w-9",
        sm: "h-8 px-1.5 min-w-8",
        lg: "h-10 px-2.5 min-w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Toggle({
  className,
  variant,
  size,
  ...props
}) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props} />
  );
}

export { Toggle, toggleVariants }
````

## File: src/components/ui/tooltip.jsx
````javascript
"use client"

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import { cn } from "@/lib/utils"

function TooltipProvider({
  delayDuration = 0,
  ...props
}) {
  return (<TooltipPrimitive.Provider data-slot="tooltip-provider" delayDuration={delayDuration} {...props} />);
}

function Tooltip({
  ...props
}) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  );
}

function TooltipTrigger({
  ...props
}) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
}

function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
          className
        )}
        {...props}>
        {children}
        <TooltipPrimitive.Arrow
          className="bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
````

## File: src/hooks/use-mobile.js
````javascript
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener("change", onChange);
  }, [])

  return !!isMobile
}
````

## File: src/lib/auth-client.js
````javascript
import { createAuthClient } from "better-auth/react"
export const {signIn , signUp , useSession , signOut} = createAuthClient({
    baseURL: "http://localhost:3000"
})
````

## File: src/lib/auth.js
````javascript
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import db from "./db";

export const auth = betterAuth({
    database: prismaAdapter(db, {
        provider: "postgresql", 
    }),
    socialProviders: { 
    github: { 
      clientId: process.env.GITHUB_CLIENT_ID, 
      clientSecret: process.env.GITHUB_CLIENT_SECRET, 
    }, 
  }, 
});
````

## File: src/lib/db.js
````javascript
import { PrismaClient } from '@prisma/client'


const db = globalThis.prisma || new PrismaClient({
  log: ['query', 'info', 'warn', 'error'], 
})

if (process.env.NODE_ENV === 'development') {
  globalThis.prisma = db
}

export default db
````

## File: src/lib/prompt.js
````javascript
export const CHAT_SYSTEM_PROMPT = `
ROLE & IDENTITY:  
You are T3Chat, an advanced conversational AI built to simulate natural, intelligent, and context-aware interactions. Your purpose is to assist developers, creators, and general users by providing accurate information, structured explanations, and helpful guidance across technical and non-technical topics. Maintain a professional yet friendly tone, mirroring the helpful and minimalistic conversational style of T3.chat.

1. CORE OBJECTIVES  
- Deliver concise, factual, and contextually relevant answers.  
- Adapt communication tone to the user’s personality and conversation style.  
- Retain context across turns to ensure coherence and continuity.  
- Produce actionable outputs for developer-related requests such as coding, debugging, architectural reasoning, or API design.  
- Respond respectfully, maintaining trust, clarity, and neutrality.

2. STYLE & TONE GUIDELINES  
- Style: Clean, precise, and context-adaptive. Avoid fluff or overexplaining unless the user requests depth.  
- Tone: Neutral, helpful, and humanlike. Slightly conversational but never overly casual.  
- Response format: Short direct answer first (1–2 lines), then a structured or formatted breakdown if needed.  
- Use Markdown for clarity (code blocks, tables, headers, emphasis).  
- When explaining code, summarize intent clearly before the snippet.  
- If unsure, state uncertainty and offer best-reasoned suggestions or next steps.

3. FUNCTIONAL CAPABILITIES  
T3Chat should be able to:  
- Write, explain, debug, and optimize code in TypeScript, JavaScript, Python, Next.js, React, Node.js, SQL, MongoDB, and more.  
- Provide architecture reasoning for apps, SDKs, or systems (real-time, AI, chat, API-first designs).  
- Generate or explain technical content like documentation, design decisions, feature specs, or changelogs.  
- Compose productivity content such as blog outlines, video scripts, microcopy, and marketing material.  
- Answer general knowledge and reasoning questions with reliable synthesis.  
- Adhere to ethical, factual, and safety constraints.

4. CONTENT AND SAFETY RULES  
- Never produce or reproduce copyrighted, NSFW, or confidential material.  
- Avoid harmful, discriminatory, or biased language.  
- Politely refuse any illegal or unethical requests.  
- When user requests restricted content (like song lyrics, private data, or exam answers), explain the restriction and offer an alternative.

5. CONVERSATION MANAGEMENT RULES  
- Preserve context: Remember facts shared in the session for coherent follow-up.  
- Clarify unclear queries: If input lacks context, ask brief clarifying questions.  
- Prioritize reasoning: Before generating creative or technical output, reason internally about correctness and alignment.  
- Error recovery: If user corrects you, acknowledge and adapt immediately.  
- User focus: Always keep the conversation in service of the user’s goal.

6. CODING BEHAVIOR STANDARDS  
- Include complete, minimal, and runnable examples whenever feasible.  
- Always wrap code in properly formatted code blocks.  
- Explain key parts of code after presenting it, not before.  
- Use idiomatic, framework-consistent patterns (React hooks, async/await, TypeScript types).  
- For multi-step tasks (API routes, backend setup, etc.), format responses into clearly titled sections — Input, Process, Example, Output.

7. SYSTEM REASONING PRIORITIES  
When generating an answer, follow this flow:  
1. Understand the user intent and level (developer, learner, general user).  
2. Plan the best structure for output (list, explanation, code, reasoning).  
3. Validate correctness logically.  
4. Generate concise, structured, and accurate text.  
5. Review tone and formatting to match T3Chat’s communication standard.

8. INTERACTION EXAMPLES  
Example 1 — Coding Query  
User: “Show me how to add authentication in Next.js with NextAuth.”  
T3Chat: Gives a 1-line summary, shows stepwise code setup, explains config/flow, and suggests expansion like middleware or role logic.

Example 2 — Design/Architecture Query  
User: “How can I structure a real-time quiz app for 2k users?”  
T3Chat: Brief overview of architecture, sections like Backend (Pub/Sub + WebSocket) and Frontend (React Hooks + State Sync), with scaling and deployment notes.

9. PERSONALITY & BEHAVIOR  
- Act like a developer’s assistant with reasoning clarity, not just a text generator.  
- Be solution-driven, not keyword-driven.  
- Avoid unnecessary repetition or verbose wording.  
- Use humor or casual tone lightly when context allows.  
- Stay consistent in formatting across sessions.

10. META-BEHAVIOR AND ADAPTATION RULES  
- Automatically adapt depth (surface-level or expert-level) based on user intent.  
- If user teaches or shows you an example, incorporate it in later outputs.  
- When user provides preferences (style, format, tone), lock them in across session.  
- When user wants a clone or simulation (e.g., t3.chat clone), generate realistic architectural breakdowns with technical specificity.`
````

## File: src/lib/utils.js
````javascript
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
````

## File: src/modules/ai-agent/hook/ai-agent.js
````javascript
import {useQuery} from '@tanstack/react-query'



export const useAIModels = () => {
    return useQuery({
        queryKey: ['ai-models'],
        queryFn: () => fetch('/api/ai/get-models').then(res => res.json()),
    })
}
````

## File: src/modules/authentication/actions/index.js
````javascript
"use server";
import db from "@/lib/db";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const currentUser = async () => {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user?.id) {
      return null;
    }

    const user = await db.user.findUnique({
      where: {
        id: session.user.id,
      },
      select: {
        id: true,
        email: true,
        name: true,
        image: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return user;
  } catch (error) {
    console.error("Error fetching current user:", error);
    return null;
  }
};
````

## File: src/modules/authentication/components/user-button.jsx
````javascript
"use client";

import { useState } from "react";
import { User, LogOut, Settings, CreditCard, User as UserIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";




export default function UserButton({
  user,
  onLogout,
  onSettings,
  onProfile,
  onBilling,
  showBadge = false,
  badgeText = "Pro",
  badgeVariant = "default",
  size = "md",
  showEmail = true,
  showMemberSince = true,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

   const onSignOut = async()=>{
    await signOut({
      fetchOptions:{
        onSuccess:()=>{
          router.push("/sign-in")
        }
      }
    })
  }

  const handleLogout = async () => {
  
      setIsLoading(true);
      try {
        await onSignOut();
      } catch (error) {
        console.error("Logout error:", error);
      } finally {
        setIsLoading(false);
      }
    
  };

  // Get user initials for avatar fallback
  const getUserInitials = (name, email) => {
    if (name) {
      return name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);
    }
    if (email) {
      return email.slice(0, 2).toUpperCase();
    }
    return "U";
  };

  // Format member since date
  const formatMemberSince = (date) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      year: "numeric",
    }).format(new Date(date));
  };

  // Avatar sizes
  const avatarSizes = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
  };

  // Don't render if no user
  if (!user) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className={`relative ${avatarSizes[size]} rounded-full p-0 hover:bg-accent`}
          disabled={isLoading}
        >
          <Avatar className={avatarSizes[size]}>
            <AvatarImage
              src={user.image || ""}
              alt={user.name || "User avatar"}
            />
            <AvatarFallback className="bg-primary text-primary-foreground font-medium">
              {getUserInitials(user.name, user.email)}
            </AvatarFallback>
          </Avatar>
          {showBadge && (
            <Badge
              variant={badgeVariant}
              className="absolute -bottom-1 -right-1 h-5 px-1 text-xs"
            >
              {badgeText}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent className="w-64" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-3">
              <Avatar className="h-12 w-12">
                <AvatarImage
                  src={user.image || ""}
                  alt={user.name || "User avatar"}
                />
                <AvatarFallback className="bg-primary text-primary-foreground font-medium text-lg">
                  {getUserInitials(user.name, user.email)}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">
                  {user.name || "User"}
                </p>
                {showEmail && user.email && (
                  <p className="text-xs leading-none text-muted-foreground">
                    {user.email}
                  </p>
                )}
                {showBadge && (
                  <Badge variant={badgeVariant} className="w-fit">
                    {badgeText}
                  </Badge>
                )}
              </div>
            </div>
            {showMemberSince && (
              <p className="text-xs text-muted-foreground">
                Member since {formatMemberSince(user.createdAt)}
              </p>
            )}
          </div>
        </DropdownMenuLabel>
        
        <DropdownMenuSeparator />
        
        {onProfile && (
          <DropdownMenuItem onClick={onProfile} className="cursor-pointer">
            <UserIcon className="mr-2 h-4 w-4" />
            Profile
          </DropdownMenuItem>
        )}
        
        {onBilling && (
          <DropdownMenuItem onClick={onBilling} className="cursor-pointer">
            <CreditCard className="mr-2 h-4 w-4" />
            Billing
          </DropdownMenuItem>
        )}
        
        {onSettings && (
          <DropdownMenuItem onClick={onSettings} className="cursor-pointer">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </DropdownMenuItem>
        )}
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem
          onClick={handleLogout}
          disabled={isLoading}
          className="cursor-pointer text-destructive focus:text-destructive"
        >
          <LogOut className="mr-2 h-4 w-4" />
          {isLoading ? "Logging out..." : "Log out"}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
````

## File: src/modules/chat/actions/index.js
````javascript
"use server";


import db from "@/lib/db";
import { currentUser } from "@/modules/authentication/actions";
import { MessageRole, MessageType } from "@prisma/client";
import { revalidatePath } from "next/cache";


export const createMessageInChat = async (values , chatId) => {

    const user = await currentUser();

    if (!user) {
      return {
        success: false,
        message: "Unauthorized user"
      };
    }

    const { content, model } = values;

    if (!content || content.trim() === "") {
      return {
        success: false,
        message: "Message content is required"
      };
    }

    const userMessage = await db.message.create({
      data: {
        model,
        content,
        messageRole: MessageRole.USER,
        messageType: MessageType.NORMAL,
        chatId
      }
    });

       // Trigger Your AI here
   const res = await fetch("http://localhost:3000/api/chat" , {
      method: "POST",
      body: JSON.stringify({
        chatId: chatId,
        model: model,
        content: content
      })
    })

    const { text } = await res.json();

 

      const Assistantmessage = await db.message.create({
    data: {
      model,
      chatId: chatId,
      content: text,
      messageRole: MessageRole.ASSISTANT,
      messageType: MessageType.NORMAL,
    },
  });

  
  revalidatePath(`/chat/${chatId}`);
    return {
      success: true,
      message: "Chat created successfully",
      data: {
        userMessage,
        Assistantmessage
      }
    };   
}

export const createChatWithMessage = async (values) => {
  try {
    const user = await currentUser();
    if (!user) return { success: false, message: "Unauthorized user" };

    const { content, model } = values;
    if (!content || !content.trim()) {
      return { success: false, message: "Message content is required" };
    }

    const title = content.slice(0, 50) + (content.length > 50 ? "..." : "");

    // Create chat WITH initial user message
    const chat = await db.chat.create({
      data: {
        title,
        model,
        userId: user.id,
        messages: {
          create: {
            content,
            messageRole: MessageRole.USER,
            messageType: MessageType.NORMAL,
            model,
          },
        },
      },
      include: { messages: true }, // Include messages in response
    });

    revalidatePath("/");
    return { success: true, message: "Chat created successfully", data: chat };
  } catch (error) {
    console.error("Error creating chat:", error);
    return { success: false, message: "Failed to create chat" };
  }
};

export const getAllChats = async () => {
  try {
    const user = await currentUser();

    if (!user) {
      return {
        success: false,
        message: "Unauthorized user"
      };
    }

    const chats = await db.chat.findMany({
      where: {
        userId: user.id
      },
      include: {
        messages: true
      },
      orderBy:{
        createdAt: "desc"
      }
    });

    // revalidatePath("/");
    return {
      success: true,
      message: "Chats fetched successfully",
      data: chats
    };  
    } catch (error) {
      console.error("Error fetching chats:", error);
      return {
        success: false,
        message: "Failed to fetch chats"
      };
    }

};

export const getChatById = async (chatId) => {

    const user = await currentUser();

    if (!user) {
      return {
        success: false,
        message: "Unauthorized user"
      };
    }

  try {
    const chat = await db.chat.findUnique({
      where: {
        id: chatId,
        userId: user.id
      },
      include: {
        messages: true
      }
    });

    console.log(JSON.stringify(chat , null, 2));
    return {
      success: true,
      message: "Chat fetched successfully",
      data: chat
    };  
    } catch (error) {
      console.error("Error fetching chat:", error);
      return {
        success: false,
        message: "Failed to fetch chat"
      };
    }

};


export const deleteChat = async(chatId) => {
  try {
    const user = await currentUser();

    if (!user) {
      return {
        success: false,
        message: "Unauthorized user"
      };
    }

    const chat = await db.chat.findUnique({
      where: {
        id: chatId,
        userId: user.id
      }
    });

    if (!chat) {
      return {
        success: false,
        message: "Chat not found"
      };
    }

    await db.chat.delete({
      where: {
        id: chatId
      }
    });
    revalidatePath(`/chat/${chatId}`);
    return {
      success: true,
      message: "Chat deleted successfully"
    };
  } catch (error) {
    console.error("Error deleting chat:", error);
    return {
      success: false,
      message: "Failed to delete chat"
    };
  }   

};
````

## File: src/modules/chat/components/active-chat-loader.jsx
````javascript
"use client";

import React, { useEffect } from "react";
import { useGetChatById } from "@/modules/chat/hooks/chat";
import { useChatStore } from "@/modules/chat/store/chat-store";

export default function ActiveChatLoader({ chatId }) {
  const { setActiveChatId, setMessages, addChat, chats } = useChatStore();

  const { data, isLoading, isError } = useGetChatById(chatId);

 
  useEffect(() => {
    if (!chatId) return;
    setActiveChatId(chatId);
  }, [chatId, setActiveChatId]);

  
  useEffect(() => {
    if (!data || !data.success || !data.data) return;

    const chat = data.data;

    // populate messages
    setMessages(chat.messages || []);

    if (!chats?.some((c) => c.id === chat.id)) {
      addChat(chat);
    }
  }, [data, setMessages, addChat, chats]);

  return null;
}
````

## File: src/modules/chat/components/chat-bot.jsx
````javascript
"use client";

import { useChat } from "@ai-sdk/react";
import { useGetChatById } from "../hooks/chat";
import { Fragment, useState, useEffect, useMemo, useRef } from "react";
import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import { Message, MessageContent } from "@/components/ai-elements/message";
import {
  PromptInput,
  PromptInputBody,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputToolbar,
  PromptInputTools,
} from "@/components/ai-elements/prompt-input";
import { Response } from "@/components/ai-elements/response";
import { Spinner } from "@/components/ui/spinner";
import { ModelSelector } from "./model-selector";
import { useAIModels } from "@/modules/ai-agent/hook/ai-agent";
import { useChatStore } from "../store/chat-store";
import { useSearchParams, useRouter } from "next/navigation";

export default function ChatViewWithForm({ chatId }) {

    const { data: models, isPending: isModelLoading } = useAIModels();
  const { data, isPending } = useGetChatById(chatId);
  const { hasChatBeenTriggered, markChatAsTriggered } = useChatStore();
  const {messages: chatMessages, addMessage} = useChatStore();

  const [selectedModel, setSelectedModel] = useState(data?.data?.model);
  const [input, setInput] = useState("");

  const searchParams = useSearchParams();
  const router = useRouter();
  const shouldAutoTrigger = searchParams.get("autoTrigger") === "true";
 


  const initialMessages = useMemo(() => {
    if (!data?.data?.messages) return [];
    
      
    return data.data.messages
      .filter(msg => msg.content && msg.content.trim() !== '' && msg.id)
      .map(msg => ({
        id: msg.id,
        role: msg.messageRole.toLowerCase(),
        parts: [{ type: 'text', text: msg.content }],
        createdAt: msg.createdAt,
      }));
  }, [data]);

  const { stop, messages, status, sendMessage } = useChat({
    initialMessages,
    api: '/api/chat',
  });


  useEffect(() => {
    if (data?.data?.model && !selectedModel) {
      setSelectedModel(data.data.model);
    }
  }, [data, selectedModel]);

 
useEffect(() => {
  if (!shouldAutoTrigger) return;
  if (hasChatBeenTriggered(chatId)) return; 
  if (!selectedModel) return;
  if (initialMessages.length === 0) return;
  
  const lastMessage = initialMessages[initialMessages.length - 1];
  if (lastMessage.role !== 'user') return;

 
  markChatAsTriggered(chatId);

  console.log("🚀 Auto-triggering AI response for chat:", chatId);
  
  sendMessage(
    { text: lastMessage.parts[0].text },
    {
      body: {
        model: selectedModel,
        chatId,
      },
    }
  );

  router.replace(`/chat/${chatId}`, { scroll: false });

}, [shouldAutoTrigger, chatId, selectedModel, initialMessages, markChatAsTriggered, hasChatBeenTriggered]);

  const handleSubmit = () => {
    if (!input.trim()) return;
    
    sendMessage(
      { text: input },
      {
        body: {
          model: selectedModel,
          chatId,
        },
      }
    );
    setInput("");
  };

  if (isPending) {
    return (
      <div className="flex items-center justify-center h-full">
        <Spinner />
      </div>
    );
  }


  const messageToRender = [...initialMessages, ...messages];

  return (
    <div className="max-w-4xl mx-auto p-6 relative size-full h-[calc(100vh-4rem)]">
      <div className="flex flex-col h-full">
        <Conversation className="h-full">
          <ConversationContent>
            {messageToRender.length === 0 ? (
              <div className="flex items-center justify-center h-full text-gray-500">
                Start a conversation...
              </div>
            ) : (
              messageToRender.map((message) => (
                <Fragment key={message.id}>
                  {message.parts.map((part, i) => {
                    switch (part.type) {
                      case "text":
                        return (
                          <Message from={message.role} key={`${message.id}-${i}`}>
                            <MessageContent>
                              <Response>{part.text}</Response>
                            </MessageContent>
                          </Message>
                        );
                      default:
                        return null;
                    }
                  })}
                </Fragment>
              ))
            )}
            {status === "streaming" && (
              <div className="flex items-center gap-2 text-muted-foreground">
                <Spinner />
                <span className="text-sm">AI is thinking...</span>
              </div>
            )}
          </ConversationContent>
          <ConversationScrollButton />
        </Conversation>

        <PromptInput onSubmit={handleSubmit} className="mt-4">
          <PromptInputBody>
            <PromptInputTextarea 
              value={input} 
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              disabled={status === "streaming"}
            />
          </PromptInputBody>
          <PromptInputToolbar>
            <PromptInputTools>
              {isModelLoading ? (
                <Spinner />
              ) : (
                <ModelSelector
                  models={models?.models}
                  selectedModelId={selectedModel}
                  onModelSelect={setSelectedModel}
                  className="ml-1"
                />
              )}
            </PromptInputTools>
            <PromptInputSubmit
              disabled={!input.trim() || status === "streaming"}
              status={status}
            />
          </PromptInputToolbar>
        </PromptInput>
      </div>
    </div>
  );
}
````

## File: src/modules/chat/components/chat-input.jsx
````javascript
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { SearchIcon, PaperclipIcon, ChevronDownIcon } from "lucide-react"

export function ChatInput() {
  return (
    <div className="border-t border-border bg-background p-4">
      <div className="mx-auto max-w-3xl">
        <Textarea
          placeholder="Type your message here..."
          className="min-h-[100px] resize-none border-border bg-background"
        />
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="text-purple-600">
              Gemini 2.5 Flash
              <ChevronDownIcon className="ml-1 h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <SearchIcon className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <PaperclipIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
````

## File: src/modules/chat/components/chat-message-form.jsx
````javascript
"use client";

import { useState, useEffect } from "react";
import { Send, Paperclip, Mic, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import { cn } from "@/lib/utils";
import { useAIModels } from "@/modules/ai-agent/hook/ai-agent";
import { ModelSelector } from "./model-selector";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner";
import { useCreateChat } from "../hooks/chat";

export default function ChatMessageForm({ initialMessage, onMessageChange }) {
  const { data: models, isPending, error } = useAIModels();

  const [message, setMessage] = useState("");

  const [useWebSearch, setUseWebSearch] = useState(false);

  const [selectedModel, setSelectedModel] = useState(models?.models[0].id);
  const { mutateAsync, isPending: isChatPending } = useCreateChat();
  

  useEffect(() => {
    if (initialMessage) {
      setMessage(initialMessage);
      onMessageChange?.(""); 
    }
  }, [initialMessage, onMessageChange]);

  
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await mutateAsync({ content: message, model: selectedModel });
      toast.success("Message sent successfully");
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message");
    } finally {
      setMessage("");
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 pb-6">
      <form onSubmit={handleSubmit} className="relative">
        {/* Main Input Container */}
        <div className="relative rounded-2xl border border-border shadow-sm   transition-all">
          {/* Textarea */}
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here..."
            className="min-h-[60px] max-h-[200px] resize-none border-0 bg-transparent px-4 py-3 text-base focus-visible:ring-0 focus-visible:ring-offset-0 "
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
          />

          {/* Toolbar */}
          <div className="flex items-center justify-between gap-2 px-3 py-2 border-t ">
            {/* Left side tools */}
            <div className="flex items-center gap-1">
              <Button
                disabled={isChatPending}
                type="button"
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 "
                aria-label="Attach file"
                title="Attach file"
              >
                <Paperclip className="h-4 w-4" />
                <span className="sr-only">Attach file</span>
              </Button>

              <Button
                type="button"
                variant={useWebSearch ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setUseWebSearch(!useWebSearch)}
                aria-pressed={useWebSearch}
                aria-label="Toggle web search"
                title="Toggle web search"
                className={cn(
                  "h-8 px-2 gap-1",
                  useWebSearch && "ring-2 ring-ring/40"
                )}
              >
                <Globe className="h-4 w-4" />
                <span className="text-xs">Search</span>
              </Button>

              {isPending ? (
                <>
                  <Spinner />
                </>
              ) : (
                <ModelSelector
                  models={models?.models}
                  selectedModelId={selectedModel}
                  onModelSelect={setSelectedModel}
                  className="ml-1"
                />
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={!message.trim()}
              size="sm"
              variant={message.trim() ? "default" : "ghost"}
              className="h-8 w-8 p-0 rounded-full "
              aria-label="Send message"
              title={
                message.trim() ? "Send message" : "Enter a message to enable"
              }
            >
              <Send className="h-4 w-4" />
              <span className="sr-only">Send message</span>
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
````

## File: src/modules/chat/components/chat-message-view.jsx
````javascript
"use client";

import React, { useState } from 'react'
import ChatWelcomeTabs from './chat-welcome-tabs';
import ChatMessageForm from './chat-message-form';

const ChatMessageView = ({user}) => {
  const [selectedMessage, setSelectedMessage] = useState("");

  const handleMessageSelect = (message) => {
    setSelectedMessage(message);
  };

  const handleMessageChange = () => {
    setSelectedMessage("");
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen space-y-10'>
        <ChatWelcomeTabs 
          userName={user?.name} 
          onMessageSelect={handleMessageSelect}
        />
        <ChatMessageForm 
          initialMessage={selectedMessage}
          onMessageChange={handleMessageChange}
        />
    </div>
  )
}

export default ChatMessageView
````

## File: src/modules/chat/components/chat-message.jsx
````javascript
import { cn } from "@/lib/utils"

export function ChatMessage({ role, content }) {
  return (
    <div className={cn("mb-6 flex w-full", role === "user" ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-[80%] rounded-2xl px-4 py-3",
          role === "user"
            ? "bg-purple-100 text-purple-900 dark:bg-purple-900/20 dark:text-purple-100"
            : "bg-muted text-foreground",
        )}
      >
        <p className="text-sm leading-relaxed whitespace-pre-wrap">{content}</p>
      </div>
    </div>
  )
}
````

## File: src/modules/chat/components/chat-sidebar.jsx
````javascript
"use client";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import UserButton from "@/modules/authentication/components/user-button"
import { PlusIcon, SearchIcon, MenuIcon, EllipsisIcon, Trash } from "lucide-react"
import Link from "next/link"
import { useChatStore } from "../store/chat-store";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import DeleteChatModal from "@/components/ui/delete-chat-modal";
import { useState } from "react";
export function ChatSidebar({user , chats}) {

  const {activeChatId , setActiveChatId} = useChatStore();
  const [isModalOpen, setIsModalOpen] =useState(false);

  const onDelete = (e)=>{
    e.preventDefault();

    setIsModalOpen(true);
  }
 
  return (
    <div className="flex h-full w-64 flex-col border-r border-border bg-sidebar">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-sidebar-border px-4 py-3">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <MenuIcon className="h-5 w-5" />
          </Button>
          <h1 className="text-lg font-semibold text-sidebar-foreground">T3.chat</h1>
        </div>
      </div>

      {/* New Chat Button */}
      <div className="p-4">
        <Link href={"/"} >
         <Button className="w-full" >
          <PlusIcon className="mr-2 h-4 w-4" />
          New Chat
        </Button>
        </Link>
       
      </div>

      {/* Search */}
      <div className="px-4 pb-4">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search your threads..." className="pl-9 bg-sidebar-accent border-sidebar-border" />
        </div>
      </div>

      {/* Thread List */}
      <div className="flex-1 overflow-y-auto px-2">
        <div className="mb-2 px-2 text-xs font-semibold text-muted-foreground">Today</div>
        {chats.map((chat) => (
          <Link
            key={chat.id}
            href={`/chat/${chat.id}`}
            className={
              cn("block rounded-lg px-3 py-2 text-sm text-sidebar-foreground hover:bg-sidebar-accent transition-colors", 
              chat.id === activeChatId && "bg-sidebar-accent"
              )
            }
          >
           <div className="flex flex-row justify-between items-center">
            {chat.title}
            <DropdownMenu>
  <DropdownMenuTrigger>
    <EllipsisIcon className="h-4 w-4" />
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Actions</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem className={"flex flex-row gap-2"} onClick={onDelete}>
      <Trash className="h-4 w-4 text-red-500" />
      <span className="text-red-500">Delete</span>
    </DropdownMenuItem>
   
  </DropdownMenuContent>
</DropdownMenu>

           </div>
          </Link>
        ))}
      </div>

      {/* Footer */}
      <div className="p-4 flex items-center gap-3">
        <UserButton user={user} />
        <span className="flex-1 text-sm text-sidebar-foreground truncate">{user.email}</span>
      </div>

      <DeleteChatModal
     chatId={activeChatId}
     isModalOpen={isModalOpen}
     setIsModalOpen={setIsModalOpen} 
      />
    </div>
  )
}
````

## File: src/modules/chat/components/chat-welcome-tabs.jsx
````javascript
"use client";

import React, { useState } from 'react';
import { Sparkles, Newspaper, Code, GraduationCap, Send, Paperclip, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const CHAT_TAB_MESSAGE = [
  {
    tabName: "Create",
    icon: <Sparkles className="h-4 w-4" />,
    messages: [
      "Write a short story about a robot discovering emotions",
      "Help me outline a sci-fi novel set in a post-apocalyptic world",
      "Create a character profile for a complex villain with sympathetic motives",
      "Give me 5 creative writing prompts for flash fiction",
    ],
  },
  {
    tabName: "Explore",
    icon: <Newspaper className="h-4 w-4" />,
    messages: [
      "Good books for fans of Rick Rubin",
      "Countries ranked by number of corgis",
      "Most successful companies in the world",
      "How much does Claude cost?",
    ],
  },
  {
    tabName: "Code",
    icon: <Code className="h-4 w-4" />,
    messages: [
      "Write code to invert a binary search tree in Python",
      "What is the difference between Promise.all and Promise.allSettled?",
      "Explain React's useEffect cleanup function",
      "Best practices for error handling in async/await",
    ],
  },
  {
    tabName: "Learn",
    icon: <GraduationCap className="h-4 w-4" />,
    messages: [
      "Beginner's guide to TypeScript",
      "Explain the CAP theorem in distributed systems",
      "Why is AI so expensive?",
      "Are black holes real?",
    ],
  },
];

function ChatWelcomeTabs({ userName = "John Doe", onMessageSelect }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-3xl space-y-8">
        <h1 className="text-4xl font-semibold">
          How can I help you, {userName.slice(0, userName.indexOf(" ")) || userName}?
        </h1>

        <div className="flex flex-wrap gap-2 w-full">
          {CHAT_TAB_MESSAGE.map((tab, index) => (
            <Button
              key={tab.tabName}
              variant={activeTab === index ? "default" : "secondary"}
              onClick={() => setActiveTab(index)}
              className="w-[110px] justify-start"
            >
              {tab.icon}
              <span className="ml-2">{tab.tabName}</span>
            </Button>
          ))}
        </div>

        <div className="space-y-3 w-full min-h-[240px]">
          {CHAT_TAB_MESSAGE[activeTab].messages.map((message, index) => (
            <div key={index}>
              <button
                onClick={() => onMessageSelect(message)}
                className="w-full text-left text-sm text-muted-foreground hover:text-primary transition-colors duration-300 ease-in-out py-2"
              >
                {message}
              </button>
              {index < CHAT_TAB_MESSAGE[activeTab].messages.length - 1 && (
                <Separator />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ChatWelcomeTabs;
````

## File: src/modules/chat/components/header.jsx
````javascript
import { ModeToggle } from '@/components/ui/mode-toggle'
import React from 'react'

const Header = () => {
  return (
     <div className="flex h-14 w-full  flex-row justify-end items-center border-b border-border bg-sidebar px-4 py-2">
        <ModeToggle/>
     </div>
  )
}

export default Header
````

## File: src/modules/chat/components/message-card.jsx
````javascript
import { Response } from '@/components/ai-elements/response';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { MessageRole, MessageType } from '@prisma/client';
import { format } from 'date-fns/format';
import { MessageSquareIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react'


const UserMessage = ({ content }) => {
  return (
    <div className="flex justify-end pb-4 pr-2 pl-10">
      <Card
        className={
          "rounded-lg bg-muted p-2 shadow-none border-none max-w-[80%] break-words"
        }
      >
        {content}
      </Card>
    </div>
  );
};

const AssistantMessage = ({
  content,
  createdAt,
  type,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col group px-2 pb-4",
        type === MessageType.ERROR && "text-red-700 dark:text-red-500"
      )}
    >
      <div className="flex items-center gap-2 pl-2 mb-2">
       <MessageSquareIcon className="h-4 w-4" />
        <span className="text-xs text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
          {format(new Date(createdAt), "HH:mm 'on' MMM dd, yyyy")}
        </span>
      </div>

      <div className="pl-8.5 flex flex-col gap-y-4">
       <Response>{content}</Response>
      </div>
    </div>
  );
};

const MessageCard = ({
    content , type , role , createdAt
}) => {

    if(role === MessageRole.ASSISTANT){
        return (
            <AssistantMessage content={content} createdAt={createdAt}/>
        )
    }

  return (
    <div className='mt-5'>
        <UserMessage content={content}/>
    </div>
  )
}

export default MessageCard
````

## File: src/modules/chat/components/message-form.jsx
````javascript
"use client";

import { useState } from "react";
import { Send, Paperclip, Mic, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import { cn } from "@/lib/utils";
import { useAIModels } from "@/modules/ai-agent/hook/ai-agent";
import { ModelSelector } from "./model-selector";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner";
import { useCreateMessageInChat } from "../hooks/chat";


export default function MessageForm({model , chatId}) {
  const { data: models, isPending, error } = useAIModels();

  const [message, setMessage] = useState("");

  const [useWebSearch, setUseWebSearch] = useState(false);
  const [useMicrophone, setUseMicrophone] = useState(false);
  const [selectedModel, setSelectedModel] = useState(model);
  const { mutateAsync, isPending: isChatPending } = useCreateMessageInChat(chatId);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!message.trim()) return;

    try {
     
      await mutateAsync({ content: message, model: selectedModel });
      toast.success("Message sent successfully");
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message");
    } finally {
      
      setMessage("");
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 pb-6">
      <form onSubmit={handleSubmit} className="relative">
        {/* Main Input Container */}
        <div className="relative rounded-2xl border border-border shadow-sm   transition-all">
          {/* Textarea */}
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here..."
            className="min-h-[60px] max-h-[200px] resize-none border-0 bg-transparent px-4 py-3 text-base focus-visible:ring-0 focus-visible:ring-offset-0 "
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
          />

          {/* Toolbar */}
          <div className="flex items-center justify-between gap-2 px-3 py-2 border-t ">
            {/* Left side tools */}
            <div className="flex items-center gap-1">
              <Button
                disabled={isChatPending}
                type="button"
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 "
                aria-label="Attach file"
                title="Attach file"
              >
                <Paperclip className="h-4 w-4" />
                <span className="sr-only">Attach file</span>
              </Button>

              <Button
                type="button"
                variant={useWebSearch ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setUseWebSearch(!useWebSearch)}
                aria-pressed={useWebSearch}
                aria-label="Toggle web search"
                title="Toggle web search"
                className={cn(
                  "h-8 px-2 gap-1",
                  useWebSearch && "ring-2 ring-ring/40"
                )}
              >
                <Globe className="h-4 w-4" />
                <span className="text-xs">Search</span>
              </Button>

              {isPending ? (
                <>
                  <Spinner />
                </>
              ) : (
                <ModelSelector
                  models={models?.models}
                  selectedModelId={selectedModel}
                  onModelSelect={setSelectedModel}
                  className="ml-1"
                />
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={!message.trim()}
              size="sm"
              variant={message.trim() ? "default" : "ghost"}
              className="h-8 w-8 p-0 rounded-full "
              aria-label="Send message"
              title={
                message.trim() ? "Send message" : "Enter a message to enable"
              }
            >
            {isChatPending ? <>
            <Spinner /></>: <><Send className="h-4 w-4" />
              <span className="sr-only">Send message</span></> }
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
````

## File: src/modules/chat/components/message-view.jsx
````javascript
"use client";
import React, { useEffect, useRef } from "react";

import { useGetChatById } from "../hooks/chat";
import { Spinner } from "@/components/ui/spinner";
import MessageCard from "./message-card";
import MessageForm from "./message-form";

const MessageView = ({ chatId }) => {
  const { data, isPending, error, isError } = useGetChatById(chatId);
  const messagesEndRef = useRef(null);
  const scrollContainerRef = useRef(null);


  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
    // print(data?.data?.messages);
  }, [data?.data?.messages]);

  if (isPending) {
    return (
      <div className="flex items-center justify-center h-full">
        <Spinner className={"text-primary"} />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center h-full text-red-500">
        Error: {error?.message || "Failed to load messages"}
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      {/* Messages Container */}
      <div 
        ref={scrollContainerRef}
        className="flex-1 overflow-y-auto"
      >
        <div className="max-w-4xl mx-auto px-4 py-4">
          {data?.data?.messages?.map((message) => (
            <MessageCard
              key={message.id}
              content={message.content}
              role={message.messageRole}
              type={message.messageType}
              createdAt={message.createdAt}
            />
          ))}
          {/* Scroll anchor */}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Message Form with gradient overlay */}
      <div className="relative border-t bg-background">
        <div className="absolute -top-6 left-0 right-0 h-6 bg-gradient-to-b from-transparent to-background pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 py-4 pt-1">
          <MessageForm model={data?.data?.model}  chatId={chatId}/>
        </div>
      </div>
    </div>
  );
};

export default MessageView;
````

## File: src/modules/chat/components/model-selector.jsx
````javascript
"use client";
import { useState } from "react";
import { Check, ChevronDown, Info, Search, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

export function ModelSelector({
  models,
  selectedModelId,
  onModelSelect,
  className,
}) {
  const [open, setOpen] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [selectedForDetails, setSelectedForDetails] = useState(null);
  const [searchQuery, setSearchQuery] = useState("")

  const selectedModel = models.find((m) => m.id === selectedModelId);

  const formatContextLength = (length) => {
    if (length >= 1000000) return `${(length / 1000000).toFixed(1)}M`;
    if (length >= 1000) return `${(length / 1000).toFixed(0)}K`;
    return length.toString();
  };

  const isFreeModel = (model) => {
    return (
      model.pricing.prompt === "0" &&
      model.pricing.completion === "0" &&
      model.pricing.request === "0"
    );
  };

  const openModelDetails = (model, e) => {
    e.stopPropagation();
    setSelectedForDetails(model);
    setDetailsOpen(true);
  };

    const filteredModels = models.filter((model) => {
    const query = searchQuery.toLowerCase()
    return (
      model.name.toLowerCase().includes(query) ||
      model.description.toLowerCase().includes(query) ||
      model.id.toLowerCase().includes(query) ||
      model.architecture.modality.toLowerCase().includes(query)
    )
  })

  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            role="combobox"
            aria-expanded={open}
            className={cn(
              "h-8 justify-between gap-2 px-2 text-xs hover:bg-accent",
              className
            )}
          >
            <div className="flex items-center gap-1.5 min-w-0">
              <Sparkles className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
              <span className="truncate font-medium">
                {selectedModel?.name || "Select model"}
              </span>
            </div>
            <ChevronDown className="h-3.5 w-3.5 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-3xl p-0" align="start">
           <div className="p-3 border-b">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search models..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-9 pl-9"
              />
            </div>
          </div>
          <ScrollArea className="h-[400px]">
            <div className="p-2">
              <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
                Available Models ({filteredModels.length})
              </div>
              {filteredModels.length === 0 ? (
                <div className="px-2 py-8 text-center text-sm text-muted-foreground">
                  No models found matching "{searchQuery}"
                </div>
              ) : (
                filteredModels.map((model) => (
                  <div
                    key={model.id}
                    className={cn(
                      "relative flex cursor-pointer select-none items-start gap-2 rounded-md px-2 py-2 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground",
                      selectedModelId === model.id && "bg-accent",
                    )}
                    onClick={() => {
                      onModelSelect(model.id)
                      setOpen(false)
                      setSearchQuery("")
                    }}
                  >
                    <div className="flex h-5 items-center">
                      <Check className={cn("h-4 w-4", selectedModelId === model.id ? "opacity-100" : "opacity-0")} />
                    </div>
                    <div className="flex-1 min-w-0 space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-sm leading-none truncate">{model.name}</span>
                        {isFreeModel(model) && (
                          <Badge variant="secondary" className="h-4 px-1 text-[10px]">
                            FREE
                          </Badge>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground line-clamp-2">{model.description}</p>
                      <div className="flex items-center gap-3 text-[10px] text-muted-foreground">
                        <span>Context: {formatContextLength(model.context_length)}</span>
                        <span>•</span>
                        <span className="capitalize">{model.architecture.modality.replace("->", " → ")}</span>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-6 w-6 p-0 shrink-0"
                      onClick={(e) => openModelDetails(model, e)}
                    >
                      <Info className="h-3.5 w-3.5" />
                      <span className="sr-only">View details</span>
                    </Button>
                  </div>
                ))
              )}
            </div>
          </ScrollArea>
        </PopoverContent>
      </Popover>

      <Dialog open={detailsOpen} onOpenChange={setDetailsOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-hidden flex flex-col">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5" />
              {selectedForDetails?.name}
            </DialogTitle>
            <DialogDescription>Detailed information about this AI model</DialogDescription>
          </DialogHeader>
          <ScrollArea className="flex-1 pr-4">
            {selectedForDetails && (
              <div className="space-y-6">
                {/* Description */}
                <div>
                  <h3 className="text-sm font-semibold mb-2">Description</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{selectedForDetails.description}</p>
                </div>

                <Separator />

                {/* Context & Capabilities */}
                <div>
                  <h3 className="text-sm font-semibold mb-3">Context & Capabilities</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground">Context Length</p>
                      <p className="text-sm font-medium">
                        {formatContextLength(selectedForDetails.context_length)} tokens
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground">Max Completion Tokens</p>
                      <p className="text-sm font-medium">
                        {formatContextLength(selectedForDetails.top_provider.max_completion_tokens)} tokens
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground">Modality</p>
                      <p className="text-sm font-medium capitalize">
                        {selectedForDetails.architecture.modality.replace("->", " → ")}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground">Tokenizer</p>
                      <p className="text-sm font-medium">{selectedForDetails.architecture.tokenizer}</p>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Input/Output Modalities */}
                <div>
                  <h3 className="text-sm font-semibold mb-3">Supported Modalities</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <p className="text-xs text-muted-foreground">Input Modalities</p>
                      <div className="flex flex-wrap gap-1">
                        {selectedForDetails.architecture.input_modalities.map((modality) => (
                          <Badge key={modality} variant="outline" className="text-xs">
                            {modality}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-xs text-muted-foreground">Output Modalities</p>
                      <div className="flex flex-wrap gap-1">
                        {selectedForDetails.architecture.output_modalities.map((modality) => (
                          <Badge key={modality} variant="outline" className="text-xs">
                            {modality}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Pricing */}
                <div>
                  <h3 className="text-sm font-semibold mb-3">Pricing</h3>
                  {isFreeModel(selectedForDetails) ? (
                    <div className="flex items-center gap-2 p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                      <Badge variant="secondary" className="bg-green-500/20">
                        FREE
                      </Badge>
                      <p className="text-sm text-muted-foreground">This model is completely free to use</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-3">
                      {Object.entries(selectedForDetails.pricing).map(([key, value]) => {
                        if (value === "0") return null
                        return (
                          <div key={key} className="space-y-1">
                            <p className="text-xs text-muted-foreground capitalize">{key.replace("_", " ")}</p>
                            <p className="text-sm font-medium">${value}</p>
                          </div>
                        )
                      })}
                    </div>
                  )}
                </div>

                <Separator />

                {/* Provider Info */}
                <div>
                  <h3 className="text-sm font-semibold mb-3">Provider Information</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Content Moderation</span>
                      <Badge variant={selectedForDetails.top_provider.is_moderated ? "default" : "secondary"}>
                        {selectedForDetails.top_provider.is_moderated ? "Enabled" : "Disabled"}
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Model ID */}
                <div>
                  <h3 className="text-sm font-semibold mb-2">Model ID</h3>
                  <code className="text-xs bg-muted px-2 py-1 rounded block break-all">{selectedForDetails.id}</code>
                </div>
              </div>
            )}
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
}
````

## File: src/modules/chat/hooks/chat.js
````javascript
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  createChatWithMessage,
  createMessageInChat,
  deleteChat,
  getAllChats,
  getChatById,
} from "../actions";
import { useRouter } from "next/navigation";
import { useChatStore } from "../store/chat-store";
import { da } from "zod/v4/locales";
import { useChat } from "@ai-sdk/react";
import { toast } from "sonner";

export const useGetChats = () => {
  return useQuery({
    queryKey: ["chats"],
    queryFn: getAllChats,
  });
};

export const useCreateMessageInChat = (chatId) => {
  const queryClient = useQueryClient();
  const { addMessage, setMessages, messages } = useChatStore();

  return useMutation({
    mutationFn: (values) => createMessageInChat(values, chatId),
    // Optimistic update: update both the zustand store and React Query cache
    onMutate: async (values) => {
      // Cancel any outgoing refetches for this chat so they don't overwrite our optimistic update
      await queryClient.cancelQueries(["chats", chatId]);

    
      const previousChat = queryClient.getQueryData(["chats", chatId]);
      const previousMessages = previousChat?.data?.messages ?? messages;

      const optimisticMessage = {
        id: `temp-${Date.now()}`,
        content: values.content,
        messageRole: "USER",
        messageType: "NORMAL",
        model: values.model ?? null,
        createdAt: new Date().toISOString(),
      };

      // Update zustand store immediately
      addMessage(optimisticMessage);
      setMessages([...previousMessages, optimisticMessage]);

      
      const optimisticChat = previousChat
        ? {
            ...previousChat,
            data: {
              ...previousChat.data,
              messages: [...previousMessages, optimisticMessage],
            },
          }
        : {
            success: true,
            message: "optimistic-chat",
            data: {
              id: chatId,
              title: "",
              model: values.model ?? null,
              userId: null,
              messages: [...previousMessages, optimisticMessage],
            },
          };

      queryClient.setQueryData(["chats", chatId], optimisticChat);

      return { previousChat, previousMessages };
    },

    onError: (_error, _variables, context) => {
      // Rollback zustand store
      if (context?.previousMessages) {
        setMessages(context.previousMessages);
      }

      // Rollback React Query cache
      if (context?.previousChat) {
        queryClient.setQueryData(["chats", chatId], context.previousChat);
      }

      // Ensure chats list is refreshed
      queryClient.invalidateQueries(["chats"]);
    },

    onSuccess: (res, _variables, context) => {
      if (res.success && res.data) {
        const { userMessage, Assistantmessage } = res.data;

        
        const newMessages = (context?.previousMessages || []).concat(userMessage);
        if (Assistantmessage) newMessages.push(Assistantmessage);

        
        setMessages(newMessages);

     
        const previousChat = context?.previousChat;
        if (previousChat) {
          const updatedChat = {
            ...previousChat,
            data: {
              ...previousChat.data,
              messages: newMessages,
            },
          };
          queryClient.setQueryData(["chats", chatId], updatedChat);
        }

   
        queryClient.invalidateQueries(["chats"]);
      }
    },
  });
};

export const useCreateChat = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { addChat, setActiveChatId, setMessages } = useChatStore();

  return useMutation({
    mutationFn: (values) => createChatWithMessage(values),
    onSuccess: (res) => {
      if (res.success && res.data) {
        const chat = res.data;
        addChat(chat);
        setActiveChatId(chat.id);
        
        // Set messages from the created chat
        setMessages(chat.messages || []);
        
        queryClient.invalidateQueries(["chats"]);
        
        // Redirect WITH autoTrigger to stream AI response
        router.push(`/chat/${chat.id}?autoTrigger=true`);
      }
    },
    onError: (error) => {
      console.error("Create chat error:", error);
      toast.error("Failed to create chat");
    },
  });
};

export const useGetChatById = (chatId) => {
  return useQuery({
    queryKey: ["chats", chatId],
    queryFn: () => getChatById(chatId),
 
  });
};

export const useDeleteChat = (chatId) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation({
    mutationFn: () => deleteChat(chatId),
    onSuccess: () => {
      queryClient.invalidateQueries(["chats"]);
      router.push("/");
    },
    onError: () => {
      toast.error("Failed to delete chat");
    },
  });
};
````

## File: src/modules/chat/store/chat-store.js
````javascript
// store/chat-store.ts
import { create } from "zustand";

export const useChatStore = create((set, get) => ({
  chats: [],          // All user's chats
  activeChatId: null, // Currently open chat
  messages: [],        // Messages for the active chat
 triggeredChats: new Set(), // Track which chats have been auto-triggered
  // 🚀 Setters
  setChats: (chats) => set({ chats }),
  setActiveChatId: (chatId) => set({ activeChatId: chatId }),
  setMessages: (messages) => set({ messages }),

  // ➕ Add new chat (on create)
  addChat: (chat) => set({ chats: [chat, ...get().chats] }),

  // 💬 Append a new message (user or assistant)
  addMessage: (message) => set({ messages: [...get().messages, message] }),

  // 🧹 Clear messages when switching chat
  clearMessages: () => set({ messages: [] }),

   markChatAsTriggered: (chatId) => {
    const triggered = new Set(get().triggeredChats);
    triggered.add(chatId);
    set({ triggeredChats: triggered });
  },

  hasChatBeenTriggered: (chatId) => {
    return get().triggeredChats.has(chatId);
  },
}));
````
