import { styled } from "@stitches/react";
import globalStyles from "./globalStyles";
import TodosContainer from "./components/TodosContainer";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import AppContainer from "./components/AppContainer";
import Title from "./components/Title";

function App() {
  globalStyles();

  return (
    <AppContainer>
      <Title>Todos with Jotai</Title>
      <TodosContainer>
        <AddTodo addTodo={() => {}} />
        {/* <Todo
          {...fakeTodo}
          completeTodo={(id: string) => {}}
          toggleUrgentTodo={(id: string) => {}}
          deleteTodo={(id: string) => {}}
        /> */}
      </TodosContainer>
    </AppContainer>
  );
}

export default App;
