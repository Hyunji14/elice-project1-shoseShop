import { ButtonType } from "./Button.styled";

export default function Button({ text, color, size }) {
  return (
    <ButtonType color={color} size={size}>
      {text}
    </ButtonType>
  );
}
