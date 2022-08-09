import { styled } from "@stitches/react";
import globalStyles from "./globalStyles";
import TodosContainer from "./components/TodosContainer";
import AddTodo from "./components/AddTodo";
import Button from "./components/Button";
import Todo from "./components/Todo";

const AppContainer = styled("main", {
  minWidth: "100%",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  padding: "32px 0",
});

const Title = styled("h1", {
  fontSize: "1.5rem",
  fontWeight: 700,
  marginBottom: 24,
  margin: "0 auto",
});

const fakeTodo = {
  id: "48e5904e-8023-4a39-8b5c-6b9d5d11a59e",
  todo: "vel enim sit amet nunc viverra dapibus nulla suscipit",
  isCompleted: true,
  isUrgent: true,
};

function App() {
  globalStyles();

  return (
    <AppContainer>
      <Title>Todos with Jotai</Title>
      <TodosContainer>
        <AddTodo addTodo={() => {}} />
        <Todo
          {...fakeTodo}
          completeTodo={(id: string) => {}}
          toggleUrgentTodo={(id: string) => {}}
          deleteTodo={(id: string) => {}}
        />
      </TodosContainer>
    </AppContainer>
  );
}

export default App;
