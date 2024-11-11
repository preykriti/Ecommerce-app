import bcrypt from "bcrypt";
import userModel from "../userModel.js";
import { validationResult } from "express-validator";



const userRegister = async (req, res) => {
    //checking for validation
    const result = validationResult(req);
    if(!result.isEmpty()){
        return res.status(400).json({success:false, error: result.array()});
    }

    const {name, email, password}=req.body();
    //checking if that user already exists
    try {
        let user = userModel.findOne({email});
        if(user){
            return res.status(400).json({success:false, error:"The user already exists"});
        }

        user = await userModel.create({name, email, password})
        
    } catch (error) {
        
    }


};

const userLogin = async (req, res) => {
  //checking for validation
  //
};
const adminLogin = async (req, res) => {};


export {userLogin, userRegister, adminLogin};