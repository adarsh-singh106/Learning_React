import React from "react";
import styles from "./Display.module.css";

const Display = ({ value }) => {
  return (
    <div className={styles.display}>
      <p className={styles.value}>{value}</p>
    </div>
  );
};

export default Display;
