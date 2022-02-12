import styles from "../styles/Formulario.module.css"
import Cartao from "../componets/Cartao"
import EntradaNumerica from "../componets/EntradaNumerica"
import Link from "next/link"
import { useState } from "react"

export default function Home() {
  const [qtdePortas, setQtdePortas] = useState(3)
  const [comPresente, setComPresente] = useState(1)

    return (
    <div className={styles.formulario}>
      <div>

      <Cartao bgcolor="rgb(228, 26, 26)"><h1>Monty hall</h1></Cartao>

      <Cartao>
        <EntradaNumerica text="Qtde Portas?" value={qtdePortas} onChange={novaQtde => setQtdePortas(novaQtde)}/>
      </Cartao>
      </div>

      <div>

      <Cartao><EntradaNumerica text="Porta com presente?" value={comPresente} onChange={novaComPresente => setComPresente (novaComPresente)}/></Cartao>

      <Cartao bgcolor="#28a085">
      <Link href={`/jogo/${qtdePortas}/${comPresente}`}>
        <a>
        <h2 className={styles.link}>Iniciar</h2>

        </a>
      
      </Link>
       </Cartao>

      </div>
    </div>
    )
}
