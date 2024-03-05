import express from "express";
import { loginUser,registerUser } from "../controllers/userController.js";
const router = app.Router();

router.post("/login", loginUser);
router.post("/register", registerUser);

export default router;