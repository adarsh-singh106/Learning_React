import React, { createContext, useReducer, useEffect } from "react";
import { todoReducer, initialState } from "../reducers/todoReducer";

// Create a Context object
export const TodoContext = createContext(null);

// Provider component: wraps the app and gives access to state + actions
export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState, (init) => {
    // Load todos from localStorage when app starts
    const stored = localStorage.getItem("todos");
    return stored ? { ...init, todos: JSON.parse(stored) } : init;
  });

  // Persist todos into localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state.todos));
  }, [state.todos]);

  // Functions exposed to the app
  const contextValue = {
    todos: state.todos,
    task: state.task,
    duedate: state.duedate,
    errorMsg: state.errorMsg,
    setTask: (val) => dispatch({ type: "SET_TASK", payload: val }),
    setDueDate: (val) => dispatch({ type: "SET_DUEDATE", payload: val }),
    addToDO: () => dispatch({ type: "ADD_TODO" }),
    deleteTodo: (id) => dispatch({ type: "DELETE_TODO", payload: id }),
    toggleTodo: (id) => dispatch({ type: "TOGGLE_TODO", payload: id }), // ✅ New feature: mark as complete
  };

  return (
    <TodoContext.Provider value={contextValue}>
      {children}
    </TodoContext.Provider>
  );
};
