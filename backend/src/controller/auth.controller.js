import { cookieOptions, generateToken } from "../middleware/auth.js";
import { registerUser, loginUser } from "../model/user.model.js";

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

export const login = async (req, res) => {
    const { email, password }  = req.body;

    try {
        const user = await loginUser({ email, password });
        const token = generateToken(user.id); // Assuming you have a function to generate a token
        res.cookie("token", token, cookieOptions); // Set the token in a cookie
        res.json({token: token });
    } catch (error) {
        console.error("Error logging in user:", error);
        return res.status(500).json({ message: "Internal server error" });
    }

    return res.status(200).json({ message: "User logged in successfully" });
}

export const logout = (req, res) => {
    res.cookie("token", "", { ...cookieOptions, maxAge: 1 }); // Clear the token cookie
    return res.status(200).json({ message: "User logged out successfully" });
}


export const getSessionUser = async (req, res) => {
    return res.status(200).json({ user: req.user });
}
