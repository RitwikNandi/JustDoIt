import React, { useContext } from "react";
import { AppContext } from "../context";
import { ITodo, TodoContextType } from "../@types/todo";
import Task from "./Task";

const TaskList = () => {
  const { todo, updateTodo } = useContext(AppContext) as TodoContextType;

  return (
    <>
      {todo.map((task: ITodo) => {
        try {
          <Task key={task.id} updateTodo={updateTodo} todo={task} />;
        } catch (error) {
          console.log(error);
        }
      })}
    </>
  );
};

export default TaskList;
