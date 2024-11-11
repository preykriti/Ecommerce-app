import mongoose from "mongoose";

const connectDB = async()=>{
    try {
       await mongoose.connect(
         `${process.env.MONGODB_URI}/shoppy`
       ); 
       console.log("db connection established");
    } catch (error) {
       console.log("db connection failed");
       console.log(error.message); 
    }

}

export default connectDB;