import Description from "../components/Appart Content/Des_Equip/Description"
import Equipements from "../components/Appart Content/Des_Equip/Equipements"
import Slider from "../components/Appart Content/Slider/Slider"
import Presentation from "../components/Appart Content/Presentation/Presentation"

export default function Appartements({tab = []}) {

  return (
    <div className="appartement">
      <Slider tab={tab}/>
      <Presentation tab={tab}/>
    
      <div className="collapse">
        <Description tab={tab}/>
        <Equipements tab={tab}/>
      </div>
      
    </div>
  )
}
