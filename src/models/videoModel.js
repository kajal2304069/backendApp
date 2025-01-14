import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoSchema=new mongoose.Schema({
  id:{
    type:String,
    required:true,
  },
  videoFile:{
    type:String, //cloudinary url
    required:true,
  },
  thumbnail:{
    type:String, //cloudinary url
    required:true,
  },
  owner:[
    {
 type:mongoose.Schema.Types.ObjectId,
 ref:"User",

    },
    ],
    title:{
      type:String,
    required:true,
    },
    description:{
      type:String, //cloudinary url
    required:true,
    },
    duration:{
      type:Number,
    },
 views:{
      type:Number,
      default:0,
    },
    isPublish:{
      type:Boolean,
      default:true,
    },
    createdAT:{

    },
    updatedAT:{

    },

},
{timestamps:true}
)
videoSchema.plugin(mongooseAggregatePaginate)

export const video=mongoose.model("video", videoSchema)