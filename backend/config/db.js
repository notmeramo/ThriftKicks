import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://ramonrbakuri:ramoramo@cluster0.64ola.mongodb.net/ThriftKicks').then(()=>console.log("DB Connected"));
}