import prisma from "@/lib/prisma";
import { categoryType } from "@/type/categoryType";

export const createCategory = async ({ name, userId, color }: categoryType) => {
  const category = await prisma.category.create({
    data: {
      color,
      name,
      userId,
    },
  });
  return category;
};

export const checkCategoryExist = async (name: string): Promise<boolean> => {
  const existingCategory = await prisma.category.findFirst({
    where: {
      name: name,
    },
  });
  return !!existingCategory;
};

export const getCategoryList = async () => {
  const categoryList = await prisma.category.findMany();
  return categoryList;
};
