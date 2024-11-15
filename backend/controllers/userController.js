import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";
import { validationResult } from "express-validator";
import jwt from "jsonwebtoken";
const createToken = (id)=>{
    return jwt.sign({id}, process.env.JWT_TOKEN);
}

const userRegister = async (req, res) => {
    //checking for validation
    const result = validationResult(req);
    if(!result.isEmpty()){
        return res.status(400).json({success:false, error: result.array()});
    }

    const {name, email, password}=req.body;
    //checking if that user already exists
    try {
        let user = await userModel.findOne({email});
        if(user){
            return res.status(400).json({success:false, error:"The user already exists"});
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        user = await userModel.create({name, email, password: hashedPassword});

        const authtoken = createToken(user._id);
        res.status(200).json({success:true, authtoken})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({success:false, message: error.message}) 
    }


};

const userLogin = async (req, res) => {
    const {email, password} = req.body;
  try {
    //check if user exists
    let user = await userModel.findOne({email});
    if(!user){
        return res.status(400).json({success:false, message:"The user doesn't exist."});
    }
    
    //check if password is correct
    let comparePassword = await bcrypt.compare(password, user.password);
    if(!comparePassword){
        return res.status(400).json({success:false, message:"Invalid credential"});
    }

    const token = createToken(user._id);
    res.status(200).json({success: true, message:token})
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
    
  }
  //
};
const adminLogin = async (req, res) => {};


export {userLogin, userRegister, adminLogin};