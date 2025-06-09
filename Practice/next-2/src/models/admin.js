// models/adminModel.js
import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema(
  {
    email: String,
    password: String
  },
  {
    collection: 'adminModel' // 👈 This MUST MATCH the actual collection name in MongoDB Compass
  }
);

const adminModel = mongoose.models.adminModel || mongoose.model('adminModel', adminSchema);

export default adminModel;
