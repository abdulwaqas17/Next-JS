import { NextResponse } from 'next/server';
import connectDB from '@/config/db';
import Employee from '@/models/employee';

export async function POST(request) {
try {
    await connectDB();
  const body = await request.json();
  const newEmp = await Employee.create(body);
  console.log(newEmp);
  
  return NextResponse.json(newEmp, { status: 201 });
} catch (error) {
  console.error('Error creating employee:', error);
  return NextResponse.json({ error: 'Failed to create employee' }, { status: 500 });
}
}