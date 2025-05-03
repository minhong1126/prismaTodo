import prisma from "@/lib/prisma";
import { categoryType } from "@/type/categoryType";

export const createCategory = async ({ name, userId, color }: categoryType) => {
  const category = await prisma.category.create({
    data: {
      name,
      color,
      user: {
        connect: {
          userId: userId,
        },
      },
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

export const getcategoryList = async () => {
  const categoryList = await prisma.category.findMany();
  return categoryList;
};
