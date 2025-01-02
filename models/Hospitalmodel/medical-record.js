const mongoose=require("mongoose");
const medicalrecordSchema=new mongoose.Schema({


},{timestamps:true})
export const medicalrecord=mongoose.model("medicalrecode", medicalrecordSchema)