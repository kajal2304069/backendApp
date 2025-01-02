const mongoose=require("mongoose");
const HospitalSchema=new mongoose.Schema({


},{timestamps:true})
export const hospital=mongoose.model("hospital", HospitalSchema)