import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
    const users = await prisma.usuario.findMany();

    return Response.json({ users });
}