import mongoose from "mongoose";

const connectDB = async()=>{
    try {
       await mongoose.connect(
         `mongodb+srv://prakriti_db:prakritiDB2024@cluster0.g2llg.mongodb.net/`
       ); 
       console.log("db connection established");
    } catch (error) {
       console.log("db connection failed");
       console.log(error.message); 
    }
}

export default connectDB;