import express from "express";
import connectDB from "./db.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
const PORT = process.env.port || 8080;

//routes


//db connection
connectDB()

app.use(
  cors());
app.use(cookieParser());
//to make app understand json
app.use(express.json());
;

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
