import React, { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import Entries from "../Entries/Entries";
import styles from "./Items.module.css";

const Items = () => {
  const { todos } = useContext(TodoContext);

  if (todos.length === 0) {
    return <h3 className={styles.empty}>No tasks yet. Add one!</h3>;
  }

  // Count stats
  const total = todos.length;
  const completed = todos.filter((t) => t.completed).length;
  const pending = total - completed;

  return (
    <div className={styles.items}>
      <div className={styles.stats}>
        <p>Total: {total}</p>
        <p>Completed: {completed}</p>
        <p>Pending: {pending}</p>
      </div>

      {todos.map((entry, index) => (
        <Entries
          key={index}
          TaskName={entry.TaskName}
          DueDate={entry.DueDate}
          completed={entry.completed}
          id={index}
        />
      ))}
    </div>
  );
};

export default Items;
