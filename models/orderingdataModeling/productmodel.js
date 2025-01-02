import { Category } from "./categorymodel";

const mongoose=require("mongoose");

const ProductSchema=new mongoose.Schema({
description:{
    required:true,
    type:String,
},
name:{
    required:true,
    type:String,
},
productImage:{
    type:String,
},
price:{
type:Number,
default:0,
},
stock:{
    default:0,
    type:Number,
},
category:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Category",
    required:true,
  },
Owner:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
  },
  

},
  {timestamps:true}
)
export const Product=mongoose.model('Product', ProductSchema);
