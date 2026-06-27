// This is Auth Middleware
import jwt from "jsonwebtoken";

const cookieOptions = {
    httpOnly: true,
    secure: process.env.ENVIRONMENT === "production", // Use secure cookies in production
    sameSite: "strict", // Adjust based on your requirements
    maxAge: 24 * 60 * 60 * 1000, // 1 day
};

const generateToken = (userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "1d" });
    return token;
}