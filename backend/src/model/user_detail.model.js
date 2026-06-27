import { db } from "../config/database.js";
import { userDetail } from "../schema/index.js";

export const getUserDetailsById = async (userId) => {
    const result = await db.select().from(userDetail).where(userDetail.userId.eq(userId));
    return result.length > 0 ? result[0] : null;
};