import React, { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import styles from "./Entries.module.css";

const Entries = ({ TaskName, DueDate, completed, id }) => {
  const { deleteTodo, toggleTodo } = useContext(TodoContext);

  return (
    <div className={`${styles.entry} ${completed ? styles.completed : ""}`}>
      <div className={styles.info}>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleTodo(id)}
        />
        <span className={styles.task}>{TaskName}</span>
        <span className={styles.date}>{DueDate}</span>
      </div>
      <button onClick={() => deleteTodo(id)}>Delete</button>
    </div>
  );
};

export default Entries;
