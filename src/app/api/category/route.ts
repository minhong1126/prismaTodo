import { createCategory, checkCategoryExist } from "@/services/categoryService";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { userId, name, color } = body;

    const isCategoryExist = await checkCategoryExist(name);
    if (isCategoryExist) {
      return NextResponse.json(
        { message: "이미 존재하는 카테고리입니다." },
        { status: 400 }
      );
    } else {
      const category = await createCategory({ userId, name, color });
      return NextResponse.json(category);
    }
  } catch (error) {
    console.error("Error in Category Post:", error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
