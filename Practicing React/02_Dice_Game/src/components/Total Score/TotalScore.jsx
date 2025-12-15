import styles from './TotalScore.module.css'

const TotalScore = ({Total}) => {
  return (
    <div className={styles.container}>
        <h1>{Total}</h1>
    <p>Total Score</p>
    </div>
  )
}

export default TotalScore