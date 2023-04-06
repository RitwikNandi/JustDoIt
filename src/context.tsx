import React, { useState, useContext } from "react";

import { TodoContextType, ITodo } from "./@types/todo";

export const AppContext = React.createContext<TodoContextType | null>(null);

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [todo, setTodo] = React.useState<ITodo[]>([
    {
      id: 1,
      title: "to do 1",
      status: false,
      dLine: 4,
    },
    {
      id: 2,
      title: "to do 2",
      status: true,
      dLine: 1,
    },
  ]);
  const saveTodo = (todos: ITodo) => {
    const newTodo: ITodo = {
      id: Math.random(),
      title: todos.title,
      status: false,
      dLine: todos.dLine,
    };
    setTodo([...todo, newTodo]);
  };

  const updateTodo = (id: number) => {
    todo.filter((todos: ITodo) => {
      if (todos.id === id) {
        todos.status = true;
        setTodo([...todo]);
      }
    });
  };

  return (
    <AppContext.Provider value={{ todo, saveTodo, updateTodo }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
