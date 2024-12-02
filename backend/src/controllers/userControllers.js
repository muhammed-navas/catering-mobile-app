import { generateOtp, sendOtpToUser } from "../helpers/generatOtp.js";
import User from "../models/user.js";
import { validationResult } from "express-validator";
import dotenv from "dotenv";
import { accessToken, refreshToken } from "../helpers/accessToken.js";
import UserAddEvent from "../models/userAddToEvent.js";
import mongoose from "mongoose";

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
      console.log(otp, "this is otp");
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

export const submitOTP = async (req, res, next) => {
  try {
    const { phoneNumber, otp } = req.body;
    if (!phoneNumber || !otp) {
      return res.status(400).json({ message: "Invalid phone number or OTP" });
    }

    const user = await User.findOne({ phoneNumber, otp });

    if (!user) {
      return res.status(404).json({ message: "Invalid user or OTP" });
    }
    const currentTime = new Date();
    if (currentTime > user.otpExpiry) {
      return res.status(401).json({ message: "OTP expired" });
    }
    const access_Token = accessToken(user._id); 
    const refresh_Token = refreshToken(user._id); 
    user.refreshToken = refresh_Token;

    await user.save();

    res.cookie("jwt", refresh_Token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      maxAge: 5 * 24 * 60 * 60 * 1000, // 5 days
    });

    return res.status(200).json({
      message: "OTP verified successfully",
      accessToken:access_Token,
    });
  } catch (error) {
    console.error(error.message);
    next(error);
  }
};

export const updateProfile = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { id } = req.query;
    const { name, dateOfBirth, education, proof, amount, totalWork } = req.body;

    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    if (
      !name ||
      !dateOfBirth ||
      !education ||
      !proof ||
      !amount ||
      !totalWork
    ) {
      return res
        .status(400)
        .json({ message: "All fields are required for profile update" });
    }

    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.name = name;
    user.dateOfBirth = new Date(dateOfBirth);
    user.education = education;

    if (
      proof &&
      typeof proof === "object" &&
      !Array.isArray(proof) &&
      Object.keys(proof).length > 0
    ) {
      user.proof = proof;
    } else {
      return res
        .status(400)
        .json({ message: "Invalid proof format. Proof must be an object." });
    }

    user.amount = amount;
    user.totalWork = totalWork;

    await user.save();

    return res
      .status(200)
      .json({ message: "Profile updated successfully", user });
  } catch (error) {
    console.error(error.message);
    next(error);
  }
};

export const addUserToEvent = async (req, res, next) => {
  try {
    const {id} = req.query
    const { eventID , categoryID } = req.body;

    if (!eventID || !categoryID) {
      return res.status(400).json({
        message: "userId, eventId, and categories array are required",
      });
    }

    const existingEntry = await User.findOne({ _id:id });
    if (existingEntry) {
      return res
        .status(400)
        .json({ message: "User already assigned to this event" });
    }

    const newEntry = new UserAddEvent.aggregate([
      
    ])

    await newEntry.save();

    return res.status(201).json({ message: "User added successfully"});
  } catch (error) {
    console.error(error.message);
    next(error); 
  }
};

export const getEventUsersByCategory = async (req, res, next) => {
  try {
    const { userId, eventId } = req.query;

    const query = {};
    if (userId) query.userId = userId;
    if (eventId) query.eventId = eventId;

    const userEvents = await UserAddEvent.find(query)
      .populate("userId", "phoneNumber") 
      .populate("eventId", "eventName"); 

    if (!userEvents || userEvents.length === 0) {
      return res.status(404).json({ message: "No user events found" });
    }

    return res.status(200).json(userEvents);
  } catch (error) {
    console.error(error.message);
    next(error); 
  }
};

export const deleteUserEvent = async (req, res, next) => {
  try {
    const { id } = req.query;

    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid or missing ID" });
    }

    const deletedEntry = await UserAddEvent.findByIdAndDelete(id);

    if (!deletedEntry) {
      return res.status(404).json({ message: "Entry not found" });
    }

    return res.status(200).json({ message: "Entry deleted successfully" });
  } catch (error) {
    console.error(error.message);
    next(error);
  }
};
