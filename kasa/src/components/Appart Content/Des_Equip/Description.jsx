import { useState } from "react";
import imgArrow from "../../../img/arrow.svg"
import '../Des_Equip/desEquip.scss'
export default function Description({tab = []}) {

  const [description, setDescription] = useState(false)
  
  return (
    <div className={`content-description ${description ? 'grandir': 'retrecir'}`}>

        <h3>Description</h3>

        <button onClick={() => setDescription(!description)}
          className={`btn-description ${description ? 'top': 'bottom'}`}
        ><img src={imgArrow} alt="fléche"/></button>
        <p>{tab.description}</p>
      
    </div>
  )
}