'use client';
import { useState } from 'react'
import styles from "./components.module.css";

export default function ProductList({ produtos }) {
    return (
        <div className={styles["div-respostas"]}>
            <div>
                <ul>
            {
                produtos.map(produto => {
                    return (<li key={produto.id} style={{listStyle: 'none', textAlign: 'center'}}>{produto.nome} - {produto.preco}</li>)
                })
            }

                </ul>
            </div>

        </div>
    )
}