import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";


// order using COD
const placeOrder = async (req, res) => {
    try {
        const {userId, items, amount, address} = req.body;
        const orderData = {
            userId, items, amount, address, paymentMethod:"COD", payment: false, date: Date.now()
        }

        const newOrder = new orderModel(orderData);
        await newOrder.save();

        await userModel.findByIdAndUpdate(userId, {cartData:{}});
        res.status(201).send({success:true, message:"Order placed successfully"});

    } catch (error) {
        console.log(error);
        res.status(500).send({success:false, message:error.message});
    }
}

// order using online payment
const placeOnlineOrder = async (req, res) => {
}

 
// orders data for admin panel
const allOrders = async (req, res) => {
}

// orders data for user for frontend
const userOrders = async (req, res) => {
    try {
        const {userId} = req.body;
        const orders = await orderModel.find({userId}).sort({date:-1});
        res.status(200).send({success:true, orders});
    } catch (error) {
        console.log(error);
        res.status(500).send({success:false, message:error.message});
    }
}

// update order status for admin panel 
const updateOrderStatus = async (req, res) => {
}


export {placeOrder, placeOnlineOrder, allOrders, userOrders, updateOrderStatus};