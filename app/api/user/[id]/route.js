import connectMongoDB from "@/db/mongodb";
import User from "@/models/user.model";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { id } = params;
  try {
    await connectMongoDB();
    const userData = await User.findById(id);
    return NextResponse.json({ data: userData }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
