const mongoose=require('mongoose');

const orderItemSchema=new mongoose.Schema({
   productId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Product",
   },
   quantity:{
    type:Number,
    required:true,
   },
},{timestamps})
const OrderSchema=new mongoose.Schema({
 orderPrice:{
  type:Number,
  required:true,
 },
 customer:{
  type:mongoose.Schema.Types.ObjectId,
  ref:"User",
 },
orderItems:{
  type:[orderItemSchema]
},
address:{
  type:String,
  required:true,
},
status:{
  type:String,
  enum:[
    "pending",
    "Cancelled",
    "Delivery",
  ],
  default:"pending"
},
},
{timestamps:true})
export const Order=mongoose.model("Order", OrderSchema)