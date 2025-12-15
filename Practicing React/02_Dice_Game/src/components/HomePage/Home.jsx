import styles from './Home.module.css'

const Home = ({toggle}) => {
  return (
    <div className={styles.container}>
        <div className={styles.left_side}>
            <img src="/images/x.png" alt="Logo" />
        </div>
        <div className={styles.right_side}>
            <h1>DICE GAME</h1>
            <button onClick={toggle}>Play Now</button>
        </div>
    </div>
  )
}

export default Home