const TaskItem = ({ task, onDelete }) => {
  return (
    <div>
      <span>{task.name}</span>
      <span>{task.due}</span>
      <span>{task.cat}</span>
      <button 
        className="bg-red-500 text-white px-2 rounded"
        // onClick={onDelete(task)}
      >
        Delete
      </button>
    </div>
  );
};

export default TaskItem;