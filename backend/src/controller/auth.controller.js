import { registerUser } from "../model/user.model.js";

export const register = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    try {
        const newUser = await registerUser({ firstName, lastName, email, password });
        return res.status(201).json({ message: "User registered successfully", user: newUser });
    } catch (error) {
        console.error("Error registering user:", error);
        return res.status(500).json({ message: "Internal server error" });
    }

    return res.status(200).json({ message: "User registered successfully" });
};