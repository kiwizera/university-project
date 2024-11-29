import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req, params) {
    const {id} = await params.params
    const product_images = await prisma.produto_Imagem.findMany({
        where: {
            produto_id: id
        }
    });

    return Response.json({ product_images });
}