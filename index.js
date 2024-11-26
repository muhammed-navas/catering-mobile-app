import express from "express";
import cors from "cors";
import mongoDB from "./src/config/db.js";
import adminRouter from "./src/routes/adminRoutes.js";
import dotenv from 'dotenv';

dotenv.config();
const app = express();

mongoDB();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use("/api/admin",adminRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});










