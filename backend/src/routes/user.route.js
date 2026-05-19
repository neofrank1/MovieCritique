import { Router } from "express";
import { getCarsTest } from "../controller/user.controller.js";

const router = Router();

router.get('/cars', getCarsTest);

export default router;