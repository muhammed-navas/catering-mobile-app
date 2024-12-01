import { sendOTP } from "../service/twilio.js";

export const generateOtp = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};


export const sendOtpToUser = async (phoneNumber, otp) => {
  await sendOTP(phoneNumber, otp);
};
