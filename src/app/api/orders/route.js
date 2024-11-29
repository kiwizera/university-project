import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
    const orders = await prisma.pedido.findMany();

    return Response.json({ orders });
}