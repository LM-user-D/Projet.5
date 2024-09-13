import imgStart from '../../../img/start.svg'
import imgStartInac from '../../../img/start-inactive.svg'
import '../Presentation/presentation.scss'

export default function Presentation({tab}) {
    const title = tab.title
    const ville = tab.location
    const name = tab.host
    const numstr = parseInt(tab.rating)
    const tags = tab.tags

    let tabstr = []
    function etoiles(){
  
    for(let i = 0; i < numstr; i++){
      tabstr.push(imgStart)
    }
     for(let i = 0; i < 5; i++){
      tabstr.push(imgStartInac)
      if(tabstr.length > 5){
        tabstr.pop()
      }
     }
    }  
    etoiles()
 
    return (
<div className="presentation">

    <div className="titre">
    <h2>{title}</h2>
    <p>{ville}</p>
    </div>
    <div className="host">        
        <div className="start">
            {
                tabstr.map((el,id) => (
                    <img src={el} alt='Etoiles' key={id} ></img>
                ))
            }
        </div>

        <div className="host-img">
            <p>{name.name}</p>   
            <img src={name.picture} alt="" />
        </div>
    </div>
    <ul>
        {
        tags.map((el, id)=>(
            <li key={id}>{el}</li>
        ))
        }
    </ul>
</div>
  )
}