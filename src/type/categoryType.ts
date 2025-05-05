import { categoryColor } from "./categoryColor";

export type categoryType = {
  userId: number;
  categoryId?: number;
  name: string;
  color: categoryColor;
};
