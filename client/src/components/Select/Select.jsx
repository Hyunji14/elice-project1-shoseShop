import Select from 'react-select';
import * as S from './Select.styles';

export default function SelectOption({ size, options, placeholder }) {
  return (
    <S.Container size={size}>
      <Select options={options} placeholder={placeholder} />
    </S.Container>
  );
}
