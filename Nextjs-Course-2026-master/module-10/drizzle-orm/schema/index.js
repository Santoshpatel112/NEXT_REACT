import {pgTable , serial , text , timestamp , boolean} from "drizzle-orm/pg-core"


export const users = pgTable("users" , {
    id:serial("id").primaryKey(),
    name:text("name").notNull(),
    email:text("email").notNull().unique(),
    isActive:boolean("is_active").default(true),
     createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
})