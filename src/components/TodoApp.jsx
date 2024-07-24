import { useRef, useState } from "react";

function TodoApp() {
  const inputRef = useRef(null);
  const [tasks, setTasks] = useState([]);

  function addTasks() {
    const task = inputRef.current.value;
    if (task.trim()) {
      setTasks([...tasks, task]);
      inputRef.current.value = "";
    }
  }

  return (
    <div className="flex flex-col space-y-5">
      <div className="flex space-x-5 h-20">
        <input
          className="w-full border rounded-md bg-white text-black shadow-sm p-3"
          type="text"
          ref={inputRef}
          placeholder="Enter a task"
        />
        <button
          onClick={addTasks}
          className="w-full rounded-md bg-blue-600 p-1"
        >
          Add Task
        </button>
      </div>
      <div className="flex flex-col">
        <ul className="space-y-3">
          {tasks?.map((task, index) => {
            return (
              <li
                className="w-full h-20 border border-blue-700 text-black rounded-md"
                key={index}
              >
                {task}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default TodoApp;
