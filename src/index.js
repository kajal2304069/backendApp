import connectDB from "./db/index.js";
import dotenv from "dotenv";


dotenv.config({
  path:'./env'
})

connectDB();



// const mongoose=require("mongoose");
// const express=require("express");
// const app=express();

// (async()=>{
//   try{
// await mongoose.connect(`${process.env.MONGOOSE_URL}/${DB_NAME}`)
// app.on("error", (error)=>{
//   console.log("ERRR:", error);
//   throw error;
// })
// app.listen(process.env.PORT, ()=>{
//   console.log(`App is Listening on port ${process.env.PORT}`);

// })
//   }catch(error){
//  console.error("ERROR", error)
//  throw err;
//   }
// })()

