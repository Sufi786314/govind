import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true, 
    },
    uid:{
        type:String,
        required:true,
        unique:true
    },
    role:{
        type:Number,
        default: 0,
    }
},{timestamps:true})

export default mongoose.model('users',userSchema);