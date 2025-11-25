import axios from "axios";
import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// order using COD
const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;
    const orderData = {
      userId,
      items,
      amount,
      address,
      paymentMethod: "COD",
      payment: false,
      date: Date.now(),
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    await userModel.findByIdAndUpdate(userId, { cartData: {} });
    res
      .status(201)
      .send({ success: true, message: "Order placed successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: error.message });
  }
};

// order using khalti payment
const placeOnlineOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;

    const payload = {
      return_url: process.env.KHALTI_RETURN_URL,
      website_url: process.env.KHALTI_WEBSITE_URL,
      amount: amount * 100,
      purchase_order_id: "order_" + Date.now(),
      purchase_order_name: "Order Payment",
      customer_info: {
        name: `${address.firstName} ${address.lastName}`,
        email: address.email,
        phone: address.phone,
      },
      merchant_username: "Shoppy ecommerce"
    };

    const khaltiResponse = await axios.post(
      "https://dev.khalti.com/api/v2/epayment/initiate/",
      payload,
      {
        headers: {
          Authorization: `Key ${process.env.KHALTI_SECRET_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    res.status(200).send({
      success: true,
      payment_url: khaltiResponse.data.payment_url,
      pidx: khaltiResponse.data.pidx,
    });
  } catch (error) {
    console.log("hi");
    console.log(error.response?.data || error);
    res
      .status(500)
      .send({ success: false, message: "Khalti payment init failed" });
  }
};

// verify khalti payment
const verifyKhalti = async (req, res) => {
  try {
    const { pidx, userId, items, amount, address } = req.body;

    const verifyResponse = await axios.post(
      "https://dev.khalti.com/api/v2/epayment/lookup/",
      { pidx },
      {
        headers: {
          Authorization: `Key ${process.env.KHALTI_SECRET_KEY}`,
        },
      }
    );

    if (verifyResponse.data.status === "Completed") {
      const orderData = {
        userId,
        items,
        amount,
        address,
        paymentMethod: "KHALTI",
        payment: true,
        date: Date.now(),
      };

      const newOrder = new orderModel(orderData);
      await newOrder.save();

      await userModel.findByIdAndUpdate(userId, { cartData: {} });

      res.status(200).send({ success: true, message: "Payment verified & order placed" });
    } else {
      res.status(400).send({ success: false, message: "Payment not completed" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: "Verification failed" });
  }
};

// orders data for admin panel
const allOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.status(200).send({ success: true, orders });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: error.message });
  }
};

// orders data for user for frontend
const userOrders = async (req, res) => {
  try {
    const { userId } = req.body;
    const orders = await orderModel.find({ userId });
    res.status(200).send({ success: true, orders });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: error.message });
  }
};

// update order status for admin panel
const updateOrderStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body;
    await orderModel.findByIdAndUpdate(orderId, { status });
    res
      .status(200)
      .send({ success: true, message: "Order status updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: error.message });
  }
};

export {
  placeOrder,
  placeOnlineOrder,
  allOrders,
  userOrders,
  updateOrderStatus,
  verifyKhalti
};
