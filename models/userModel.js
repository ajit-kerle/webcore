import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{tyep:String},
    username:{type:String},
    email:{type:String},
    phone:{type:String},
    password:{type:String}
},{timestamps:true})

const user=mongoose.model("user",userSchema)

export default user