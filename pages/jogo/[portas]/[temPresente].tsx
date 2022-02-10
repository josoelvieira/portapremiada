import styles from "../../../styles/jogo.module.css";
import { useState } from "react";
import Porta from "../../../componets/Porta";
import { atualizarPortas, criarPortas } from "../../../function/porta";
import Link from "next/link";
import { useRouter } from "next/router"

export default function telaDoJogo() {
    const router = useRouter()

    const [portas, setPorta] = useState([]);

    function renderizarPortas() {
        return portas.map((porta) => {
            return (
                <Porta
                    key={porta.numero}
                    value={porta}
                    onChange={(novaPorta) =>
                        setPorta(atualizarPortas(portas, novaPorta))
                    }
                />
            );
        });
    }
    return (
        <div className={styles.jogo}>
            <div className={styles.portas}>
                {renderizarPortas()}
            </div>
            <div className={styles.botoes}>
            <Link href="/">
                <button>Reniciar</button>
            </Link>
            </div>
        </div>
    );
}
