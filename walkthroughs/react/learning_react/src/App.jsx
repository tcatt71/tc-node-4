import { useState } from "react";
import List from "./components/List";
import "./App.css";

const App = () => {
  const [list, setList] = useState([]);

  const addTask = (e) => {
    e.preventDefault();
    let input = document.querySelector("#task");
    let select = document.querySelector("#priority");
    let tempList = [...list, { content: input.value, priority: select.value }];
    setList(tempList);
  };

  return (
    <div className="App">
      <form onSubmit={addTask}>
        <label htmlFor="task">New Task:</label>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="Take out the trash..."
        />
        <select name="priority" id="priority">
          <option value=""></option>
          <option value="!">!</option>
          <option value="!!">!!</option>
          <option value="!!!">!!!</option>
        </select>
        <button type="submit">Add Task</button>
      </form>
      <hr />
      <List type="ol" list={list} />
    </div>
  );
};

export default App;
