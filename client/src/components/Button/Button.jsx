import { ButtonStyle } from './Button.styles';

export default function Button({ text, color, size }) {
  return (
    <ButtonStyle color={color} size={size}>
      {text}
    </ButtonStyle>
  );
}
