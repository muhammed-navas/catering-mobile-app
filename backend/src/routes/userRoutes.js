import { Router } from "express";
import { addUserToEvent, generateOTP, getEventWithUsers, submitOTP, updateProfile } from "../controllers/userControllers.js";

const userRouter = Router();

// authentication 
userRouter.post("/otp-verification",generateOTP);
userRouter.post("/otp-submit", submitOTP);

// user profile 
userRouter.put("/update-user-profile",updateProfile);

// event with users 
userRouter.post("/add-user-to-event", addUserToEvent);
userRouter.get("/get-user-to-event", getEventWithUsers);

export default  userRouter