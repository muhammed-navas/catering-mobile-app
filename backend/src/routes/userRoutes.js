import { Router } from "express";
import { generateOTP, submitOTP, updateProfile } from "../controllers/userControllers.js";

const userRouter = Router();

// authentication 
userRouter.post("/otp-verification",generateOTP);
userRouter.post("/otp-submit", submitOTP);

// user profile 
userRouter.post("add-user-profile",updateProfile)

export default  userRouter