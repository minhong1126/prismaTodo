import prisma from "@/lib/prisma";

export const checkUserExist = async (name: string) => {
  const existingUser = await prisma.user.findUnique({
    where: {
      name: name,
    },
  });
  return existingUser;
};

export async function createUser(name: string) {
  try {
    const user = await prisma.user.create({
      data: {
        name: name,
      },
    });
    return user;
  } catch (error) {
    return error;
  }
}
