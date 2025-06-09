import { NextResponse } from 'next/server';
import connectDB from '@/config/db';
import Employee from '@/models/employee';

export async function POST(request) {
try {
    await connectDB();
  const body = await request.json();
  console.log('Request body:', body);
  const newEmp = await Employee.create(body); // Create a new employee using the Employee model
  console.log(newEmp);
  
  return NextResponse.json(newEmp, { status: 201 });
} catch (error) {
  console.error('Error creating employee:', error);
  return NextResponse.json({ error: 'Failed to create employee' }, { status: 500 });
}
}