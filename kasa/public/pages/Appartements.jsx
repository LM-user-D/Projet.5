import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Description from "../Appart Content/Description"
import Equipements from "../Appart Content/Equipements"
import Slider from "../Appart Content/Slider"
import Presentation from "../Appart Content/Presentation"


export default function Appartements({tab = []}) {

  
  

  
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
