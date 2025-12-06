import connect from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import Join from "@/schema/Join";

export async function GET(request: NextRequest, response: NextResponse) {
  const joins = await Join.find();
  return NextResponse.json(joins);
}

export async function POST(request: NextRequest, response: NextResponse) {
  connect();
  const { name, email, phone, message } = await request.json();

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!name || !email || !phone || !message)
    return NextResponse.json(
      { message: "All felids are required" },
      { status: 400 }
    );

  if (!emailRegex.test(email))
    return NextResponse.json({ message: "Invalid Email" }, { status: 400 });

  if (phone.length != 10)
    return NextResponse.json({ message: "Invalid Phone" }, { status: 400 });

  try {
    const newJoin = new Join({ name, email, phone, message });
    await newJoin.save();
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }

  return NextResponse.json({ message: "Success" });
}
