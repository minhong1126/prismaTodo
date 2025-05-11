import { createTodo, getTodoList } from "@/services/todoService";
import { NextResponse, NextRequest } from "next/server";
import { todoType } from "@/type/todoType";

export type TodoCreateInput = Omit<todoType, "todoId">;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, memo, isDone, category, date } = body;

    const todo = await createTodo({
      title,
      memo,
      isDone,
      category,
      date,
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

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const dateString = searchParams.get("date");

  if (!dateString) {
    return NextResponse.json({ error: "Missing date" }, { status: 400 });
  }

  try {
    const todos = await getTodoList(dateString);
    return NextResponse.json({ todos });
  } catch (error) {
    return NextResponse.json(
      { error: `Failed to fetch todos: ${error}` },
      { status: 500 }
    );
  }
}
