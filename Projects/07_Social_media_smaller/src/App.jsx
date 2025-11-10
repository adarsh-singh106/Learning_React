import React, { useState } from "react";
import Header from "./components/Header";
import Slidebar from "./components/Slidebar";
import Footer from "./components/Footer";
import styles from "./App.module.css";
import PostList from "./components/PostList";
import CreatePost from "./components/CreatePost";
import { PostListProvider } from "./store/PostListContext";

function App() {
  const [selected_tab, set_selected_tab] = useState("Home");

  return (
    <PostListProvider>
      <div className={styles.appContainer}>
        {/* Header */}
        <div className={styles.header}>
          <Header />
        </div>

        {/* Sidebar + Main content */}
        <div className={styles.mainWrapper}>
          <div className={styles.sidebar}>
            <Slidebar
              selected_tab={selected_tab}
              set_selected_tab={set_selected_tab}
            />
          </div>

          <main className={styles.mainContent}>
            <h1>Home</h1>
            {selected_tab === "Home" ? <PostList /> : <CreatePost />}
          </main>
        </div>
        {/* Footer */}
        <footer className={styles.footer}>
          <Footer />
        </footer>
      </div>
    </PostListProvider>
  );
}

export default App;
