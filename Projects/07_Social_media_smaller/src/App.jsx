import React from "react";
import Header from "./components/Header";
import Slidebar from "./components/Slidebar";
import Footer from "./components/Footer";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.appContainer}>
      {/* Header */}
      <div className={styles.header}>
        <Header />
      </div>

      {/* Sidebar + Main content */}
      <div className={styles.mainWrapper}>
        <div className={styles.sidebar}>
          <Slidebar />
        </div>

        <main className={styles.mainContent}>
          <h1>Dashboard</h1>
          <p>This is your main content area.</p>
        </main>
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
