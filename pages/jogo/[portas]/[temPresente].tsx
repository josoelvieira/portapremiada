import styles from "../../../styles/jogo.module.css";
import { useEffect, useState } from "react";
import Porta from "../../../componets/Porta";
import { atualizarPortas, criarPortas } from "../../../function/porta";
import Link from "next/link";
import { useRouter } from "next/router"


export default function TelaDoJogo() {
    const router = useRouter()

    const [portas, setPortas] = useState([]);
    const [valido, setvalido] = useState(false)

    useEffect(() =>{
        const portas = +router.query.portas
        const temPresente = +router.query.temPresente
        const qtdePortasValidas = portas >= 3 && portas <= 15
        const temPresenteValido = temPresente >= 1 && temPresente <= portas;
        setvalido(qtdePortasValidas && temPresenteValido)
    },[portas])

    useEffect(() => {
        const portas = +router.query.portas
        const temPresente = +router.query.temPresente
        setPortas(criarPortas(portas, temPresente))
    }, [router?.query])

    function renderizarPortas() {
        return portas.map((porta) => {
            return (
                <Porta
                    key={porta.numero}
                    value={porta}
                    onChange={(novaPorta) =>
                        setPortas(atualizarPortas(portas, novaPorta))
                    }
                />
            );
        });
    }
    return (
        <div className={styles.jogo}>
            <div className={styles.portas}>
                {valido ? renderizarPortas()
                :
                <h2>Valores invalidos</h2> }
            </div>
            <div className={styles.botoes}>
            <Link href="/">
                <button>Reniciar</button>
            </Link>
            </div>
        </div>
    );
}
