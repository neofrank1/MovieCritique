import { db } from "../config/database.js";
import { test } from "../schema/index.js";
import { user, userDetail } from "../schema/index.js";
import bcrypt  from "bcryptjs";
import { eq } from "drizzle-orm";

export const getTest = async (res, req) => {
    res = await db.select().from(test);
    return res;
}

export const registerUser = async (userData) => {
    const { firstName, lastName, email, password } = userData;

    // Check if the user already exists
    const existingUser = await db
    .select()
    .from(user)
    .where(eq(user.email, email));

    if (existingUser.length) {
        return { message: "User already exists" };
    }

    if (!password || password.length < 8) {
        return { message: "Password must be at least 8 characters long" };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the new user into the database
    const newUser = await db.insert(user).values({
        email,
        password: hashedPassword, // In a real application, make sure to hash the password before storing it
    }).returning();

    const newUserDetail = await db.insert(userDetail).values({
        userId: newUser[0].id,
        firstName,
        lastName,
    }).returning();

    return { user: newUser, userDetail: newUserDetail };
};

export const loginUser = async (loginData) => {
    const { email, password } = loginData;

    const userCheck = await db.select().from(user).where(eq(user.email, email));

    if (!userCheck.length) {
        return { message: "User not found" };
    }

    const isPasswordValid = await bcrypt.compare(password, userCheck[0].password);

    if (!isPasswordValid) {
        return { message: "Invalid password" };
    }

    return { user: userCheck[0] };
}