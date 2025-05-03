import { checkUserExist, createUser } from "@/services/userServices";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name } = body;

    if (!name) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    const existingUser = await checkUserExist(name);

    if (existingUser) {
      return NextResponse.json(existingUser, { status: 200 });
    } else {
      const newUser = await createUser(name);
      return NextResponse.json(newUser, { status: 201 });
    }
  } catch (error) {
    console.error("Error in POST request:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET(userId: number) {}
