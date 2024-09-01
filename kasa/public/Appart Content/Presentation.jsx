import iconStart from '../img/start.svg'

export default function Presentation({tab}) {
    const title = tab.title
    const ville = tab.location
    const name = tab.host
    const start = parseInt(tab.rating)
    const tags = tab.tags
 
 
 
    return (
<div className="presentation">

    <div className="titre">
    <h2>{title}</h2>
    <p>{ville}</p>
    </div>
    <div className="host">        
        <div className="start"></div>
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