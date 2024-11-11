import express from "express";
import connectDB from "./db.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectCloudinary from "./config/cloudinary.js";

const app = express();
const PORT = process.env.port || 8082;

//db connection
connectDB();
connectCloudinary();

//routes
app.get("/", (req, res) => {
  res.send("API WORKING");
});

//middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
