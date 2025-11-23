import express from "express";
import {
  addToCart,
  getCartItems,
  updateCart,
} from "../controllers/cartController.js";
import authUser from "../middleware/userAuth.js";

const cartRouter = express.Router();

cartRouter.post("/get", authUser, getCartItems);
cartRouter.post("/add", authUser, addToCart);
cartRouter.post("/update", authUser, updateCart);

export default cartRouter;
