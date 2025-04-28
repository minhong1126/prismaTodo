import { checkUserExist, createUser } from "@/services/userServices";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name } = body;

    const isUserExist = await checkUserExist(name);
    if (isUserExist) {
      return NextResponse.json(
        { message: "이미 존재하는 이름입니다." },
        { status: 400 }
      );
    } else {
      const user = await createUser({ name });
      return NextResponse.json(user);
    }
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(error);
  }
}
