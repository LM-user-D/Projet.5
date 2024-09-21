import Description from "../components/Appart Content/Des_Equip/Description"
import Equipements from "../components/Appart Content/Des_Equip/Equipements"
import Slider from "../components/Appart Content/Slider/Slider"
import Presentation from "../components/Appart Content/Presentation/Presentation"
import { useParams } from "react-router-dom"
import { Navigate } from "react-router-dom"
import data from '../Data/logements.json'

export default function Appartements() {

  const {id}= useParams()
  const appartFind = data.find((el) => el.id === id)

  if(!appartFind){
    return <Navigate to= "/erreur"/>
  }
  else{

  return (
    <div className="appartement">
      <Slider imgs={appartFind.pictures}/>
      <Presentation tab={appartFind}/>
    
      <div className="collapse">
        <Description tab={appartFind}/>
        <Equipements tab={appartFind}/>
      </div>
      
    </div>
  )}
}
