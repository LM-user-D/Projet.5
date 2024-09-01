import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import Collapse from "../Appart Content/Collapse"
import imgAp from '../img/img-apropos.png'


export default function Apropos() {
  const titre = [
        {
          titre : 'Fiabilité',
          txt : 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.'
        },
        {
          titre : 'Respect',
          txt : 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme'
        },
        {
          titre : 'Service',
          txt : 'La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.'
        },
        {
          titre : 'Sécurité',
          txt : "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageur, chaque logement correspon aux critéres de sécurité établis par nos services. En laissant une notre aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        }

]
  
  return (
    <div>
      <NavBar />
      <div className="img-apropos">
        <img src={imgAp} alt="" /> 
      </div>


      <Collapse titre={titre} />

      <Footer />
    </div>
  )
}