import React from 'react'
import styles from './AppName.module.css'

const AppName = ({ App_Name }) => {
  return (
    <h2 className={styles.title}>{App_Name}</h2>
  )
}

export default AppName
