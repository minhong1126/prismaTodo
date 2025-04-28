// src/lib/prisma.ts
import { PrismaClient } from "../generated/prisma"; // 경로를 상대 경로로 수정
const prisma = new PrismaClient();

export default prisma;
