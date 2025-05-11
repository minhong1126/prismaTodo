import { categoryType } from "./categoryType";

export type todoType = {
  todoId?: number;
  title: string;
  memo?: string;
  isDone: boolean;
  category: categoryType;
  date: string;
};
