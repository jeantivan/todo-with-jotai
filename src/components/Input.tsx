import { styled } from "@stitches/react";

const InputContainer = styled("div", {
  flex: 1,
  display: "flex",
  minHeight: 32,
});

const InputStyled = styled("input", {
  borderRadius: 8,
  marginRight: 8,
  flex: 1,
  outline: "none",
  border: "1px solid #242424",
  fontSize: 18,
  padding: 8,
});

export default function Input(props: any) {
  return (
    <InputContainer>
      <InputStyled {...props} />
    </InputContainer>
  );
}
