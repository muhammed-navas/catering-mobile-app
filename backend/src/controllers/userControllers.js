import { generateOtp, sendOtpToUser } from "../helpers/generatOtp.js";
import User from "../models/auth.js";
import { validationResult } from "express-validator";
import { accessToken, refreshToken } from "../helpers/accessToken.js";
import dotenv from "dotenv"

dotenv.config();


export const generateOTP = async (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const { phoneNumber } = req.body;
      const existingUser = await User.findOne({ phoneNumber });

      if (existingUser) {
        return res.status(409).json({ message: "Phone number already exists" }); 
      }

      const otp = generateOtp();
      console.log(otp,'this is otp')
      const otpExpiry = new Date(Date.now() + 1 * 60 * 1000); // 1 minute expiry
      const user = new User({ phoneNumber, otp, otpExpiry });
      await user.save();
      //  await sendOtpToUser(phoneNumber, otp);
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
        console.log(phoneNumber,otp,'--mobile, otp--');
        if(!phoneNumber || !otp){
            return res.status(400).json({ message: 'Invalid phone number or otp' });
        }
        const user = await User.findOne({ phoneNumber, otp });
        console.log(user,'user')
        if(!user){
            return res.status(404).json({ message: 'Invalid user' });
        }
        const oneMinute =  60 * 1000; // Default to 1 minute
         if (user.otpExpiry + oneMinute > user.otpExpiry) {
           return res.status(401).json({ message: "OTP expired" });
         }
     
        const access_Token = accessToken(user._id)
        const refresh_Token = refreshToken(user._id);

        await user.deleteOne(user.otpExpiry);
        user.refreshToken = refresh_Token;
        user.save();

        res.cookie("jwt", refresh_Token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
          maxAge: 5 * 24 * 60 * 60 * 1000, // 5 days
        });

        return res.status(200).json({ message: 'OTP verified successfully', accessToken : access_Token });
    } catch (error) {
        console.log(error.message);
        next(error);
    }
}

export const updateProfile = async (req, res , next ) =>{
  try {
    const {id} = req.query
    const {name , dateOfBirth ,education , proof , amount , totalWork  } = req.body
    if(!name || !dateOfBirth || !education || !proof || !amount || !totalWork){
      return res.status(400).json({message:"invalid profile"})
    }
    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "invalid user " });
    }
      const user = await User.findById({_id:id});
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
    const newUser = {
      name,
      dateOfBirth,
      education,
      proof,
      amount,
      totalWork
    }
    await User.findByIdAndUpdate(id, newUser, {
     new: true, 
     runValidators: true, 
   });

  } catch (error) {
    console.log(error.message);
    next(error);
  }
}