import { Router } from "express";

const userRouter = Router();

userRouter.post("/otp-verification",phoneVerification)