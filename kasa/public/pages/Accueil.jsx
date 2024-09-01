

import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Carts from "../components/Carts"

export default function Accueil({tab =[], setStat}) {

  
  
  return (
    <div>
      <NavBar />

      <div className='barre-accueil'>
        <img src="/img/sectionOne.png" alt="photo vu sur la côte de la mer" />
        <h1>Chez vous, partout et ailleurs</h1>
      </div>

      <Carts tab={tab} setStat={setStat}/>
      <Footer />
    </div>
  )
}