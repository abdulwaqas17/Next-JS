import mongoose from "mongoose";

console.log("process.env.MONGO_URI ==>", process.env.MONGO_URI);

const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
  // if (mongoose.connection[0].readyState) return;
    if (mongoose.connections[0].readyState) return;
  try {
    mongoose.connect(MONGO_URI);
    console.log('db connected');
    
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;