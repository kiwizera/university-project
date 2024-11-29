import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req, params) {
    const {id} = await params.params
    const user = await prisma.usuario.findFirst({
        where: {
            usuario_id: id
        }
    });

    return Response.json({ user });
}