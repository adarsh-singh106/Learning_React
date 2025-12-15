import React, { useState } from 'react'
import styles from './SelectScore.module.css'

const SelectScore = ({ SelectedNumber, setSelectedNumber, error, setError }) => {
    const dieNumber = [1, 2, 3, 4, 5, 6]

    return (
        <div className={styles.container}>
            <p className={styles.alert}>{error}</p>
            <div className={styles.setME}>
                {dieNumber.map((value, i) => (
                    <div
                        key={i}
                        onClick={() => {
                            setSelectedNumber(value)
                            setError(undefined)
                        }
                        }
                        // Combine the base class AND the conditional class here
                        className={`${styles.box} ${SelectedNumber === value ? styles.selected : ''}`}
                    >
                        {value}
                    </div>
                ))}</div>
            <p>Select Number</p>
        </div>
    )
}

export default SelectScore