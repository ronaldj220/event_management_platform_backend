import express from "express";
import { register } from "../controller/register";
import { checkEmail } from "../controller/checkEmail";
const router = express.Router();

// Define route for register user
router.post("/auth/register", register);
router.get("/auth/check-email", checkEmail);
export default router;
