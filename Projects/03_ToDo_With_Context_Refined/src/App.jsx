import React from "react";
import { TodoProvider } from "./context/TodoContext";
import Navbar from "./components/Navbar/Navbar";
import Grid from "./components/Grid/Grid";
import Items from "./components/Items/Items";
import styles from "./App.module.css";

const App = () => {
  return (
    <TodoProvider>
      <div className={styles.app}>
        <Navbar />
        <h1 className={styles.heading}>My ToDo's</h1>
        <Grid />
        <Items />
      </div>
    </TodoProvider>
  );
};

export default App;
