import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
    const favorites = await prisma.item_Favorito.findMany();

    return Response.json({ favorites });
}