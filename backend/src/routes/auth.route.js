import { Router } from "express";
import { register, login, logout, getSessionUser } from "../controller/auth.controller.js";
import { protect } from "../middleware/auth.js";

const router = Router();

router.post("/register", register);
router.get("/getSessionUser", protect, getSessionUser); // Protected route to get session user
router.post("/login", login);
router.post("/logout", logout);

export default router;