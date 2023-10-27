import { useState } from "react";

import "./App.css";
import Signup from "./Components/Signup";
import Todo from "./Components/Todo";
import TodoData from "./Components/TodoData";

function App() {
  return (
    <>
      <div className="container">
        <TodoData />
      </div>
    </>
  );
}

export default App;
