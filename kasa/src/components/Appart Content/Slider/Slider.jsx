import '../Slider/slider.scss'
import { useState } from "react"

export default function Slider({imgs}) {

  const [numb, setnumb] = useState(0)
    const img = imgs    
    const imgLength = img.length
    
    function clickLeft(){
    if(numb > 0){
      setnumb(numb - 1)
    }
    else {setnumb(imgLength - 1)}
  }

  function clickRight(){
    if(numb < imgLength -1){
      setnumb(numb + 1)
    }
    else(setnumb(0))
  } 
  
  return (
    <div className="slider">
        <p>{numb + 1}/{imgLength}</p>
        <img src={img[numb]} alt='#' />

    {
      imgLength <= 1 ? "" : <button onClick={clickLeft} className="btn-left">&#10094;</button>

    }
       
    {
      imgLength <= 1 ? "" : <button onClick={clickRight} className="btn-right">&#10095;</button>
    }


        
    </div>
  )
}