import '../Des_Equip/desEquip.scss'
import Collapse from '../../Collapse/Collapse'
export default function Description({tab = []}) {
  
  const titre = 'Description'
  const description =  tab.description
  
  return (
    <>
    <div className="content-description">

    <Collapse titre={titre} content={description}/>
    </div>
   </>
  )
}