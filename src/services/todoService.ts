import prisma from "@/lib/prisma";
import { todoType } from "@/type/todoType";

export const createTodo = async ({
  title,
  memo,
  isDone,
  category,
  date,
}: todoType) => {
  const todo = await prisma.todo.create({
    data: {
      title: title,
      memo: memo,
      isDone: isDone,
      category: {
        connect: {
          name: category,
        },
      },
      date: date,
    },
  });
  return todo;
};

export const getTodoList = async (date: string) => {
  const todos = await prisma.todo.findMany({
    where: {
      date: {
        equals: date,
      },
    },
    include: {
      category: true,
    },
  });
  return todos;
};
