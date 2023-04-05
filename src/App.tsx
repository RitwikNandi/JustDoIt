import { useState } from "react";
import Form from "./components/Form";
import TaskList from "./components/TaskList";

const App: React.FC = () => {
  return (
    <div className='app'>
      <Form />
      <TaskList />
    </div>
  );
};

export default App;
