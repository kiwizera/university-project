import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req, params) {
    const {id} = await params.params
    const orders = await prisma.pedido.findMany({
        where: {
            usuario_id: id
        }
    });

    return Response.json({ orders });
}