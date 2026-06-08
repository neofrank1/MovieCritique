import { db } from "../config/database.js";
import { test } from "../schema/index.js";

export const getTest = async (res, req) => {
    res = await db.select().from(test);
    return res;
}