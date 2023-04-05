export interface ITodo {
  id: number;
  title: string;
  desc: string;
  status: boolean;
  dLine: number;
  // children: React.ReactNode;
}

export type TodoContextType = {
  todos: ITodo[];
  saveTodo: (todo: ITodo) => void;
  updateTodo: (id: number) => void;
};
