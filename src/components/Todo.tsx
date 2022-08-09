import { styled } from "@stitches/react";
import {
  CheckCircledIcon,
  TrashIcon,
  StarIcon,
  StarFilledIcon,
} from "@radix-ui/react-icons";
import Button from "./Button";
import { amber, whiteA } from "@radix-ui/colors";

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

const TodoText = styled("div", {
  flex: 1,
  padding: 16,
  fontSize: 18,
  cursor: "pointer",

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

type TodoProps = {
  id: string;
  todo: string;
  isUrgent: boolean;
  isCompleted: boolean;
  deleteTodo: (id: string) => void;
  completeTodo: (id: string) => void;
  toggleUrgentTodo: (id: string) => void;
};

export default function Todo(props: TodoProps) {
  return (
    <TodoContainer>
      {props.isUrgent && (
        <TodoUrgent>
          <StarFilledIcon />
        </TodoUrgent>
      )}
      <TodoText completed={props.isCompleted}>{props.todo}</TodoText>
      <ButtonsContainer>
        <Button
          onClick={() => {
            props.completeTodo(props.id);
          }}
          fab
          rounded="full"
          action="check"
        >
          <CheckCircledIcon />
        </Button>
        <Button
          onClick={() => {
            props.toggleUrgentTodo(props.id);
          }}
          fab
          rounded="full"
          action="urgent"
        >
          <StarIcon />
        </Button>
        <Button
          onClick={() => {
            props.deleteTodo(props.id);
          }}
          fab
          rounded="full"
          action="danger"
        >
          <TrashIcon />
        </Button>
      </ButtonsContainer>
    </TodoContainer>
  );
}
