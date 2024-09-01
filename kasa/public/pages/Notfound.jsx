import { Link } from "react-router-dom"

import NavBar from "../components/NavBar"

import Footer from "../components/Footer"


export default function Notfound() {
  return (
    <div>
      <NavBar />



      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>

      <Link to='/'>Retourner sur la page d'accueil</Link>
      <Footer />

    </div>
  )
}