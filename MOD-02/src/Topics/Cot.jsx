import React from 'react'
import styles from './Cot.module.css';
const Cot = ({children}) => {
  return (
    <div className={styles.Cot}>{children}</div>
  )
}

export default Cot