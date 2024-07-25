import TodoApp from "../../components/TodoApp";
import LongTaskCount from "../../components/LongTaskCount";
import TodoAppReducer from "../../components/TodoAppReducer";

import Layout from "../../components/Layout";

const arrayTask = [
  "create todo list app - create",
  "create todo list app - update",
  "abcd",
];

function Task() {
  return (
    <Layout>
      {/* <TodoApp /> */}
      {/* <LongTaskCount tasks={arrayTask} /> */}
      <TodoAppReducer />
    </Layout>
  );
}

export default Task;
