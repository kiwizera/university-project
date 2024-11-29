"use client";
import getModel from "@/app/lib/getModels";
import { useEffect, useState } from "react";

export default function FavoritesList({ favorites }) {

    const [models, setModels] = useState([]);

    useEffect(() => {
        favorites.forEach(async favorite => {
            const resModel = await getModel(favorite.produto_id);
            const models = resModel.model;
    
            setModels([models])
        });
    }, [])

    console.log(models)

    return models.map((model, i) => {
        return <div key={i}>{model.produto_nome}</div>
    })
}
