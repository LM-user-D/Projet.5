import '../src/style/index.scss'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Accueil from './pages/accueil/Accueil'
import Apropos from './pages/Apropos/Apropos'
import Appartements from './pages/Appartements'
import Notfound from './pages/error/Notfound'
import { useState } from "react"
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'

function App() { 
  const [cart, setCart] = useState([])  

return (
    <>
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path='/' element={<Accueil tab={cart} setStat={setCart}/>}/>
        <Route path={`/appartement/${cart.title}`} element={<Appartements tab={cart}/>}/>
        <Route path='/about' element={<Apropos />}/>
        <Route path='*' element={<Notfound />}/>
      </Routes>
       
    </BrowserRouter>
    <Footer />
    </>
  ) 
}

export default App
