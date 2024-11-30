import { Router } from "express";
import { generateOTP, submitOTP } from "../controllers/userControllers.js";

const userRouter = Router();

userRouter.post("/otp-verification",generateOTP);
userRouter.post("/otp-submit", submitOTP);

export default  userRouter