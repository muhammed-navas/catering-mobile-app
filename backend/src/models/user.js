import mongoose, { Schema } from "mongoose";

const phoneNumberAndOTP = new Schema(
  {
    phoneNumber: { type: String, required: true, unique: true },
    otp: { type: String },
    otpExpiry: { type: Date },
    refreshToken: { type: String },
    name: { type: String, required: false },
    dateOfBirth: { type: Date, required: false },
    education: { type: String, required: false },
    proof: { type: Schema.Types.Mixed, required: false },
    amount: { type: Number, required: false },
    totalWork: { type: Number, required: false },
  },
  { timestamps: true }
);

const User = mongoose.model("user", phoneNumberAndOTP);
export default User;
