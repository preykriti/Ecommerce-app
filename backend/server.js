import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDB from "./db.js";
import cors from "cors";

import cookieParser from "cookie-parser";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

const app = express();
const PORT = process.env.PORT || 8000;
app.use(express.json());

app.use(
  cors({
    origin: [process.env.FRONTEND_URL, process.env.ADMIN_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

//db connection
connectDB();
connectCloudinary();

//routes
app.get("/", (req, res) => {
  res.send("API WORKING");
});
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

//middlewares
app.use(cookieParser());

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
