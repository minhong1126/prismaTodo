import { checkUserExist, createUser } from "@/services/userServices";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name } = body;

    // name의 값이 없을 때는 400 반환
    if (!name) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    // 이미 동일한 이름의 사용자가 있을 때는 200과 그 행 반환, 없을 때는 생성 후 201과 그 행 반환
    const isUserExist = await checkUserExist(name);
    if (isUserExist) {
      return NextResponse.json(isUserExist, { status: 200 });
    } else {
      const newUser = await createUser(name);
      return NextResponse.json(newUser, { status: 201 });
    }
  } catch (error) {
    console.error("Error in User Post:", error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

export async function GET(userId: number) {}
