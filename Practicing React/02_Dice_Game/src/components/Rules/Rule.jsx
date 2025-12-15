import styles from "./Rule.module.css";

const Rule = () => {
  
  return (
    <div className={styles.main_container}>
      <h2>How to play dice game</h2>

      <div className={styles.rule}>
        <ol>
          <li>Select any number</li>
          <li>Click on the dice image</li>
          <li>
            If the selected number matches the dice number,
            you get points equal to the dice value
          </li>
          <li>If your guess is wrong, 2 points will be deducted</li>
        </ol>
      </div>
    </div>
  );
};

export default Rule;
