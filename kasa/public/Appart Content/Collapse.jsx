import { useRef, useState } from "react"

import arrow from "../img/arrow.svg"
export default function Collapse({titre}) {
    const [collapse, setDescription] = useState(false)
    const clps = titre

 
    
return (
    <div className="collapse-content">
    {

    clps.map((el, id)=>(

      <div key={id} className={`content-description ${collapse ? 'grandir': 'retrecir'}`}>

      <h3>{el.titre}</h3>
      <button onClick={() => setDescription(!collapse)}
        className={`btn-description ${collapse ? 'top': 'bottom'}`} ><img src={arrow} alt="fléche"/></button>
        <p>{el.txt}</p>
      </div>
      ))
      
    }

    </div>


)}