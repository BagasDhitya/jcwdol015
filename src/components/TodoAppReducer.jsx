import { useReducer, useRef } from "react";
import useCustomNavigate from "../hooks/useCustomNavigate";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

const initialState = {
  tasks: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return {
        tasks: [...state.tasks, action.payload],
      };
    case "REMOVE_TASK":
      return {
        tasks: state.tasks.filter((_, i) => i !== action.index),
      };
    default:
      return state;
  }
}

function TodoAppReducer() {
  const { navigateTo } = useCustomNavigate();
  const [state, dispatch] = useReducer(reducer, initialState);
  const inputRef = useRef(null);

  function addTask() {
    const email = Cookies.get("email");
    if (email !== "admin@mail.com") {
      Swal.fire({
        title: "You don't have permission to create a new task",
        text: "Please use another email address",
        icon: "error",
        confirmButtonText: "OK",
      }).then((response) => {
        if (response.isConfirmed) {
          navigateTo("/auth/register");
        }
      });
    } else {
      dispatch({
        type: "ADD_TASK",
        payload: inputRef.current.value,
      });
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
        <button onClick={addTask} className="w-full rounded-md bg-blue-600 p-1">
          Add Task
        </button>
      </div>
      <div className="flex flex-col">
        <ul className="space-y-3">
          {state?.tasks?.map((task, index) => {
            return (
              <li
                className="w-full h-20 border border-blue-700 text-black rounded-md"
                key={index}
              >
                {task}
                <button
                  onClick={() =>
                    dispatch({
                      type: "REMOVE_TASK",
                      index,
                    })
                  }
                  className="p-3 bg-blue-900 text-white"
                >
                  Remove Task
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default TodoAppReducer;
