import { InputStyle } from './Input.styles';

export default function Input({ size, type, placeholder }) {
  return <InputStyle type={type} size={size} placeholder={placeholder} />;
}
