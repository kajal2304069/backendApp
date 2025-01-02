const mongoose=require("mongoose");
const pateintSchema=new mongoose.Schema({
name:{
  
}

},{timestamps:true})
export const patient=mongoose.model("potient", pateintSchema)