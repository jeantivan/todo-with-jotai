import Input from "./Input";
import Button from "./Button";
import { styled } from "@stitches/react";
import { useState } from "react";
import { nanoid } from "nanoid";
import { Todo } from "../type";
import { todoAtomFamily, todosAtom } from "../store";
import { useSetAtom } from "jotai";

const Container = styled("div", {
  margin: "0 auto",
  marginBottom: 24,
  display: "flex",
});

type AddTodoProps = {
  addTodo: () => void;
};

export default function AddTodo() {
  const [value, setValue] = useState("");
  const setTodos = useSetAtom(todosAtom);

  const addTodo = () => {
    if (!value) return;
    let newTodo: Todo = {
      id: nanoid(),
      todo: value,
      isCompleted: false,
      isUrgent: false,
      reactions: [],
    };

    todoAtomFamily(newTodo);
    setTodos((prev) => [...prev, newTodo]);
    setValue("");
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  return (
    <Container>
      <Input value={value} onChange={handleChange} />
      <Button disabled={!Boolean(value)} onClick={addTodo}>
        Add todo
      </Button>
    </Container>
  );
}
