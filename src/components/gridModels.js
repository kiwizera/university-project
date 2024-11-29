import { PrismaClient } from '@prisma/client';
import styles from "./gridModels.module.css";
import Image from 'next/image';
import Link from 'next/link';

export default async function GridModels() {

    const prisma = new PrismaClient();

    const models = await prisma.produto.findMany({
        where: {
            produto_ativo: true
        }
    });

    return (
        <div className={styles.grid}>
            {models.map(async (model, i) => {

                function numberWithCommas(x) {
                    x = x.toString();
                    var pattern = /(-?\d+)(\d{3})/;
                    while (pattern.test(x))
                        x = x.replace(pattern, "$1.$2");
                    return x;
                }
                const precoFormatado = numberWithCommas(model.produto_preco)

                const productImage = await prisma.produto_Imagem.findMany({
                    where: {
                        produto_id: model.produto_id
                    }
                });

                return <Link href={`/modelos/${model.produto_id}`} key={i} className={styles.card}>
                    <img src={`${productImage[0].imagem_url}`} alt={model.produto_nome} />
                    <h2>{model.produto_nome}</h2>
                    <span>{model.produto_desc}</span>
                    <strong>R$ {precoFormatado}</strong>
                    <button className={styles.button}>Ver modelo</button>
                </Link>
            })}
        </div>
    )
}
