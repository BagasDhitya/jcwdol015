import TodoApp from "../../components/TodoApp";
import LongTaskCount from "../../components/LongTaskCount";

const arrayTask = [
  "create todo list app - create",
  "create todo list app - update",
  "abcd",
];

const Task = () => {
  return (
    <main className="w-screen h-screen bg-white flex justify-center items-center">
      {/* <TodoApp /> */}
      <LongTaskCount tasks={arrayTask} />
    </main>
  );
};

export default Task;
