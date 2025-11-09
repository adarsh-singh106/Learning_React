import React, { useState } from 'react'
import Display from './Display'
import KeyPad from './KeyPad'
import styles from './Calculator.module.css'


const Calculator = () => {
    const [input , setInput] = useState("")
    const handleClick = (value) =>{
        if (value === "C"){
            setInput("") // Reseting the input to Null String
        }else if ( value === "="){
            try{
                setInput(eval(input).toString());
            }catch{
                setInput("Error")
            }

        }else{
            setInput(input + value)
        }
    }
  return (
    <div className={styles.calculator}>
        <Display value={input} />
        <KeyPad onButtonClick={handleClick} />
    </div>
  )
}

export default Calculator