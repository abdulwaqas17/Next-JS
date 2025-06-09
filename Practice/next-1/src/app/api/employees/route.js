import { NextResponse } from 'next/server';
import connectDB from '@/config/db';
import Employee from '@/models/employee';

export async function GET() {
  try {

    await connectDB();
  const employees = await Employee.find();
  return NextResponse.json(employees);

  } catch (error) {
    console.error('Error fetching employees:', error);
    return NextResponse.json({ error: 'Failed to fetch employees' }, { status: 500 });
  }
}


