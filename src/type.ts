export type Todo = {
  id: string;
  todo: string;
  isCompleted: boolean;
  isUrgent: boolean;
  reactions: string[];
};

export type TodoAction = {
  deleteTodo: (id: string) => void;
  completeTodo: (id: string) => void;
  toggleUrgentTodo: (id: string) => void;
};
