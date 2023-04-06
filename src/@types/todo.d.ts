export interface ITodo {
  id: number;
  title: string;
  status: boolean;
  dLine: number;
}

export type TodoContextType = {
  todo: ITodo[];
  saveTodo: (todo: ITodo) => void;
  updateTodo: (id: number) => void;
};
