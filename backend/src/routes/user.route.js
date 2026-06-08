import { Router } from "express";
import { getTesting } from "../controller/user.controller.js";

const router = Router();

router.get('/test', getTesting);

export default router;