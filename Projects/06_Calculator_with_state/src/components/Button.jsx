import React from 'react'
import style from './Button.module.css';
const Button = ({label,onClick}) => {
  return (
    <>
    <button onClick={()=>onClick(label)} className={style.button}>{label} </button>
    </>
  )
}

export default Button