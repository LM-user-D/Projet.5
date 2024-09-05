import { useState } from "react"
import arrow from "../img/arrow.svg"



export default function Collapse({titre}) {
    
      const clps = titre

  const [collapse, setDescription] = useState(Array(clps.length).fill(false))


  const toggleItem = (index) => {
    setDescription((prev) =>
      prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };




return (
<div className="collapse-content">

    {
    clps.map((el, id) => (
      <div key={id} className={`content-description ${collapse[id] ? 'grandir': 'retrecir'}`}>
      <h3>{el.titre}</h3>

      <button 

        onClick={() => toggleItem(id)} 

         className={`btn-description ${collapse[id] ? 'top': 'bottom'}`} ><img src={arrow} alt="fléche" />
      
      </button>
      
        <p>{el.txt}</p>
      
      </div>
      
      )) 
    }



</div>


)}