import styles from "./cardModels.module.css";
import { PrismaClient } from '@prisma/client';
import FormModel from "./formModel";

export default async function CardModels() {

    const prisma = new PrismaClient();
    const modelsCount = await prisma.produto.count({
        where: {
            produto_ativo: true
        }
    });

    return (
        <div className={styles.card}>
            <div className={styles.categories}>
                <h2 className={styles.active}>Comprar carros</h2>
                <h2>Comprar motos</h2>
            </div>
            <div className={styles.status}>
                <button value="all" className={styles.active}>Todos</button>
                <button value="new">Novos</button>
                <button value="used">Usados</button>
            </div>
            <FormModel modelsCount={modelsCount} />
        </div>
    );
}
