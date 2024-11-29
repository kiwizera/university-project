"use server";
import AuthService from "@/modules/auth/services/auth-service";
import { PrismaClient } from "@prisma/client";
import { cookies } from "next/headers";
import deleteFavorite from "./deleteFavorite";

export default async function createFavorite(productId) {

    const prisma = new PrismaClient();

    const session = await AuthService.isSessionValid();
    let userId;
  
    if (session) {
        const jwt = (await cookies()).get('session').value;
        const {sub} = await AuthService.openSessionToken(jwt);
        userId = sub;

        const checkItem = await prisma.item_Favorito.findFirst({
            where: {
                usuario_id: userId,
                produto_id: productId
            }
        });

        if (checkItem) {
            deleteFavorite(checkItem.item_id)
            return
        }
        
        await prisma.item_Favorito.create({
            data: {
                usuario_id: userId,
                produto_id: productId
            }
        });
    } else {
        console.log('Você precisa fazer login para favoritar algum modelo!');
    }
}