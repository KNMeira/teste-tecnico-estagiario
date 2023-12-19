'use client';
import styles from "./components.module.css";

export default function Btn() {

    const onClick = () => {
        alert("O Botão Clique-me foi clicado!")
    }

    return (
        <div className={styles["div-respostas"]}>
            <button className={styles["btn-Clique-me"]} onClick={onClick} >Clique-me</button>
        </div>
    );
}
