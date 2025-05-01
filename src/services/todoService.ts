import prisma from "@/lib/prisma";
import { todoType } from "@/type/todoType";

export const createTodo = async (data: todoType) => {
  const todo = await prisma.todo.create({
    data,
  });
  return todo;
};

export const getTodoList = async (date: Date) => {
  const todoList = await prisma.todo.findMany({
    where: {
      date: date,
    },
  });
  return todoList;
};
