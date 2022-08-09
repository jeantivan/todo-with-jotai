import { styled } from "@stitches/react";
import { ReactNode } from "react";

const Container = styled("div", {
  minWidth: "60%",
  padding: "24px 16px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
});

type TodosContainerProps = {
  children: ReactNode;
};

export default function TodosContainer({ children }: TodosContainerProps) {
  return <Container>{children}</Container>;
}
