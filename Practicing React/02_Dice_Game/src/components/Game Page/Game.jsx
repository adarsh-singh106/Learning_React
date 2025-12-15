import styles from './Game.module.css'
import TotalScore from '../Total Score/TotalScore'
import SelectScore from '../Score Selector/SelectScore'
import RollDies from '../Rolling Die/RollDies'
import { useState } from 'react'
import Rule from '../Rules/Rule'



const Game = () => {
  // ---------------------- RollDies -----------------------
  // Standard convention: camelCase for variables (randomNumber)
  const [randomNumber, setRandomNumber] = useState(1);
  // ---------------------- Select Score -----------------------
  const [SelectedNumber, setSelectedNumber] = useState()
  // ---------------------- Total Score -----------------------
  const [Total, setTotal] = useState(0)
  // ----------------------- Error --------------------------
  const [error, setError] = useState()


  const rollDice = () => {
    if (!SelectedNumber) {
      setError("You have not selected any Number")
      return
    }

    setError(undefined)

    const newNumber = Math.floor(Math.random() * 6) + 1
    setRandomNumber(newNumber)

    if (SelectedNumber === newNumber) {
      setTotal((prev) => prev + SelectedNumber)
    } else {
      setTotal((prev) => prev - 2)
    }

    setSelectedNumber(undefined)
  }

  // ---------------------- Resart -----------------------
  const Reset = () => {
    setTotal(0)
    setError(undefined)
    setSelectedNumber(undefined)
    setRandomNumber(1)
  }
  // ---------------------- Show Rule -----------------------
  const [rule, setRule] = useState(false)
  const RuleIT = () => { setRule((prev) => !prev) }

  return (<main className={styles.main_container}>
    <div className={styles.Header}>
      <TotalScore Total={Total} />
      <SelectScore setError={setError} error={error} SelectedNumber={SelectedNumber} setSelectedNumber={setSelectedNumber} />
    </div>
    <div className={styles.content}>
      <RollDies rule={rule} RuleIT={RuleIT} reset={Reset} randomNumber={randomNumber} rollDice={rollDice} />
      {rule && <Rule />}
    </div>


  </main>

  )
}

export default Game