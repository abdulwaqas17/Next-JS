// src/models/Employee.js
import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  department: String,
  phone: String,
}, { timestamps: true });

const Employee = mongoose.model('Employee', employeeSchema);

export default Employee;
