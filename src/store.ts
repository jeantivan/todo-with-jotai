import { atomFamily } from "jotai/utils";
import { atom } from "jotai";
import { Todo } from "./type";
import { TODOS } from "./mock/todos";

const initialTodos: Todo[] = TODOS.slice(0, 5).map((todo) => ({
  ...todo,
  reactions: [],
}));

type Param = {
  id: string;
  todo?: string;
};

export const filterAtom = atom<
  "all" | "urgent" | "completed" | "incompleted" | "with-reactions"
>("all");
export const filteredTodosAtom = atom((get) => {
  const filter = get(filterAtom);
  const todos = get(todosAtom);

  switch (filter) {
    case "all":
      return todos;
    case "completed":
      return todos.filter(({ id }) => get(todoAtomFamily({ id })).isCompleted);
    case "urgent":
      return todos.filter(({ id }) => get(todoAtomFamily({ id })).isUrgent);
    case "incompleted":
      return todos.filter(({ id }) => !get(todoAtomFamily({ id })).isCompleted);
    case "with-reactions":
      return todos.filter(
        ({ id }) => get(todoAtomFamily({ id })).reactions.length > 0
      );
    default:
      return todos;
  }
});

export const todoAtomFamily = atomFamily(
  (param: Param) =>
    atom({
      id: param.id,
      todo: param.todo || "No title",
      isCompleted: false,
      isUrgent: false,
      reactions: [],
    }),
  (a: Param, b: Param) => a.id === b.id
);

export const todosAtom = atom<Todo[]>(initialTodos);
