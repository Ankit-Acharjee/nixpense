import connectMongoDB from "@/db/mongodb";
import User from "@/models/user.model";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { clerkId } = params;
  try {
    await connectMongoDB();
    const userData = await User.findOne({clerkUserID:clerkId});
    if (!userData)
      return NextResponse.json({ message: "No user found" }, { status: 400 });

    return NextResponse.json(
      { data: userData },
      { message: "User details fetched" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
