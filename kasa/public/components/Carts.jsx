import { Link } from 'react-router-dom'
export default function Carts({tab = [], setStat}) {

  
/* const [useCart, setUseCart] = useState([])
   
useEffect(() =>{
        async function Carte() {
        await axios.get('../logements.json').then(dt => setUseCart(dt.data))
        
        }
        Carte()
}, [])
   */

const tabLink = tab

return (
    <div className="container">
    {
        tabLink.map((el, id)=>(
        <div className="carts" key={id}>
        <Link onClick={()=> setStat(el, id)} to={`/appartement/${el.title}`}>
            <img src={el.cover} alt="" />
            <p>{el.title.slice(0, 30)}...</p>
        </Link>
        </div>
        ))
    }

    </div>
  )
}