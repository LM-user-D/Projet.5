import { useState } from "react"
import arrow from "../../img/arrow.svg"
import '../Collapse/collapse.scss'
import about from '../../Data/about.json'

export default function Collapse() {   
  const [collapse, setDescription] = useState(Array(about.length).fill(false))

  const toggleItem = (index) => {
    setDescription((prev) =>
      prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };


  console.log(about);
  

return (
<div className="collapse-content">
    {
    about.map((el, id) => (
      <div key={id} className={`content-description ${collapse[id] ? 'grandir': 'retrecir'}`}>
      <h3>{el.title}</h3>

      <button onClick={() => toggleItem(id)} 
         className={`btn-description ${collapse[id] ? 'top': 'bottom'}`} ><img src={arrow} alt="fléche" />
      </button>
       <p>{el.content}</p>   
      </div>
     )) 
     }
</div>


)}