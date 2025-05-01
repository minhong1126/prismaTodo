import prisma from "@/lib/prisma";
import { categoryType } from "@/type/categoryType";

export const createCategory = async (data: categoryType) => {
  const category = await prisma.category.create({
    data,
  });
  return category;
};

export const checkCategoryExist = async (name: string): Promise<boolean> => {
  const existingUser = await prisma.user.findUnique({
    where: {
      name,
    },
  });
  return !!existingUser;
};

export const getcategoryList = async () => {
  const categoryList = await prisma.category.findMany();
  return categoryList;
};
