import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => new PrismaClient();

type PrismaClientSingletonParams = ReturnType<typeof prismaClientSingleton>;
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingletonParams | undefined;
};

const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
