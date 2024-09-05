

import { useState } from "react";
import imgArrow from "../img/arrow.svg"

export default function Equipements({tab = []}) {
  const [description, setDescription] = useState(false)

 const  tabEquip = tab.equipments


 
return (
    <div className={`content-description equipement ${description ? 'grandir': 'retrecir'}`}>
     

        <h3>Equipements</h3>
        <button onClick={() => setDescription(!description)}
          className={`btn-description ${description ? 'top': 'bottom'}`}
        ><img src={imgArrow} alt="fléche"/></button>

        <ul>  
          {
            tabEquip.map((el, id) =>(
              <li key={id}>{el}</li>
            ))
            
          }
        </ul>

    </div>
  )
}