import '../src/style/index.scss'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Accueil from './pages/accueil/Accueil'
import Apropos from './pages/Apropos/Apropos'
import Appartements from './pages/Appartements'
import Notfound from './pages/error/Notfound'
import { useState, useEffect } from "react"
import axios from 'axios'

function App() { 
  const [useCart, setUseCart] = useState([])  
  useEffect(() =>{
          async function Carte() {
          await axios.get('./logements.json').then(dt => setUseCart(dt.data))
          }
          Carte()
  }, [])

return (
    <div className="">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Accueil tab={useCart} setStat={setUseCart}/>}/>
        
        <Route path='/about' element={<Apropos />}/>

        <Route path={`/appartement/${useCart.title}`} element={<Appartements tab={useCart}/>}/>

        <Route path='*' element={<Notfound />}/>

      </Routes>
    </BrowserRouter>

    </div>
  ) 
}

export default App
