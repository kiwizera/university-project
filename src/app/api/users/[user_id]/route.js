import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req, params) {
    const {user_id} = await params.params
    const user = await prisma.usuario.findFirst({
        where: {
            usuario_id: user_id
        }
    });

    return Response.json({ user });
}