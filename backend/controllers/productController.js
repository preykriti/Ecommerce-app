import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";
// to add a product
const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller,
    } = req.body;
    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    const images = [image1, image2, image3, image4].filter(
      (img) => img !== undefined
    );

    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );

    const productData = {
      name,
      description,
      price: Number(price),
      category,
      subCategory,
      sizes: JSON.parse(sizes),
      bestseller: bestseller === "true" ? true : false,
      image: imagesUrl,
      date: Date.now(),
    };

    console.log(productData);

    const product = new productModel(productData);
    await product.save();
    res.status(201).json({ success: true, message: "Product added successfully." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};


// to list all products
const listProduct = async (req, res) => {
    try {
        const products = await productModel.find({});
        res.status(200).json({success:true, products})
    } catch (error) {
        console.log(error);
        res.status(500).json({success:false, message:error.message});
    }
};

// to remove a product
const removeProduct = async (req, res) => {
    try {
        const { id } = req.body;
        await productModel.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Product removed successfully." });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
};


// to get a single product info
const singleProduct = async (req, res) => {
    try {
        const { id } = req.body;
        const product = await productModel.findById(id);
        res.status(200).json({ success: true, product });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

export { addProduct, listProduct, singleProduct, removeProduct };
