"use client";
import getModel from "@/app/lib/getModels";
import { useEffect, useState } from "react";

export default function OrdersList({ orders }) {

    const [models, setModels] = useState([]);

    useEffect(() => {
        orders.forEach(async order => {
            const resModel = await getModel(order.produto_id);
            const models = resModel.model;
    
            setModels([models])
        });
    }, [])

    console.log(models)

    return models.map((model, i) => {
        return <div key={i}>{model.produto_nome}</div>
    })
}
