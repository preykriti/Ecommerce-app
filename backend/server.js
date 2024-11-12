import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDB from "./db.js";
import cors from "cors";

import cookieParser from "cookie-parser";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";

const app = express();
const PORT = process.env.port || 8082;
app.use(express.json());

//db connection
connectDB();
connectCloudinary();

//routes
app.get("/", (req, res) => {
  res.send("API WORKING");
});
app.use("/api/user", userRouter);

//middlewares

app.use(cors());
app.use(cookieParser());

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
