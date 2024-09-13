import Banner from "../../components/Banner/Banner"
import Collapse from "../../components/Collapse/Collapse"
import imgAp from '../../img/img-apropos.png'
import '../Apropos/apropos.scss'

export default function Apropos() {

  return (
    <>
      <Banner img={imgAp}/>
      <Collapse />
    </>
  )
}