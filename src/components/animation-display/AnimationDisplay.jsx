import React from 'react'
import style from './style.module.css'
import { useDataStore } from '../../stores/Stores'

const AnimationDisplay = () => {
  const data = useDataStore((state) => state.data)
  const {angle} = data
  
  return (
    <div className={style.container}>
      {angle.value}
    </div>
  )
}

export default AnimationDisplay