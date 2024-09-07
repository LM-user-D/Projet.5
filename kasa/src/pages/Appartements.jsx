import NavBar from "../components/NavBar/NavBar"
import Footer from "../components/Footer/Footer"
import Description from "../components/Appart Content/Des_Equip/Description"
import Equipements from "../components/Appart Content/Des_Equip/Equipements"
import Slider from "../components/Appart Content/Slider/Slider"
import Presentation from "../components/Appart Content/Presentation/Presentation"

import { useNavigate } from "react-router-dom"

export default function Appartements({tab = []}) {
  const navig = useNavigate()

  console.log(navig);
  
  


  return (
    <div className="appartement">

      <NavBar />
      <Slider tab={tab}/>
      <Presentation tab={tab}/>
    
      <div className="collapse">
        <Description tab={tab}/>
        <Equipements tab={tab}/>
      </div>
      <Footer />
   
    </div>
  )
}
