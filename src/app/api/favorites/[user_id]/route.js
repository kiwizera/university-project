import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req, params) {
    const {id} = await params.params
    const favorites = await prisma.item_Favorito.findMany({
        where: {
            usuario_id: id
        }
    });

    return Response.json({ favorites });
}