import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import '../Cart/cart.scss'
export default function Carts({setStat}) {

    const [useCart, setUseCart] = useState([])  
    useEffect(() =>{
            async function Carte() {
            await axios.get('../src/Data/logements.json').then(dt => setUseCart(dt.data))
            }
            Carte()
    },[])
        
return (
    <div className="container">
    {
        useCart.map((el, id)=>(
        <div className="carts" key={id}>
            <NavLink key={id} onClick={()=> setStat(el, id)} to={`/appartement/${el.title}`}>
             <img src={el.cover} alt="" />
             <p>{el.title.slice(0, 30)}...</p>
            </NavLink>
        </div>
        ))
    }
    </div>
  )
}