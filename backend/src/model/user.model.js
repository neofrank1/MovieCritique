import { db } from "../config/database.js";

export const getTest = async (res, req) => {
    res = await db.select().from(users);
    
    return res;
}