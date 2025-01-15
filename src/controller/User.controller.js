import {asyncHandler} from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js";
import {User} from "../models/userModel.js"
import {cloudinary, uploadOnCloudinary  } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/Apiresponse.js";;


const registerUser=asyncHandler(async(req,res)=>{
   //get user details from frontend
   //validation
   //check if user already exist:username, emailid
   //check for images // check foravatar 
//upload them to cloudinary,avatar
//create user object- create entery in db
//remove password and refresh token field from response
//check for user creation 
//return res

const {fullname, email, username,password}=req.body
console.log("email:", email);

// if(fullname===""){
//   throw new ApiError(400, "fullname is required")
// }
//check any data is not empty
if([fullname,email, usename,password].some((field)=>field?.trim()==="")){
throw new ApiError(400, "all field are  required");
}
const existUser=await User.findOne({
  $or:[{username}, {email}]
})
//check username and email is exist or not
if(existUser){
 throw new ApiError(409, "username, email already exist")
}
//check avatar file we get or not
//and also check coverImage we get or not 
const avatarPathLocation=req.files?.avatar[0]?.path
const coverImageLocation=req.files?.coverImage[0]?.path;
if(!avatarPathLocation){
  throw new ApiError(405, "avatar file is required")
}
if(!coverImageLocation){
  throw new ApiError(405, "coverImage is required")
}
const avatar=await uploadOnCloudinary(avatarPathLocation);
const coverImage=await uploadOnCloudinary(coverImageLocation);

if(!avatar){
  throw new ApiError(405, "avatar file is required")
}
//create user object
const user=await User.create({
  fullname,
  avatar:avatar.url,
  coverImage:coverImage?.url || "",
 email,
 password,
 username:username.toLowercase()
})
const createdUser=User.findById(user._id).select(
  "-password -refreshToken"
)
if(!createdUser){
  throw new ApiError(500, "something went wrong required to registering the user")
}

return res.status(201).json(
  new ApiResponse(200, createdUser, "user registered succesfully")
)
 })

export {
  registerUser,
}