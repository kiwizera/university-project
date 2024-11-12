import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
    const models = await prisma.produto.findMany();

    return Response.json({ models });
}