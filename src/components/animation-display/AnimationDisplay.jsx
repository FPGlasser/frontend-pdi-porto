import React from 'react'
import style from './style.module.css'

const AnimationDisplay = ({velocity, distancy, angle}) => {
  
  return (
    <div className={style.container}>
      {angle.value}
    </div>
  )
}

export default AnimationDisplay