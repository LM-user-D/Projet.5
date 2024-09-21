import Banner from "../../components/Banner/Banner"
import Collapse from "../../components/Collapse/Collapse"
import imgAp from '../../img/img-apropos.png'
import '../Apropos/apropos.scss'
import data from '../../Data/about.json'


export default function Apropos() {
  
  return (
    <>
      <Banner img={imgAp}/>
   
    {
      data.map((el,id) =>(
        <Collapse key={id} titre={el.title} content={el.content}/>)
     ) 
    }
   





    </>
  )
}