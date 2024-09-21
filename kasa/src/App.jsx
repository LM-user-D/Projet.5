import '../src/style/index.scss'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Accueil from './pages/accueil/Accueil'
import Apropos from './pages/Apropos/Apropos'
import Appartements from './pages/Appartements'
import Notfound from './pages/error/Notfound'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'

function App() { 

return (
    <>
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path='/' element={<Accueil />}/>
        <Route path={"/appartement/:id"} element={<Appartements />}/>
        <Route path='/about' element={<Apropos />}/>
        <Route path='*' element={<Notfound />}/>
      </Routes>
    </BrowserRouter>
    <Footer />
    </>
  ) 
}

export default App
