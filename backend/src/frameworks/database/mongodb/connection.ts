import mongoose from "mongoose";
import {configKeys} from "../../../config";

const connectDB = async () =>{
    try{
        await mongoose.connect(configKeys.MONGO_URL);
        console.log("Database connected successfully");
    }catch(error){
        console.log("error connecting database:"+error);
    }
};

export default connectDB;
