import express from "express";
import {placeOrder, placeOnlineOrder, allOrders, userOrders, updateOrderStatus, verifyKhalti} from "../controllers/orderController.js";
import adminAuth from "../middleware/adminAuth.js";
import authUser from "../middleware/userAuth.js";

const orderRouter = express.Router();

// for admin
orderRouter.post("/list",adminAuth, allOrders);
orderRouter.put("/status",adminAuth, updateOrderStatus);

// for user
orderRouter.post("/placeorder",authUser, placeOrder);
orderRouter.post("/placeonlineorder", authUser, placeOnlineOrder);
orderRouter.post("/userorders", authUser, userOrders);

orderRouter.post("/verifykhalti", authUser, verifyKhalti);


export default orderRouter;