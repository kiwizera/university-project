import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req, params) {
    const {id} = await params.params
    const model = await prisma.produto.findFirst({
        where: {
            produto_id: id
        }
    });

    return Response.json({ model });
}