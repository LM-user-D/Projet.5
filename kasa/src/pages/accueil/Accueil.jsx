import NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer"
import Carts from "../../components/Cart/Carts"
import imgBarrAcc from "../../img/sectionOne.png"
import '../accueil/accueil.scss'

export default function Accueil({tab =[], setStat}) {
 
  return (
    <div>
      <NavBar />

      <div className='barre-accueil'>
        <img src={imgBarrAcc} alt="photo vu sur la côte de la mer" />
        <h1>Chez vous, partout et ailleurs</h1>
      </div>

      <Carts tab={tab} setStat={setStat}/>
      <Footer />
    </div>
  )
}