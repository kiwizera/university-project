"use client";
import { useState } from "react";
import styles from "./formModel.module.css";

export default function FormModel({ modelsCount }) {

    const [inputModelValue, setInputModelValue] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        console.log(inputModelValue);
    }

    return (
        <form className={styles.form}>
            <input type="text" placeholder="Digite a marca ou modelo do carro" onInput={(e) => setInputModelValue(e.target.value)} />
            <button type="submit" onClick={handleSubmit}>VER OFERTAS ({modelsCount})</button>
        </form>
    )
}
