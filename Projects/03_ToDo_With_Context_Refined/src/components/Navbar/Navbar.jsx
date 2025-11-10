import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h2 className={styles.logo}>My ToDo App</h2>
    </nav>
  );
};

export default Navbar;
