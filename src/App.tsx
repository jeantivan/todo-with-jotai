import { a, useTransition } from "@react-spring/web";
import { Todo } from "./type";

import globalStyles from "./globalStyles";
import TodosContainer from "./components/TodosContainer";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/Todo";
import AppContainer from "./components/AppContainer";
import Title from "./components/Title";
import Filters from "./components/Filters";
import { useAtom, useSetAtom } from "jotai";
import { todoAtomFamily, todosAtom, filteredTodosAtom } from "./store";

const Todos = ({ deleteTodo }: { deleteTodo: (id: string) => void }) => {
  const [todos] = useAtom(filteredTodosAtom);

  const transitions = useTransition(todos, {
    keys: (todo: Todo) => todo.id,
    from: { opacity: 0, height: 0 },
    enter: { opacity: 1, height: 80 },
    leave: { opacity: 0, height: 0 },
  });
  return transitions((style, todo) => (
    <a.div className="item" style={style}>
      <TodoItem deleteTodo={deleteTodo} {...todo} />
    </a.div>
  ));
};

function App() {
  globalStyles();
  const [todos] = useAtom(todosAtom);

  const setTodos = useSetAtom(todosAtom);
  const deleteTodo = (id: string) => {
    const todoToDelete = todos.find((item) => item.id === id);

    if (todoToDelete) {
      setTodos((prev) => prev.filter((item) => item.id !== id));
      todoAtomFamily.remove(todoToDelete);
    }
  };

  return (
    <AppContainer>
      <Title>Todos with Jotai</Title>
      <TodosContainer>
        <AddTodo />
        <Filters />
        <Todos deleteTodo={deleteTodo} />
      </TodosContainer>
    </AppContainer>
  );
}

export default App;
