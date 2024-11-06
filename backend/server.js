import express from "express";
import connectDB from "./db.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
const PORT = process.env.port || 8080;

//routes
app.get("/", (req,res)=>{
  res.send("API WORKING");
})

//db connection
connectDB()

app.use(cookieParser());
//middlewares
app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
