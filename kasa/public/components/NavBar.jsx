import { Link } from "react-router-dom"

export default function NavBar() {

  function handclick(){
    
  }

  return (
    <div className="nav-bar">
        <img src="./img/LOGO-Kasa.svg" alt="Logo Kasa" />
        <ul>
            <li><Link onClick={handclick} className="lien-nav" to='/'> Accueil</Link></li>
            <li><Link className="lien-nav" to='/about'> A propos </Link></li>
   
        </ul>
    </div>
  )
}