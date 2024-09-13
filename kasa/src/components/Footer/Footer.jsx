import logo from '../../img/LOGO-Footer.svg'
import "../Footer/footer.scss"

export default function Footer() { 
  return (
      <footer>
          <img src={logo} alt="Logo Kasa " />
            <p>© 2020 Kasa. All rights reserved</p>
      </footer>
  
  )
}