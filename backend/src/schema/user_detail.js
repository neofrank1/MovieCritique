import { serial, text, timestamp, pgTable } from "drizzle-orm/pg-core";
import { user } from "./user.js";

export const userDetail = pgTable("user_detail", {
    id: serial("id").primaryKey(),
    userId: serial("user_id").references(() => user.id, {
        onDelete: "cascade",
        onUpdate: "cascade",
    }).notNull(),
    firstName: text("first_name").notNull(),
    lastName: text("last_name").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
});