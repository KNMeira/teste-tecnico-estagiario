'use client';
import { useState } from 'react'
import styles from "./components.module.css";

export default function Contador() {
    const [contador, setContador] = useState(0)

    return (
        <div className = {styles["div-respostas"]}>
            <div>
            <h2 style={{ fontWeight: 'bold', fontSize: 20 }}>
              Clique para Incrementar ou Decrementar o Contador
            </h2>
            <p style={{ fontWeight: 'bold', fontSize: 28, textAlign: 'center', marginTop: 20}}>{contador}</p>

            <div style={{textAlign: 'center'}} >
            <button onClick={() => setContador(contador - 1)} className={styles["btn-Contador"]}>Decrementar</button>
            <button onClick={() => setContador(contador + 1)} className={styles["btn-Contador"]}>Incrementar</button>
            </div>
            </div>
        </div>
    )
    
}
