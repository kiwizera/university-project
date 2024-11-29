import getModelImages from "@/app/lib/getModelImages";
import getModel from "@/app/lib/getModels";
import ModelDetails from "@/components/modelDetails";
import CheckoutContent from "@/modules/auth/components/checkout-content";
import styles from './page.module.css';

export default async function Modelo({ params }) {

    const { id } = await params;

    const resModel = await getModel(id);
    const model = resModel.model;

    const resModelImage = await getModelImages(id);

    function numberWithPoint(x) {
        x = x.toString();
        var pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(x))
            x = x.replace(pattern, "$1.$2");
        return x;
    }
    const formatedPrice = numberWithPoint(model.produto_preco);

    const data = {
        id: model.produto_id,
        name: model.produto_nome,
        price: formatedPrice,
        description: model.produto_desc,
        descount: model.produto_desconto,
        category_id: model.categoria_id,
        images: resModelImage.product_images
    }

    const order = {
        id: model.produto_id,
        name: model.produto_nome,
        price: model.produto_preco,
        descount: model.produto_desconto,
        category_id: model.categoria_id
    }

    return <div className={styles.page}>
        <>
            <ModelDetails data={data} />
            <CheckoutContent data={order} />
        </>
    </div>
}
