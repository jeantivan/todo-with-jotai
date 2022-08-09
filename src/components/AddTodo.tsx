import Input from "./Input";
import Button from "./Button";
import { styled } from "@stitches/react";

const Container = styled("div", {
  margin: "0 auto",
  marginBottom: 24,
  display: "flex",
});

type AddTodoProps = {
  addTodo: () => void;
};

export default function AddTodo({ addTodo }: AddTodoProps) {
  return (
    <Container>
      <Input />
      <Button onClick={addTodo}>Add todo</Button>
    </Container>
  );
}
