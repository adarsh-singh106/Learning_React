// Initial state for the reducer
export const initialState = {
  todos: [],
  task: "",
  duedate: "",
  errorMsg: "",
};

// Reducer function handles all actions
export function todoReducer(state, action) {
  switch (action.type) {
    case "SET_TASK":
      return { ...state, task: action.payload };

    case "SET_DUEDATE":
      return { ...state, duedate: action.payload };

    case "ADD_TODO": {
      const { task, duedate } = state;
      if (task.trim() === "" || duedate.trim() === "") {
        return { ...state, errorMsg: "⚠ Please enter both Task and Due Date!" };
      }
      const newTodo = {
        TaskName: task,
        DueDate: duedate,
        completed: false, // ✅ new field
      };
      return {
        ...state,
        todos: [newTodo, ...state.todos],
        task: "",
        duedate: "",
        errorMsg: "",
      };
    }

    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((_, i) => i !== action.payload),
      };

    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo, i) =>
          i === action.payload ? { ...todo, completed: !todo.completed } : todo
        ),
      };

    default:
      return state;
  }
}
