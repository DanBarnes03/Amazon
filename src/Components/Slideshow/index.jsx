import React from "react";
import { useState, useEffect } from "react";
import './index.css';

const Thumbnail = ({ arr, image, index }) => {
  return (
  <div className="thumbnail">
    {arr.map((imgsrc, i) => (
        <img 
        key={i} 
        height='50' 
        src={imgsrc}
        onClick={() => image(i)}
        className={index === i ? 'active' : ''}
        />
        ))}
  </div>
  )
}

export const Slideshow = ({imgs}) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setIndex(0)
  }, [])

  const next = () => {
    if(index === imgs.length -1){
      setIndex(0)
    } else{
      setIndex(index +1)
    }
  }

  const prev = () => {
    if(index === 0){
      setIndex(imgs.length -1)
    } else {
      setIndex(index -1)
    }
  }

  return <div className='slideshow'>
    <img className='mainImg' src={imgs[index]}/>
    <div className='actions'>
      <button onClick={prev}>⬅️</button>
      <button onClick={next}>➡️</button>
    </div>
    <Thumbnail arr={imgs} image={setIndex} index={index}/>
  </div>
};