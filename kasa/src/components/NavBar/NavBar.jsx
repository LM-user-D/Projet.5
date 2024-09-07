import { NavLink } from "react-router-dom"
import logoKasa from "../../img/LOGO-Kasa.svg"
import "../NavBar/nav.scss"


export default function NavBar() {
  return (
    <div className="nav-bar">
      <NavLink to='/'><img className="img-logo" src={logoKasa} alt="Logo Kasa" /></NavLink>        
        
        <ul>
            <li><NavLink to='/'  className={(nav) => nav.isActive ? "active" : "" } > Accueil</NavLink></li>
            <li><NavLink className="lien-nav" to='/about'> A propos </NavLink></li>
        </ul>
    </div>
  )
}