const mongoose=require('mongoose');

const subTodoSchema=new mongoose.Schema({
  content:{
    type:String,
    required:true,
},
complete:{
  type:Boolean,
  default:false,
},
createdby:{
  type:mongoose.Schema.Types.ObjectId,
  ref:"User",
},

},
  {timestamps:true}
)
export const Subtodo=mongoose.model('Subtodo',subTodoSchema)
