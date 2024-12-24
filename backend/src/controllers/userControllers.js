import { generateOtp, sendOtpToUser } from "../helpers/generatOtp.js";
import User from "../models/user.js";
import { validationResult } from "express-validator";
import dotenv from "dotenv";
import { accessToken, refreshToken } from "../helpers/accessToken.js";
import UserAddEvent from "../models/userAddToEvent.js";
import mongoose from "mongoose";
import EventAdd from "../models/AdminEventAdd.js";

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
      accessToken: access_Token,
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
    const { id: userId } = req.query; // User ID
    const { eventId, categoryID, workersCount } = req.body;

    if (
      !eventId ||
      !categoryID ||
      !userId ||
      typeof workersCount !== "number"
    ) {
      return res.status(400).json({
        message:
          "userID, eventId, categoryID, and valid workersCount are required.",
      });
    }

    // Check if the event exists
    const event = await EventAdd.findById(eventId);
    if (!event) {
      return res.status(404).json({ message: "Event not found." });
    }

    // Check if the user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // // Find or create the UserAddEvent entry
    let userAddEvent = await UserAddEvent.findOne({ eventId });

    // if (userAddEvent) {
    //   // Check if the category exists
    //   const existingCategory = userAddEvent.categories.find(
    //     (cat) => String(cat.categoryID) === String(categoryID)
    //   );

    //   if (existingCategory) {
    //     // Update workersCount and add user if not already present
    //     if (existingCategory.workers.includes(userId)) {
    //       return res.status(409).json({
    //         message: "User is already part of this category.",
    //       });
    //     }

    //     existingCategory.workersCount += workersCount;
    //     existingCategory.workers.push(userId);
    //   } else {
    //     // Add new category to the event
    //     userAddEvent.categories.push({
    //       categoryID,
    //       workersCount,
    //       workers: [userId],
    //     });
    //   }

    //   // Save the updated document
    //   await userAddEvent.save();
    // } else {
    //   // If no existing entry, create a new one
    //   userAddEvent = new UserAddEvent({
    //     eventId,
    //     categories: [
    //       {
    //         categoryID,
    //         workersCount,
    //         workers: [userId],
    //       },
    //     ],
    //   });

    //   await userAddEvent.save();
    // }

    // Respond with the updated or created event document
    return res.status(201).json({
      message: "User added successfully.",
      updatedEvent: userAddEvent,
    });
  } catch (error) {
    console.error("Error adding user to event:", error.message);
    next(error);
  }
};






export const getEventWithUsers = async (req, res, next) => {
  try {
    const { eventID } = req.params;

    const event = await UserAddEvent.findOne({ eventId: eventID }).populate(
      "categories.workers.userID",
      "name"
    );

    if (!event) {
      return res.status(404).json({ message: "Event not found." });
    }

    return res.status(200).json(event);
  } catch (error) {
    console.error("Error fetching event data:", error.message);
    next(error);
  }
};

export const deleteUserEvent = async (req, res, next) => {
  try {
    const { id } = req.query; // event id

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
