import { styled } from "@stitches/react";
import {
  CheckCircledIcon,
  TrashIcon,
  StarIcon,
  StarFilledIcon,
  PlusCircledIcon,
} from "@radix-ui/react-icons";
import Button from "./Button";
import { amber } from "@radix-ui/colors";
import { useAtom } from "jotai";
import { todoAtomFamily } from "../store";
import { Todo, TodoAction } from "../type";
import { nanoid } from "nanoid";

const ButtonsContainer = styled("div", {
  display: "flex",
  flexShrink: 0,

  [`& ${Button}`]: {
    margin: "0 8px",
  },
});

const TodoContainer = styled("div", {
  display: "flex",
  width: "100%",
  alignItems: "center",
});

const TodoContent = styled("div", {
  flex: 1,
  padding: 16,
  display: "flex",
  flexDirection: "column",
});

const Reactions = styled("div", {
  fontSize: 12,
  color: "#bababa",
});

const TodoText = styled("div", {
  fontSize: 18,

  variants: {
    completed: {
      true: {
        textDecoration: "line-through",
      },
    },
  },
});

const TodoUrgent = styled("div", {
  display: "flex",
  width: 24,
  height: 24,
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 9999,
  backgroundColor: amber.amber10,
  padding: 4,
  "& > svg": {
    color: "white",
  },
});

type TodoProps = Todo & { deleteTodo: (id: string) => void };

export default function TodoItem(props: TodoProps) {
  const [todo, setTodo] = useAtom(
    todoAtomFamily({
      id: props.id,
      todo: props.todo,
    })
  );

  const toggleCompleted = () =>
    setTodo({ ...todo, isCompleted: !todo.isCompleted });

  const toggleUrgent = () => {
    setTodo({ ...todo, isUrgent: !todo.isUrgent });
  };

  const addReaction = () => {
    let newReactions: string[] = [...todo.reactions, nanoid()];
    setTodo({ ...todo, reactions: newReactions as never[] });
  };

  return (
    <TodoContainer>
      {todo.isUrgent && (
        <TodoUrgent>
          <StarFilledIcon />
        </TodoUrgent>
      )}

      <TodoContent>
        <TodoText completed={todo.isCompleted}>{todo.todo}</TodoText>
        {todo.reactions.length > 0 && (
          <Reactions>Reacciones: {todo.reactions.length}</Reactions>
        )}
      </TodoContent>

      <ButtonsContainer>
        <Button onClick={addReaction} fab rounded="full" title="Add reactions">
          <PlusCircledIcon />
        </Button>
        <Button
          onClick={toggleCompleted}
          fab
          rounded="full"
          action="check"
          title="Complete Todo"
        >
          <CheckCircledIcon />
        </Button>
        <Button
          onClick={toggleUrgent}
          fab
          rounded="full"
          action="urgent"
          title="Mark as urgent"
        >
          <StarIcon />
        </Button>
        <Button
          onClick={() => {
            props.deleteTodo(todo.id);
          }}
          fab
          rounded="full"
          action="danger"
          title="Delete todo"
        >
          <TrashIcon />
        </Button>
      </ButtonsContainer>
    </TodoContainer>
  );
}
