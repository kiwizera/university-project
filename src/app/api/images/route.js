import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
    const product_images = await prisma.produto_Imagem.findMany();

    return Response.json({ product_images });
}