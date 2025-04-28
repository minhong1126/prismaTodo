import prisma from "@/lib/prisma";

export const checkUserExist = async (name: string): Promise<boolean> => {
  const existingUser = await prisma.user.findUnique({
    where: {
      name,
    },
  });
  return !!existingUser;
};

export async function createUser(data: { name: string }) {
  const user = await prisma.user.create({
    data,
  });
  return user;
}
