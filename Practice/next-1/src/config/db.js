// src/lib/db.js
import mongoose from 'mongoose';

console.log('process.env.MONGO_URI ==>',process.env.MONGO_URI);


const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
  if (mongoose.connections[0].readyState) return;

  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB Connected');
  } catch (error) {
    console.error('❌ MongoDB Connection Failed:', error.message);
    process.exit(1);
  }
};

export default connectDB;
