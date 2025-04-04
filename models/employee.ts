import mongoose, { Schema } from 'mongoose';

const employeeSchema = new Schema(
  {
    name: String,
    position: String,
  },
  {
    timestamps: true,
  }
);

const Employee = mongoose.models.Employee || mongoose.model('Employee', employeeSchema);

export default Employee;
