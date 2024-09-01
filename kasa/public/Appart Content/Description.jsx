
import { useState } from "react";

export default function Description({tab = []}) {


  const [description, setDescription] = useState(false)
  
  return (
    <div className={`content-description ${description ? 'grandir': 'retrecir'}`}>

      
      
        <h3>Description</h3>

        <button onClick={() => setDescription(!description)}
          className={`btn-description ${description ? 'top': 'bottom'}`}
        ><img src="./img/arrow.svg" alt="fléche"/></button>
        <p>{tab.description}</p>
      
        
    </div>
  )
}