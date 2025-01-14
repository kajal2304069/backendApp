import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const UserSchema=new mongoose.Schema({
  id:{
    type:String,
    required:true,
  },
  watchHistory:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"video"
  },],
  username:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
    trim:true,
    index:true,
  },
  email:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
    trim:true,
  },
  fullname:{
    type:String,
    required:true,
    trim:true,
    index:true,
  },
  avatar:{
    type:String,  //clodinary url
    required:true,

  },
  coverImage:{
    type:String, //clodinary url
  },
  password:{
    type:String,
    required:[true,'password is required']
  },
  refreshToken:{
    type:String,
  },
  createAT:{
   
  },
  updateAT:{

  },
},
{timestamps:true}
)
//middleware 
//which is if updated in database then password is changed
UserSchema.pre("save", async function(next){
  if(!this.isModified("password")) return next();
  this.password=await bcrypt.hash(this.password, 10);
  next();
})
//it is password compare 
UserSchema.methods.isPasswordCorrect=async function (password){
  return await bcrypt.compare(password, this.password)
}

UserSchema.methods.generateAccessToken= function() {
  return jwt.sign({
    _id:this._id,
    email:this.email,
    username:this.username,
    fullname:this.fullname,
  },
process.env.ACCESS_TOKEN_SECRET,
{
  expiresIN:process.env.ACCESS_TOKEN_EXPIRY
})
}
UserSchema.methods.generateRefreshToken= function(){
  return jwt.sign({
    _id:this._id,
  },
process.env.REFRESH_TOKEN_SECRET,
{
  expiresIN:process.env.REFRESH_TOKEN_EXPIRY
})
}

export const User=mongoose.model('User', UserSchema);
