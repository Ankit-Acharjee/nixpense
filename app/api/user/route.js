import connectMongoDB from "@/db/mongodb";
import User from "@/models/user.model";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { clerkUserID, name, email, phoneNo } = await req.json();
    await connectMongoDB();
    const userData = await User.create({ clerkUserID, name, email, phoneNo });
    if (!userData) {
      return NextResponse.json({message:"User Creation Failed"},{status:400});
    }
    return NextResponse.json(
      { data: userData },
      { message: "User Created" },
      { Status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: error.message }, { Status: 500 });
  }
}
