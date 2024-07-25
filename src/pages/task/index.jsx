import TodoApp from "../../components/TodoApp";
import LongTaskCount from "../../components/LongTaskCount";
import TodoAppReducer from "../../components/TodoAppReducer";

const arrayTask = [
  "create todo list app - create",
  "create todo list app - update",
  "abcd",
];

function Task() {
  return (
    <main className="w-screen h-screen bg-white flex justify-center items-center">
      {/* <TodoApp /> */}
      {/* <LongTaskCount tasks={arrayTask} /> */}
      <TodoAppReducer />
    </main>
  );
}

export default Task;
