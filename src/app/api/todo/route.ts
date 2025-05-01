import { createTodo } from "@/services/todoService";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, memo, isDone, category, date, userId } = body;

    const todo = await createTodo({
      title,
      memo,
      isDone,
      category,
      date,
      userId,
    });

    return NextResponse.json(todo);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to create todo" },
      { status: 500 }
    );
  }
}
