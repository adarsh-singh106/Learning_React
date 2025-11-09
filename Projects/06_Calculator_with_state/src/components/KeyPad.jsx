import React from 'react'
import style from './KeyPad.module.css';
import Button from './Button';
const KeyPad = ({onButtonClick}) => {
    const buttons = [
    "C", "1", "2",
    "+", "3", "4",
    "-", "5", "6",
    "*", "7", "8",
    "/", "=", "9",
    "0", "."
  ];
  return (
    <div className={style.keypad}>
        {
            buttons.map((btn,index)=>(<Button key={index} label={btn} onClick={onButtonClick} />))
        }
    </div>
  )
}

export default KeyPad