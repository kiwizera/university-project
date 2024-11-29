"use server";
import { PrismaClient } from "@prisma/client"

export default async function deleteFavorite(itemId) {

    const prisma = new PrismaClient();
    
    await prisma.item_Favorito.delete({
        where: {
            item_id: itemId
        }
    });
}