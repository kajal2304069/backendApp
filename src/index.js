import connectDB from "./db/index.js";
import dotenv from "dotenv";

import  {app} from "./app.js";

dotenv.config({
  path:'./env'
})

connectDB()
.then(()=>{
  app.listen(process.env.PORT || 8000, ()=>{
    console.log(`server is running at port: ${process.env.PORT}`);
  })
})
.catch((err)=>{
  console.log("MONGODB CONNECTION FAILED!!!", err);
})




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

