import Banner from "../../components/Banner/Banner"
import Carts from "../../components/Cart/Carts"
import imgBarrAcc from "../../img/sectionOne.png"

export default function Accueil({tab =[], setStat}) {
  
  const title = <h1>Chez vous, partout et ailleurs</h1>

  return (
    <>
      <Banner img={imgBarrAcc} title={title}/>
      <Carts tab={tab} setStat={setStat}/>
    </>



  )
}