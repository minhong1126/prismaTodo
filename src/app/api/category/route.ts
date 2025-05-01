import { createCategory, checkCategoryExist } from "@/services/categoryService";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { userId, name, color } = body;

    const isCategoryExist = await checkCategoryExist(name);
    if (isCategoryExist) {
      return NextResponse.json(
        { message: "이미 존재하는 카테고리리입니다." },
        { status: 400 }
      );
    } else {
      const user = await createCategory({ userId, name, color });
      return NextResponse.json(user);
    }
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(error);
  }
}
