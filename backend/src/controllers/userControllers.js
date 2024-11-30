import { generateOtp, sendOtpToUser } from "../helpers/generatOtp.js";
import User from "../models/auth.js";
import { validationResult } from "express-validator";

export const generateOTP = async (req, res, next) => {
  try {
    const errors = await validationResult(req);

    if (errors.isEmpty()) {
      const { phoneNumber } = req.body;
      const existingUser = await User.findOne({ phoneNumber });

      if (existingUser) {
        return res.status(409).json({ message: "Phone number already exists" }); 
      }

      const otp = generateOtp();
      const otpExpiry = new Date(Date.now() + 1 * 60 * 1000); // 1 minute expiry

      const user = new User({ phoneNumber, otp, otpExpiry });
      await user.save();

      await sendOtpToUser(phoneNumber, otp);

      return res.status(201).json({ message: "OTP sent for verification" });
    } else {
      return res.status(400).json({ errors: errors.array() });
    }
  } catch (error) {
    console.error(error.message);
    next(error); 
  }
};

export const submitOTP = async (req, res , next) =>{
    try {
        const { phoneNumber , otp  } = req.body;
        if(!phoneNumber || !otp){
            return res.status(400).json({ message: 'Invalid phone number or otp' });
        }
        const user = await User.findOne({ phoneNumber , otp });
        if(!user){
            return res.status(404).json({ message: 'Invalid user' });
        }
         const now = new Date();
         if (now > user.otpExpiry) {
           return res.status(401).json({ message: "OTP expired" });
         }
        return res.status(200).json({ message: 'OTP verified successfully' });
    } catch (error) {
        console.log(error.message);
        next(error);
    }
}