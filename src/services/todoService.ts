import prisma from "@/lib/prisma";

type TodoProps = {
  title: string;
  memo?: string;
  isDone: boolean;
  category: string;
};

export const addTodo = async (data: { todo: TodoProps }) => {
  const addedTodo = await prisma.todo.create({
    data,
  });
  return addedTodo;
};
