// import mongoose from "mongoose";

import connectDB from "@/config/db";
import { NextResponse } from "next/server";
import admin from "@/models/admin";

export async function POST(request) {
  try {
    await connectDB();
//     const collections = await mongoose.connection.db.listCollections().toArray();
// console.log("Collections in DB:", collections.map(col => col.name));
    const body = await request.json();
    const { email, password } = body;

    console.log(email,password);
    
    const adminCheck = await admin.findOne({email,password});

    console.log('adminCheck  =>',adminCheck);
    
    if (adminCheck) {
      return NextResponse.json(
        { message: "login successfully" },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: "Invalid email or Password" },
        { status: 404 }
      );
    }
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "Error in Login" }, { status: 500 });
  }
}
