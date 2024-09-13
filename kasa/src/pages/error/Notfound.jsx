import { Link } from "react-router-dom"
import '../error/error.scss'

export default function Notfound() {
  return (
    <>
      <div className="error"> 
         <h1>404</h1>
         <p>Oups! La page que vous demandez n'existe pas.</p>
         <Link className="lien-error" to='/'>Retourner sur la page d'accueil</Link>
       </div>
    </>
  )
}