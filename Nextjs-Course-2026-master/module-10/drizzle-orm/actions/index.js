"use server";

import { db } from "@/lib/db";
import {users} from "@/schema"
import { eq  } from "drizzle-orm";
import { revalidatePath } from "next/cache";


// Create a new user

export async function createUser(fromData) {
    const name = fromData.get("name")
    const email = fromData.get("email")

    const user = await db.insert(users).values({
        name,
        email
    })


    revalidatePath("/")

    return user
}


export async function getAllUsers() {
    const allusers = await db.select().from(users)

    return allusers || []
}


export async function getUserById(id) {
    const user = await db.select().from(users).where(eq(users.id , id))


    return user;
}


export async function updateUser(id , formData) {
     const name = formData.get("name");
  const email = formData.get("email");
  const isActive = formData.get("isActive") === "on";

  await db
  .update(users)
  .set({name , email , isActive , updatedAt:new Date()})
  .where(eq(users.id , id))

  revalidatePath("/")

   return {
    message: "User updated successfully",
    success: true,
  };
}


export async function deleteUser(id) {
    await db.delete(users).where(eq(users.id , id))

    revalidatePath("/")

      return {
    message: "User deleted successfully",
    success: true,
  };
}