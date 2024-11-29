import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req, params) {
    const {model_id} = await params.params
    const model = await prisma.produto.findFirst({
        where: {
            produto_id: model_id
        }
    });

    return Response.json({ model });
}