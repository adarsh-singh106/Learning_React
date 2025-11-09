import React from "react";
import styles from "./Buttons.module.css";

const Buttons = ({ onButtonClick }) => {
  const buttons = [
    "AC", "DEL", "%", "÷",
    "7", "8", "9", "×",
    "4", "5", "6", "−",
    "1", "2", "3", "+",
    "+/−", "0", ".", "="
  ];

  return (
    <div className={styles.grid}>
      {buttons.map((btn, index) => (
        <button
          key={index}
          className={`${styles.button} ${
            ["÷", "×", "−", "+", "="].includes(btn) ? styles.operator : ""
          } ${["AC", "DEL"].includes(btn) ? styles.utility : ""}`}
          onClick={() => onButtonClick(btn)}
        >
          {btn}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
