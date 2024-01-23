import { ButtonStyle } from "./Button.styled";

export default function Button({ text, color, size }) {
  return (
    <ButtonStyle color={color} size={size}>
      {text}
    </ButtonStyle>
  );
}
