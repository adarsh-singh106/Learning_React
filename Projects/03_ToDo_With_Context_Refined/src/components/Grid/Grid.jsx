import React, { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import styles from "./Grid.module.css";

const Grid = () => {
  const { task, duedate, setTask, setDueDate, addToDO, errorMsg } =
    useContext(TodoContext);

  return (
    <div className={styles.grid}>
      <input
        type="text"
        placeholder="Enter task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <input
        type="date"
        value={duedate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button onClick={addToDO}>Add</button>

      {errorMsg && <p className={styles.error}>{errorMsg}</p>}
    </div>
  );
};

export default Grid;
