import { useState } from "react";
import Porta from "../componets/Porta";
import Presente from "../componets/Presente";
import PortaModel from "../model/porta";

export default function Home() {
  const [p1, setP1] = useState(new PortaModel(1));

  return (
    <div style={{display:'flex'}}>
      <Porta porta={p1} />
      <Porta porta={p2} />
    </div>
  )
}
