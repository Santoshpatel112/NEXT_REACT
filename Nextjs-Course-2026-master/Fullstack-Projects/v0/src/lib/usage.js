import { RateLimiterPrisma } from "rate-limiter-flexible";
import db from "./db";
import { auth } from "@clerk/nextjs/server";

export const FREE_POINTS = 5;
export const PRO_POINTS = 100;
export const DURATION = 30 * 24 * 60 * 60; // 30 days
export const GENERATION_COST = 1;

export async function getUsageTracker() {
  const { has } = await auth();
  const hasProAccess = has({ plan: "pro" });

  console.log("Has Pro Access:", hasProAccess);

  const usageTracker = new RateLimiterPrisma({
    storeClient: db,
    tableName: "Usage",
    points: hasProAccess ? PRO_POINTS : FREE_POINTS,
    duration: DURATION
  });

  return usageTracker;
}

export async function consumeCredits() {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  const usageTracker = await getUsageTracker();
  const result = await usageTracker.consume(userId, GENERATION_COST);
  
  return result; // Make sure to return the result
}

export async function getUsageStatus() {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Unauthorized");
  }

  const usageTracker = await getUsageTracker();
  
  try {
    const result = await usageTracker.get(userId);
    
    // If no usage record exists yet, return null
    if (!result) {
      return null;
    }

    return result;
  } catch (error) {
    // Handle case where user has no record yet
    console.error("Error getting usage:", error);
    return null;
  }
}