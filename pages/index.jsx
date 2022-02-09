import { useState } from "react";
import Porta from "../componets/Porta";
import Presente from "../componets/Presente";
import PortaModel from "../model/porta";

export default function Home() {
  const [porta, setPorta] = useState(new PortaModel(1));

  return (
    <div style={{display:'flex'}}>
      <Porta value={porta} onChange={novaPorta => setPorta(novaPorta)} />
      
    </div>
  )
}
