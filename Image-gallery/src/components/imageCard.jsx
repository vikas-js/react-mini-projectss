import React from 'react'
import '../App.css'
export default function ImageCard({imgSrc,onClick}) {
  return (
    <div className='img-container' onClick={onClick}>
        <img src={imgSrc} alt="" />
    </div>
  )
}
