import mongoose from "mongoose";
import {DB_NAME} from "../constant.js"; // Ensure the file exists at the correct path

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGOOSE_URL}/${DB_NAME}`);
    console.log(`\nMongoDB connected!! DB Host: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error("MONGODB connection error:", error);
    process.exit(1); // Exit the application if connection fails
  }
};

export default connectDB;
