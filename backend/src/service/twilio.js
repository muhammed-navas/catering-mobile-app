import twilio from 'twilio';
import dotenv from 'dotenv';

dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const user = twilio(accountSid, authToken);

export const sendOTP = async (phoneNumber , otp ) =>{
      console.log(phoneNumber, otp, "----");
    try {
        const Otp = await user.messages.create({
          body: ` your OTP ${otp}`,
          to: phoneNumber,
          from: process.env.TWILIO_PHONE_NUMBER,
        });
    } catch (error) {
        console.log(error.message)
        throw new Error("send otp failed ")
        
    }
}