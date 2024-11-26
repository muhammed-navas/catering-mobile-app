import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoDB = async (req,res) =>{
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log("Database connected");
  } catch (error) {
    console.log("error connecting", error.message);
  }
}
export default mongoDB