import React from "react";
import styles from "./App.module.css";
import Header from "../components/Header";
import Slidebar from "../components/Slidebar"; // Check spelling: usually Sidebar
import Footer from "../components/Footer";
import { PostListProvider } from "../store/PostListContext";
import { Outlet } from "react-router-dom";

function App() {
  // REMOVED: const [selected_tab, set_selected_tab] = useState("Home");
  // REASON: The URL is now the "source of truth", not local state.

  return (
    <PostListProvider>
      <div className={styles.appContainer}>
        <div className={styles.header}>
          <Header />
        </div>

        <div className={styles.mainWrapper}>
          <div className={styles.sidebar}>
            {/* CHANGED: Removed props passed to Slidebar, it handles its own active state via Router */}
            <Slidebar />
          </div>

          <main className={styles.mainContent}>
            {/* Outlet renders CreatePost or PostList depending on the URL */}
            <Outlet />
          </main>
        </div>

        <footer className={styles.footer}>
          <Footer />
        </footer>
      </div>
    </PostListProvider>
  );
}

export default App;