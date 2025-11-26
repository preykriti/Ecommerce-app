import express from "express";
import { userLogin, userRegister, adminLogin, getUserProfile } from "../controllers/userController.js";
import {body} from "express-validator";
import authUser from "../middleware/userAuth.js";

const userRouter = express.Router();

userRouter.post(
  "/register",
  [
    body("name", "Your name must be longer").isLength({ min: 3 }),
    body("email", "Enter a valid email id").isEmail(),
    body("password", "Your password must be at least of 8 characters").isLength(
      { min: 8}
    ),
  ],
  userRegister
);

userRouter.post("/login", userLogin);
userRouter.post("/admin", adminLogin);
userRouter.get("/profile", authUser, getUserProfile);

export default userRouter;