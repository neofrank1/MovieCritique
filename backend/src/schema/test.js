import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const test = pgTable("test", {
  id: serial("id").primaryKey(),
  username: text("username").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});