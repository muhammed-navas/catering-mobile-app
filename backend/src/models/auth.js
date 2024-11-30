import mongoose, { Schema } from 'mongoose';


export const phoneNumberAndOTP = new Schema({
  phoneNumber: { type: String, required: true, unique: true },
  otp: { type: String },
  otpExpiry: { type: Date },
});

const User = mongoose.model("user",phoneNumberAndOTP);
export default User;