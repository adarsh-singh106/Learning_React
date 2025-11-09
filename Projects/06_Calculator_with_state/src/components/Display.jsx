import React from 'react'
import style from './Display.module.css'
const Display = ({value}) => {
  return (
    <input type="text" className={style.display} readOnly value={value} />
  )
}

export default Display