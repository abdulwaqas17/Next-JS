// src/models/Employee.js
import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  department: String,
  designation: String,
  phone: String,
  avatarUrl : String
}, { timestamps: true });

const Employee = mongoose.models.EmployeesModel || mongoose.model('EmployeesModel', employeeSchema);

export default Employee;
