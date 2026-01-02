import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>FlowDo.</div>
      
      <div className={styles.navLinks}>
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
        <a href="#about">About</a>
      </div>

      <div className={styles.authButtons}>
        <button className={styles.loginBtn}>Log In</button>
        <button className={styles.signupBtn}>Sign Up</button>
      </div>
    </nav>
  );
};

export default Header;