import mongoose from 'mongoose';
const adminSchema = new mongoose.Schema({

  email: String,
  password: String
})

const adminModel =  mongoose.models.adminModel ||  mongoose.model('adminModels', adminSchema);
export default adminModel;