import express from "express";
import { addProduct, singleProduct, listProduct } from "../controllers/productController.js";
import upload from "../middleware/multer.js";
 
const productRouter = express.Router();

productRouter.post("/add",upload.fields( ), addProduct);
productRouter.post("/list", listProduct);
productRouter.post("single", singleProduct);

export default productRouter;