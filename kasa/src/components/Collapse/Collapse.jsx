import { useState } from "react"
import imgArrow from "../../img/arrow.svg"
import '../Collapse/collapse.scss'

export default function Collapse({titre, content}) {   
  const [collapse, setDescription] = useState(false)

return (

<div className="collapse-content">
   <div className={`content-description equipement ${collapse ? 'grandir': 'retrecir'}`}>
     
     <h3>{titre}</h3>
     <button onClick={() => setDescription(!collapse)}
       className={`btn-description ${collapse ? 'top': 'bottom'}`}
     ><img src={imgArrow} alt="fléche"/></button>

     <ul>  
       {
        content
       }
     </ul>
 </div> 

</div>





)}