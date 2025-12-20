import React from "react";
import styles from "./Landing_Page.module.css";
import Header from "../Header/Header";

// Keeping your icons
import { BsThreeDots } from "react-icons/bs";
import { FaRegCheckCircle, FaRegCircle } from "react-icons/fa";
import { FcAlphabeticalSortingAz } from "react-icons/fc";
import { MdOutlineDarkMode } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { TbBulb } from "react-icons/tb";

const Landing_Page = () => {
  return (
    <div className={styles.pageContainer}>
      {/*Header Here */}
      <Header/>

      {/* SECTION 1: HERO (Text + Interactive Card) */}
      <section className={styles.heroSection}>
        {/* Left Side: Text */}
        <div className={styles.heroContent}>
          <h1>
            Stop Managing. <br />
            <span className={styles.highlight}>Start Doing.</span>
          </h1>
          <p>
            The minimal to-do list designed for <br />
            deep work and flow states.
          </p>
          <button className={styles.ctaButton}>Get Flowing - It's Free</button>
        </div>

        {/* Right Side: The Visual (Your Card) */}
        <div className={styles.heroVisual}>
          <div className={styles.todoCard}>
            <div className={styles.cardHeader}>
              <h3>To Do</h3>
              <BsThreeDots />
            </div>
            <div className={styles.cardBody}>
              <div className={styles.taskItem}>
                <FaRegCheckCircle className={styles.iconDone} />
                <span>Refactor Code</span>
              </div>
              <div className={styles.taskItem}>
                <FaRegCircle className={styles.iconPending} />
                <span>Add Task</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: FEATURES (Grid Layout) */}
      <section className={styles.featuresSection}>
        <div className={styles.featureItem}>
          <FcAlphabeticalSortingAz size={40} />
          <h3>Smart Sorting</h3>
          <p>Create New Task & Sort With Ease</p>
        </div>
        <div className={styles.featureItem}>
          <MdOutlineDarkMode size={40} color="#555" />
          <h3>Dark Mode</h3>
          <p>Dark Mode to minimize eye strain</p>
        </div>
        <div className={styles.featureItem}>
          <SlCalender size={40} color="#555" />
          <h3>Daily Reminders</h3>
          <p>Daily notifications for scheduled tasks</p>
        </div>
        <div className={styles.featureItem}>
          <TbBulb size={40} color="#FFC107" />
          <h3>Keep Doing</h3>
          <p>Maintain your streak</p>
        </div>
      </section>
    </div>
  );
};

export default Landing_Page;
