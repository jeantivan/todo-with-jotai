export type Todo = {
  id: string;
  todo: string;
  isCompleted: boolean;
  isUrgent: boolean;
};

export type TodoAction = {
  deleteTodo: (id: string) => void;
  completeTodo: (id: string) => void;
  toggleUrgentTodo: (id: string) => void;
};
