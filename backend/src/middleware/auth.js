// This is Auth Middleware
import jwt from "jsonwebtoken";
import { db } from "../config/database.js";
import dotenv from "dotenv";
dotenv.config();

export const cookieOptions = {
    httpOnly: true,
    secure: process.env.ENVIRONMENT === "production", // Use secure cookies in production
    sameSite: "strict", // Adjust based on your requirements
    maxAge: 24 * 60 * 60 * 1000, // 1 day
};

export const generateToken = (userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "1d" });
    return token;
}

export const protect = async (req, res, next) => {
    try {
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({ message: "Not authorized, no token" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await db.select().from("user").where({ id: decoded.userId });

        if (!req.user) {
            return res.status(401).json({ message: "Not authorized, user not found" });
        }

        req.user = req.user[0]; // Assuming the user is returned as an array, take the first element
        next();

    } catch (error) {
        console.error("Error in auth middleware:", error);
        return res.status(401).json({ message: "Not authorized, token failed" });
    }
}