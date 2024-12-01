import mongoose, { Schema } from 'mongoose';


export const phoneNumberAndOTP = new Schema({
  phoneNumber: { type: String, required: true, unique: true },
  otp: { type: String },
  otpExpiry: { type: Date },
  refreshToken : { type: String },
  name: { type: String, required: true},
  education: { type: String, required: true},
  dateOfBirth: { type: Date, required: true},
  proof: { type: String, required: true},
  amount: { type: String, required: true},
  totalWork: { type: String, required: true},
});

const User = mongoose.model("user",phoneNumberAndOTP);
export default User;