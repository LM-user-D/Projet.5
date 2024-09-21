import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import '../Cart/cart.scss'
export default function Carts() {
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
            <NavLink key={id} to={`/appartement/${el.id}`}>
             <img src={el.cover} alt="" />
             <p>{el.title.slice(0, 30)}...</p>
            </NavLink>
        </div>
        ))
    }
    </div>
  )
}