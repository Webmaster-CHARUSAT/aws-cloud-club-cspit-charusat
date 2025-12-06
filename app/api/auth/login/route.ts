import connect from "@/lib/db";
import User from "@/schema/User";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";

export async function POST(request: NextRequest, response: NextResponse) {
  connect();
  const { email, password } = await request.json();

  if (!email || !password)
    return NextResponse.json(
      { message: "All felids are required" },
      { status: 400 }
    );

  try {
    const dbUser = await User.findOne({ email });
    if (!dbUser)
      return NextResponse.json(
        { message: "Invalid Credentials" },
        { status: 400 }
      );

    if (dbUser.password !== password)
      return NextResponse.json(
        { message: "Invalid Credentials" },
        { status: 404 }
      );
    const token = jwt.sign({ email: dbUser.email }, process.env.JWT_SECRET!, {
      expiresIn: "1h",
    });

    const cookie = serialize("session", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24,
      path: "/",
    });

    return NextResponse.json(
      { message: "Success" },
      { headers: { "Set-Cookie": cookie } }
    );
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
