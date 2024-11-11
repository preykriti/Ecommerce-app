import express from "express";
import { userLogin, userRegister, adminLogin } from "../controllers/userController";
import {body} from "express-validator";

const userRouter = express.Router();

userRouter.post("/register", [
    body("name","Your name must be longer").minLength(3),
    body("email", "Enter a valid email id").isEmail(),
    body("password", "Your password must be at least of 8 characters").minLength(8)
], userRegister);

userRouter.post("/login", userLogin);

userRouter.post("/admin", adminLogin);
