import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "./db";
import { polar, checkout, portal } from "@polar-sh/better-auth";
import { polarClient } from "@/modules/polar/config/polar";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
  },
  plugins: [
    polar({
      client: polarClient,
      createCustomerOnSignUp: true,
      use: [
        checkout({
          products: [
            {
              productId: "bbf4a6b0-ab82-48f8-8812-f6b621450ddd",
              slug: "pro", 
            },
          ],
          successUrl: process.env.POLAR_SUCCESS_URL,
          authenticatedUsersOnly: true,
        }),
      ],
    }),
    portal(),
  ],
});
