import connectMongoDB from "@/db/mongodb";
import Ticket from "@/models/ticket.model";
import { NextResponse } from "next/server";

export async function POST(req) {
  const {
    lenderId,
    name,
    email,
    phone,
    borrowedDate,
    dueDate,
    loanAmount,
  } = await req.json();
  try {
    await connectMongoDB();

    const ticketData = await Ticket.create({
      lenderId,
      name,
      email,
      phone,
      borrowedDate,
      dueDate,
      loanAmount,
    });
    if (!ticketData) {
      return NextResponse.json(
        { message: "Ticket creation failed" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { data: ticketData },
      { message: "Ticket created Successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
