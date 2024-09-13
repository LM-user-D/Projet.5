import '../Banner/banner.scss'
export default function Banner({img, title}) {
    
  return (
    <div className='barre-accueil'>
    <img src={img} alt="photo vu sur la côte de la mer" />
        {
            title
        }
    </div>
  )
}